// Body provider for 3D-1: the medal's metal — frame, sockets, coin bodies with their face discs, centre plate, jump
// ring — and the ribbon. Procedural for now. The data relief (medal3d-relief.js) is a separate layer: it only sets the
// material maps of each slot's face disc and of the enamel, never this geometry.
//
// Contract the app relies on (a GLB-backed provider can return the same shape later):
//   proceduralBody(THREE, kit) → {
//     root      Object3D. Medal centred at the origin, coin radius = 1 unit, +z toward the viewer, +y up.
//     slots[7]  Clockwise from one o'clock (input 01 … 07): { coin, face, socket }
//               coin    Object3D shown while the coin is struck or blank, hidden while the place is empty.
//               face    Mesh: the struck face. Its UVs map the face disc onto the unit square — centre (.5, .5), v up,
//                       radius .5 = the edge of the relief. The relief layer assigns face.material's maps, nothing else.
//               socket  Object3D, always shown: the seat the coin sits in (an empty place shows its floor).
//               floor   Mesh: that floor (the recess under the coin), so its material can differ per socket.
//     enamel    Mesh over the plate's enamel field, UVs over its bounding box (u across, v up); enamelSize [w, h].
//     ringTop   Vector3 where the ribbon folds over the jump ring.
//     bounds    { x, top, bottom } of the metal, for framing the camera.
//   }
//   kit: material factories from the app — metal(polish, roughness, opts), face(), socketFloor, enamel, ribbon — so the
//   finish switch recolours whatever body is loaded.
// GLB route (not built): model the body in Blender or Tripo, name the nodes coin_1…7, coin_face_1…7 (UV'd discs as above),
// socket_1…7, plate_enamel and ring_top (an empty), load them with GLTFLoader, put kit materials on them and return the
// same object. Only this file changes; the relief layer and the app stay as they are.

export const RING = 2.36;
export const coinAt = k => { const a = (k + .5) / 7 * Math.PI * 2; return [RING * Math.sin(a), RING * Math.cos(a)]; };
// z: frame front, socket floor, coin back / field / rim, plate back, enamel. The fillet climbs from the frame to FILLET.
const Z = { frame: .09, floor: .095, fillet: .205, coinBack: .10, field: .235, rim: .272, plateBack: .09, enamel: .20 };
const BEZEL = 1.16, FACE = .93, DOME = .028;
export const BOUNDS = { x: 3.50, top: 3.56, bottom: -3.56 };

// ---- frame outline: bezels, plate support and bail tab, smooth-unioned like a casting, the bail hole cut through ----
const sdBox = (x, y, hx, hy, r) => { const qx = Math.abs(x) - hx + r, qy = Math.abs(y) - hy + r; return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r; };
const smin = (a, b, k) => { const h = Math.max(k - Math.abs(a - b), 0) / k; return Math.min(a, b) - h * h * k * .25; };
function frameSdf(x, y) {
  let d = 1e9;
  for (let k = 0; k < 7; k++) { const [cx, cy] = coinAt(k); d = smin(d, Math.hypot(x - cx, y - cy) - BEZEL, .14); }
  d = smin(d, sdBox(x, y, 1.33, .56, .34), .14);
  d = smin(d, sdBox(x, y - 2.80, .26, .42, .24), .16);
  return Math.max(d, -(Math.hypot(x, y - 3.0) - .14));
}
// Marching squares → closed loops (saddles resolved by the cell centre).
function contours(f, x0, x1, y0, y1, step) {
  const nx = Math.ceil((x1 - x0) / step) + 1, ny = Math.ceil((y1 - y0) / step) + 1, v = new Float32Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) v[j * nx + i] = f(x0 + i * step, y0 + j * step);
  const pts = new Map(), link = new Map();
  const edge = (i0, j0, i1, j1) => {
    const key = `${i0},${j0},${i1},${j1}`;
    if (!pts.has(key)) { const a = v[j0 * nx + i0], b = v[j1 * nx + i1], t = a / (a - b); pts.set(key, [x0 + (i0 + (i1 - i0) * t) * step, y0 + (j0 + (j1 - j0) * t) * step]); }
    return key;
  };
  const join = (a, b) => { for (const [p, q] of [[a, b], [b, a]]) { if (!link.has(p)) link.set(p, []); link.get(p).push(q); } };
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const c = [v[j * nx + i], v[j * nx + i + 1], v[(j + 1) * nx + i + 1], v[(j + 1) * nx + i]], inside = c.map(x => x < 0);
    const code = inside[0] | inside[1] << 1 | inside[2] << 2 | inside[3] << 3;
    if (!code || code === 15) continue;
    const B = () => edge(i, j, i + 1, j), R = () => edge(i + 1, j, i + 1, j + 1), T = () => edge(i, j + 1, i + 1, j + 1), L = () => edge(i, j, i, j + 1);
    const crossings = [[inside[0] !== inside[1], B], [inside[1] !== inside[2], R], [inside[2] !== inside[3], T], [inside[3] !== inside[0], L]].filter(([x]) => x).map(([, e]) => e);
    if (crossings.length === 2) { join(crossings[0](), crossings[1]()); continue; }
    const centre = (c[0] + c[1] + c[2] + c[3]) / 4 < 0;
    if ((code === 5) === centre) { join(B(), R()); join(T(), L()); } else { join(L(), B()); join(R(), T()); }
  }
  const loops = [], seen = new Set();
  for (const start of link.keys()) {
    if (seen.has(start)) continue;
    const loop = []; let prev = null, cur = start;
    while (cur && !seen.has(cur)) { seen.add(cur); loop.push(pts.get(cur)); const next = link.get(cur).find(n => n !== prev && !seen.has(n)); prev = cur; cur = next; }
    if (loop.length > 8) loops.push(loop);
  }
  return loops;
}
// Keep a point when the outline has moved or turned enough since the last kept one.
function simplify(loop, step = .05, turn = .1) {
  const out = [loop[0]];
  for (let i = 1; i < loop.length - 1; i++) {
    const [ax, ay] = out[out.length - 1], [bx, by] = loop[i], [cx, cy] = loop[i + 1];
    const t = Math.abs(Math.atan2((bx - ax) * (cy - by) - (by - ay) * (cx - bx), (bx - ax) * (cx - bx) + (by - ay) * (cy - by)));
    if (Math.hypot(bx - ax, by - ay) >= step || t > turn) out.push(loop[i]);
  }
  return out;
}
const area = loop => loop.reduce((s, [x, y], i) => { const [u, w] = loop[(i + 1) % loop.length]; return s + x * w - u * y; }, 0) / 2;
// A nameplate: straight sides, corners notched inward, so it reads as a plaque and not as a screen.
function cartouche(hx, hy, r, path) {
  path.moveTo(-hx + r, -hy); path.lineTo(hx - r, -hy); path.absarc(hx, -hy, r, Math.PI, Math.PI / 2, true); path.lineTo(hx, hy - r);
  path.absarc(hx, hy, r, -Math.PI / 2, -Math.PI, true); path.lineTo(-hx + r, hy); path.absarc(-hx, hy, r, 0, -Math.PI / 2, true);
  path.lineTo(-hx, -hy + r); path.absarc(-hx, -hy, r, Math.PI / 2, 0, true);
  return path;
}

// The struck face: a disc domed very slightly (cast faces are not dead flat) whose UVs follow the contract above.
// rings × segs sets the mesh density; 3D-2 uses a dense one so a displacement map can raise the relief for real.
export function faceGeometry(THREE, rings = 24, segs = 160) {
  const pos = [], uv = [], index = [];
  pos.push(0, 0, DOME); uv.push(.5, .5);
  for (let r = 1; r <= rings; r++) for (let s = 0; s < segs; s++) {
    const f = r / rings, a = s / segs * Math.PI * 2, x = FACE * f * Math.cos(a), y = FACE * f * Math.sin(a);
    pos.push(x, y, DOME * (1 - f * f)); uv.push(.5 + .5 * f * Math.cos(a), .5 + .5 * f * Math.sin(a));
  }
  for (let s = 0; s < segs; s++) index.push(0, 1 + s, 1 + (s + 1) % segs);
  for (let r = 1; r < rings; r++) for (let s = 0; s < segs; s++) {
    const a = 1 + (r - 1) * segs + s, b = 1 + (r - 1) * segs + (s + 1) % segs, c = a + segs, d = b + segs;
    index.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(index); g.computeVertexNormals();
  return g;
}

// opts.face: [rings, segs] of the face mesh (default 24 × 160, as 3D-1). Slots also carry `floor`, the socket's floor
// mesh, so a page can give each socket its own floor material (3D-2 numbers them).
export function proceduralBody(THREE, kit, opts = {}) {
  const root = new THREE.Group(), info = {};
  const lathe = (profile, segs = 128) => { const g = new THREE.LatheGeometry(profile.map(([r, z]) => new THREE.Vector2(r, z)), segs); g.rotateX(Math.PI / 2); return g; };
  const arc = (cx, cz, rx, rz, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + rx * Math.cos(a), cz + rz * Math.sin(a)]; });

  // Frame: one extrusion with a rounded (bevelled) edge all round.
  const loops = contours(frameSdf, -4, 4, -4, 4, .02).filter(l => Math.abs(area(l)) > .03).map(l => simplify(l)).sort((a, b) => Math.abs(area(b)) - Math.abs(area(a)));
  const v2 = (l, cw) => { const p = l.map(([x, y]) => new THREE.Vector2(x, y)); return (area(l) < 0) === cw ? p : p.reverse(); };
  const shape = new THREE.Shape(v2(loops[0], true));
  shape.holes = loops.slice(1).map(l => new THREE.Path(v2(l, false)));
  const frameGeo = new THREE.ExtrudeGeometry(shape, { depth: .14, bevelEnabled: true, bevelThickness: .035, bevelSize: .03, bevelSegments: 5, curveSegments: 1 });
  frameGeo.translate(0, 0, Z.frame - .175);
  root.add(new THREE.Mesh(frameGeo, [kit.metal(.8, .22, { anisotropy: .2 }), kit.metal(.5, .3)]));
  info.frameOutline = loops.map(l => l.length);

  // Socket: a concave fillet that climbs from the frame face to the coin's side (a cast seat, not a separate ring), a
  // rounded lip, and a recessed floor that only shows while the coin is absent.
  const fillet = arc(1.0 + .145, Z.fillet, .145, Z.fillet - Z.frame, -Math.PI / 2, -Math.PI, 10);
  const socketProfile = [[1.16, Z.frame - .004], ...fillet, ...arc(.986, Z.fillet, .014, .014, 0, Math.PI, 6).slice(1), [.97, .18], [.968, .125], [.962, .102], [.955, Z.floor]];
  const socketGeo = lathe(socketProfile), floorGeo = new THREE.CircleGeometry(.955, 96);
  const socketMat = kit.metal(.78, .2, { anisotropy: .5 });

  // Coin: a thick body with a rounded edge and a thin raised rim (lathe), and the struck face (faceGeometry above).
  const zb = Z.coinBack, zf = Z.field, zr = Z.rim;
  const bodyGeo = lathe([[0, zb], [.96, zb], [.986, zb + .008], [.998, zb + .03], [1, zb + .05], [1, zr - .05], [.996, zr - .024], [.985, zr - .007], [.968, zr], [.952, zr], [.942, zr - .008], [.935, zf + .012], [FACE, zf]]);
  const faceGeo = faceGeometry(THREE, ...(opts.face || [24, 160]));
  const rimMat = kit.metal(.92, .13, { anisotropy: .6, clearcoat: .4 });
  const slots = [];
  for (let k = 0; k < 7; k++) {
    const [x, y] = coinAt(k), socket = new THREE.Group(), coin = new THREE.Group();
    socket.add(new THREE.Mesh(socketGeo, socketMat));
    const floor = new THREE.Mesh(floorGeo, kit.socketFloor); floor.position.z = Z.floor; socket.add(floor);
    coin.add(new THREE.Mesh(bodyGeo, rimMat));
    const face = new THREE.Mesh(faceGeo, kit.face()); face.position.z = zf + .0005; coin.add(face);
    for (const o of [socket, coin]) { o.position.set(x, y, 0); root.add(o); }
    slots.push({ coin, face, socket, floor });
  }

  // Plate: a cartouche frame with bevelled edges and a recessed enamel field.
  const outer = cartouche(1.26, .50, .17, new THREE.Shape());
  outer.holes.push(cartouche(1.09, .36, .17, new THREE.Path()));
  const plateGeo = new THREE.ExtrudeGeometry(outer, { depth: .08, bevelEnabled: true, bevelThickness: .03, bevelSize: .03, bevelSegments: 5, curveSegments: 18 });
  plateGeo.translate(0, 0, Z.plateBack + .03);
  root.add(new THREE.Mesh(plateGeo, kit.metal(.88, .15, { clearcoat: .4 })));
  const eg = new THREE.ShapeGeometry(cartouche(1.09, .36, .17, new THREE.Shape()), 18), euv = eg.attributes.uv, epos = eg.attributes.position;
  for (let i = 0; i < euv.count; i++) euv.setXY(i, (epos.getX(i) + 1.09) / 2.18, (epos.getY(i) + .36) / .72);
  const enamel = new THREE.Mesh(eg, kit.enamel); enamel.position.z = Z.enamel; root.add(enamel);

  // Jump ring: a real torus through the bail hole, at right angles to the medal.
  const ring = new THREE.Mesh(new THREE.TorusGeometry(.24, .055, 24, 80), kit.metal(.9, .16, { anisotropy: .5 }));
  ring.rotation.y = Math.PI / 2; ring.position.set(0, 3.24, -.01); root.add(ring);

  root.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; } });
  return { root, slots, enamel, enamelSize: [2.18, .72], ringTop: new THREE.Vector3(0, 3.24 + .24, 0), bounds: BOUNDS, info };
}

// The ribbon: two arms of one printed ribbon folded flat over the jump ring's top wire — the crease is level, the right
// arm lies in front, and a half-round fold wraps the wire. Each arm cups a little across its width and bows back as it
// rises, so the cloth is not a flat card.
export function strap(THREE, kit, ringTop, texAspect) {
  const group = new THREE.Group(), w = 1.75, alpha = .40, len = 14, yc = ringTop.y, gap = .084, texLen = w * texAspect;
  for (const side of [-1, 1]) {
    const d = [side * Math.sin(alpha), Math.cos(alpha)], n = [Math.cos(alpha), -side * Math.sin(alpha)], segW = 12, segL = 110, pos = [], uv = [], index = [];
    for (let a = 0; a <= segW; a++) {
      const u = a / segW * 2 - 1, s0 = u * w / 2 * side * Math.tan(alpha);
      for (let b = 0; b <= segL; b++) {
        const t = b / segL, s = s0 + (len - s0) * (t * t * .35 + t * .65), rise = s - s0;
        const cup = .045 * (1 - u * u) * Math.min(1, rise / 1.2), wave = .025 * Math.sin(s * .8 + side) * Math.min(1, rise / 2);
        const z = side * (.02 + (gap - .02) * Math.exp(-rise / .45)) - .045 * Math.max(0, s) - .0025 * s * s + cup + wave;
        pos.push(s * d[0] + u * w / 2 * n[0], yc + s * d[1] + u * w / 2 * n[1], z);
        // The left arm is the same print turned half round (not mirrored), so its wordmark reads the other way.
        uv.push(side < 0 ? (1 - u) / 2 : (u + 1) / 2, (side < 0 ? -s : s) / texLen + .5);
      }
    }
    for (let a = 0; a < segW; a++) for (let b = 0; b < segL; b++) { const i = a * (segL + 1) + b, j = i + segL + 1; index.push(i, j, i + 1, j, j + 1, i + 1); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(index); g.computeVertexNormals();
    group.add(new THREE.Mesh(g, kit.ribbon));
  }
  // The fold: half a tube along the crease, joining the back layer to the front one under the wire.
  const half = w / 2 / Math.cos(alpha), segX = 16, segA = 14, pos = [], uv = [], index = [];
  for (let i = 0; i <= segX; i++) for (let j = 0; j <= segA; j++) {
    const x = -half + 2 * half * i / segX, a = Math.PI * j / segA;
    pos.push(x, yc - gap * Math.sin(a), gap * Math.cos(a)); uv.push(i / segX, .5 - .01 * j / segA);
  }
  for (let i = 0; i < segX; i++) for (let j = 0; j < segA; j++) { const p = i * (segA + 1) + j, q = p + segA + 1; index.push(p, p + 1, q, q, p + 1, q + 1); }
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); fg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); fg.setIndex(index); fg.computeVertexNormals();
  group.add(new THREE.Mesh(fg, kit.ribbon));
  group.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; } });
  return group;
}
