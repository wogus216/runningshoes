import { CHARACTER_SIGNS } from './medal3d-character-signs.js';

// M2 cover only: one die-struck round medal. No personal records enter this renderer.
// Each call owns its scene and GPU resources; the seven-coin analysis scene is never touched.
const TAU = Math.PI * 2;
const FACE_RADIUS = .635;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const FINISH = {
  gold: { metal: '#c2a064', bright: '#f3ddb0', dark: '#725124', field: '#493820', rough: .55 },
  silver: { metal: '#a7abad', bright: '#e9ebe8', dark: '#72787b', field: '#363b3e', rough: .51 },
  brass: { metal: '#99733e', bright: '#d8b879', dark: '#684a25', field: '#3e2d1c', rough: .57 },
};
const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
const canvas = (w, h = w) => Object.assign(document.createElement('canvas'), { width: w, height: h });
// Avalanche the coordinate hash so the metal grain cannot form diagonal checkerboard bands.
function surfaceNoise(x,y) {
  let h=Math.imul(x+1,374761393)^Math.imul(y+1,668265263);
  h=Math.imul(h^(h>>>13),1274126177);return ((h^(h>>>16))>>>0)/4294967295;
}

// Optical editions for the three hero motifs. The small analysis marks remain in CHARACTER_SIGNS unchanged.
function drawSign(id, g) {
  const shape = points => { g.beginPath(); points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill(); };
  if(id==='hephaestus') {
    g.rotate(-.46);
    shape([[-.61,-.67],[.64,-.67],[.71,-.6],[.71,-.31],[.64,-.24],[-.61,-.24],[-.68,-.31],[-.68,-.6]]);
    shape([[-.115,-.32],[.115,-.32],[.105,.87],[.05,.93],[-.05,.93],[-.105,.87]]);
    // Cut into the same die: a forged head facet and a recessed handle channel.
    g.fillStyle='#b0b0b0';
    shape([[-.61,-.62],[.61,-.62],[.65,-.57],[.65,-.49],[-.61,-.49]]);
    g.strokeStyle='#b8b8b8';g.lineWidth=.037;
    g.beginPath();g.moveTo(-.025,-.12);g.lineTo(-.025,.73);g.stroke();
  } else if(id==='apollo') {
    g.lineWidth=.042;
    for(const s of [-1,1]) {
      g.beginPath();g.moveTo(-s*.09,.84);g.bezierCurveTo(s*.70,.58,s*.72,-.20,s*.35,-.84);g.stroke();
      for(const [x,y] of [[.26,.64],[.44,.35],[.53,.03],[.51,-.29],[.40,-.59]]) {
        // Pointed laurel blades share a stem, with open negative space between tiers.
        for(const direction of [-1,1]) {
          g.save();g.translate(s*x,y);g.scale(s,1);g.rotate(direction===1?.68:-.80);
          g.beginPath();g.moveTo(0,.035);g.bezierCurveTo(-.10,-.08,-.085,-.22,0,-.32);
          g.bezierCurveTo(.085,-.22,.10,-.08,0,.035);g.fill();
          g.strokeStyle='#b0b0b0';g.lineWidth=.023;
          g.beginPath();g.moveTo(0,-.025);g.quadraticCurveTo(.014,-.15,0,-.245);g.stroke();g.restore();
        }
      }
    }
  } else if(id==='zeus') {
    shape([[-.12,-.32],[-.86,-.68],[-.95,-.6],[-.72,-.26],[-.94,-.33],[-.66,.03],[-.86,-.03],[-.51,.28],[-.64,.24],[-.23,.48],[0,.68],[.23,.48],[.64,.24],[.51,.28],[.86,-.03],[.66,.03],[.94,-.33],[.72,-.26],[.95,-.6],[.86,-.68],[.12,-.32]]);
    g.beginPath();g.moveTo(-.15,-.28);g.lineTo(-.16,-.57);
    g.bezierCurveTo(-.19,-.76,-.04,-.85,.12,-.79);
    g.lineTo(.21,-.70);g.lineTo(.35,-.65);g.lineTo(.32,-.55);g.lineTo(.25,-.59);
    g.lineTo(.14,-.57);g.bezierCurveTo(.09,-.48,.10,-.37,.13,-.25);g.closePath();g.fill();
    shape([[-.16,.40],[-.29,.80],[-.08,.73],[0,.91],[.08,.73],[.29,.80],[.16,.40]]);
    // Three incised feather channels per wing give the eagle its own sculpted relief.
    g.strokeStyle='#ababab';g.lineWidth=.043;
    for(const s of [-1,1]) {
      for(const [x,y,ex,ey] of [[.22,-.19,.76,-.48],[.23,-.02,.69,-.17],[.22,.14,.52,.09]]) {
        g.beginPath();g.moveTo(s*x,y);g.quadraticCurveTo(s*(x+.13),y-.04,s*ex,ey);g.stroke();
      }
    }
    g.lineWidth=.026;g.beginPath();g.moveTo(0,.46);g.lineTo(0,.73);g.stroke();
    g.fillStyle='#777';g.beginPath();g.arc(.115,-.694,.022,0,TAU);g.fill();
  } else CHARACTER_SIGNS[id].draw(g);
}

// Cover-scale chasing: shallow cuts within the existing die, inspired by
// repousse metalwork. The approved heroes already have their own sculpted cuts.
// Intersect with the original ink so neither silhouettes nor open holes change.
function chaseSign(id, source) {
  if (['hephaestus', 'apollo', 'zeus'].includes(id)) return;
  const S = source.width, detail = canvas(S), g = detail.getContext('2d');
  g.translate(S / 2, S / 2); g.scale(S * .44, S * .44);
  g.lineCap = g.lineJoin = 'round';
  const line = (points, width = .045, color = '#969696') => {
    g.strokeStyle = color; g.lineWidth = width; g.beginPath();
    points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y)); g.stroke();
  };
  const curve = (a,b,c,width = .045) => {
    g.strokeStyle='#969696';g.lineWidth=width;g.beginPath();g.moveTo(...a);g.quadraticCurveTo(...b,...c);g.stroke();
  };
  const ring = (x,y,r,width = .04) => {
    g.strokeStyle='#969696';g.lineWidth=width;g.beginPath();g.arc(x,y,r,0,TAU);g.stroke();
  };
  const facet = points => {
    g.fillStyle='#cdcdcd';g.beginPath();points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill();
  };
  switch (id) {
    case 'heracles':
      g.rotate(-.55);
      curve([-.12,-.91],[-.24,-.62],[-.13,-.68]);
      curve([.12,-.94],[.26,-.65],[.15,-.39]);
      line([[0,-.16],[0,.69]],.035);
      for(const y of [.48,.63,.78])line([[-.1,y],[.1,y+.055]],.032);
      break;
    case 'perseus':
      curve([-.66,.4],[.06,.61],[.69,.39]);
      for(const [x,y] of [[-.17,-.17],[.06,-.3],[.28,-.32]])line([[x+.14,y-.04],[x+.20,y-.27]],.04);
      line([[-.29,.26],[-.10,.46]],.055);break;
    case 'hera':
      facet([[-.75,.28],[-.65,-.20],[-.47,.22]]);
      facet([[.40,.22],[.68,-.24],[.78,.28]]);
      line([[-.66,.48],[.66,.48]],.035);
      for(const x of [-.44,0,.44]) {
        line([[x-.075,.16],[x,.055],[x+.075,.16],[x,.25],[x-.075,.16]],.035);
      }
      line([[0,-.49],[0,-.07]],.035);break;
    case 'penelope':
      line([[-.22,-.55],[0,-.76],[.22,-.55]],.04);
      for(const y of [-.22,-.08,.06,.20])line([[-.24,y],[.24,y+.06]],.032);
      line([[-.17,.55],[0,.72],[.17,.55]],.04);break;
    case 'themis':
      ring(0,-.75,.067,.034);
      line([[0,-.54],[0,.58]],.035);
      for(const s of [-1,1])line([[s*.39,.28],[s*.46,.37],[s*.73,.37],[s*.82,.28]],.038);
      line([[-.22,.78],[.22,.78]],.03);break;
    case 'poseidon':
      curve([-.67,.25],[-.19,-.38],[.58,-.21],.05);
      curve([-.48,.34],[-.03,.02],[.49,-.01],.035);
      line([[.10,-.40],[.14,-.67]],.032);ring(.51,-.26,.025,.032);break;
    case 'theseus':
      line([[-.72,-.79],[.79,-.79],[.79,.79],[-.79,.79],[-.79,-.39],[.4,-.39],[.4,.4],[-.4,.4],[-.4,-.05]],.03,'#b5b5b5');break;
    case 'bellerophon':
      line([[-.20,-.11],[-.52,.52]],.035);line([[.20,-.11],[.52,.52]],.035);
      line([[-.42,.59],[.42,.59]],.04);
      ring(-.62,.59,.045,.03);ring(.62,.59,.045,.03);break;
    case 'demeter':
      curve([-.57,-.39],[-.33,-.77],[.18,-.54],.045);
      line([[-.25,.59],[.23,-.29]],.035);
      for(const y of [.58,.72])line([[-.38+(y-.84)*(-.56),y],[-.24+(y-.84)*(-.56),y+.07]],.032);
      break;
    case 'persephone':
      curve([-.39,-.17],[-.56,.24],[-.30,.60]);
      curve([.39,-.17],[.56,.24],[.30,.60]);
      for(const [x,y] of [[-.2,.1],[.2,.1],[0,.42]])ring(x,y,.135,.026);
      line([[0,-.53],[0,-.33]],.04);break;
    case 'hestia':
      line([[-.62,.29],[.62,.29]],.04);line([[-.49,.44],[.49,.44]],.03);
      curve([-.10,-.63],[-.33,-.24],[-.01,-.08],.05);
      curve([.18,-.43],[.29,-.19],[.09,-.08],.035);break;
    case 'athena':
      for(const [x,y,s] of [[-.47,.48,-1],[-.15,.12,1],[.18,-.24,-1],[.48,-.6,1]]) {
        g.save();g.translate(x+s*.16,y-.12);g.rotate(s*.65);
        line([[0,-.21],[0,.21]],.034);
        g.restore();
      }break;
    case 'odysseus':
      g.rotate(.47);curve([0,-.9],[-.10,-.60],[0,-.28],.045);
      curve([.09,-.85],[.19,-.60],[.08,-.34],.032);
      line([[0,-.05],[0,.62]],.028);break;
    case 'daedalus':
      ring(0,-.71,.075,.033);
      line([[-.10,-.47],[-.47,.65]],.035);line([[.10,-.47],[.47,.65]],.035);
      line([[-.18,.05],[.18,.05]],.028);break;
    case 'achilles':
      facet([[.53,-.61],[.84,-.93],[.61,-.51]]);
      line([[-.52,.65],[.40,-.46]],.03);
      for(const t of [0,.12,.24])line([[-.49+t,.62-t*1.2],[-.40+t,.66-t*1.2]],.03);break;
    case 'orpheus':
      for(const s of [-1,1])curve([s*.59,-.36],[s*.54,.39],[s*.20,.58],.043);
      for(const x of [-.49,-.25,0,.25,.49])ring(x,-.59,.028,.025);
      line([[-.20,.63],[.20,.63]],.035);break;
    case 'artemis':
      curve([-.40,-.68],[.65,0],[-.40,.68],.045);
      for(const x of [-.22,-.08,.06])line([[x,-.055],[x+.04,.055]],.028);
      facet([[.36,0],[.75,0],[.32,.17]]);break;
    case 'atalanta':
      curve([-.34,-.39],[-.73,.02],[-.36,.46],.055);
      curve([.35,-.31],[.65,.13],[.27,.54],.035);
      curve([-.12,.58],[0,.51],[.12,.58],.035);
      line([[.13,-.63],[.53,-.80]],.035);break;
    case 'orion':
      for(const [x,y] of [[-.58,.25],[0,0],[.58,-.25]]) {
        facet([[x,y-.27],[x,y],[x+.27,y],[x+.08,y-.08]]);
        facet([[x,y],[x,y+.27],[x-.08,y+.08],[x-.27,y]]);
      }break;
    case 'ares':
      curve([-.50,-.05],[-.38,-.57],[.18,-.55],.055);
      curve([.24,-.48],[.51,-.33],[.51,.15],.04);
      line([[.02,.36],[.14,.16],[.53,.16]],.045);
      for(const x of [-.4,-.2,0,.2,.4])line([[x,-.82],[x+.05,-.69]],.035);break;
    case 'hector':
      for(const y of [-.32,-.03,.29,.57])line([[-.6,y],[.6,y]],.035);
      for(const [x,y] of [[-.30,-.31],[.30,-.31],[-.5,-.02],[.50,-.02],[-.35,.30],[.35,.30]])line([[x,y],[x,y+.19]],.035);
      line([[-.20,.66],[-.20,.05],[.20,.05],[.20,.66]],.033);break;
    case 'penthesilea':
      for(const s of [-1,1]) {
        facet([[s*.74,-.61],[s*.85,-.08],[s*.74,.25],[s*.62,.18],[s*.71,-.08]]);
        curve([s*.29,-.37],[s*.58,-.22],[s*.28,.03],.04);
      }
      for(const y of [.50,.63,.76])line([[-.07,y],[.07,y+.04]],.027);break;
    case 'aphrodite':
      curve([-.30,.21],[.21,-.06],[.39,.28],.05);
      for(const y of [.30,.40,.50])curve([-.37,y],[.03,y+.06],[.25,y-.08],.032);
      line([[-.67,.11],[-.48,.39]],.036);ring(.58,-.34,.027,.034);break;
    case 'psyche':
      for(const s of [-1,1]) {
        curve([s*.13,-.20],[s*.48,-.66],[s*.72,-.22],.045);
        curve([s*.17,.27],[s*.47,.17],[s*.58,.49],.04);
        line([[s*.18,.35],[s*.39,.58]],.033);
      }break;
    case 'eros':
      facet([[.86,-.86],[.60,-.55],[.71,-.34]]);
      line([[-.58,.44],[.42,-.40]],.03);
      line([[-.73,.40],[-.58,.47],[-.48,.66]],.035);break;
    case 'prometheus':
      curve([-.10,-.73],[-.31,-.44],[0,-.29],.05);
      curve([.17,-.56],[.29,-.40],[.10,-.30],.033);
      line([[-.28,-.18],[.28,-.18]],.035);
      for(const y of [.33,.48,.63,.78])line([[-.08,y],[.08,y+.055]],.03);break;
    case 'talos':
      for(const r of [.3,.55,.79])for(const a of [1.2,2.4,3.6,4.8])line([[Math.cos(a)*(r-.034),Math.sin(a)*(r-.034)],[Math.cos(a)*(r+.034),Math.sin(a)*(r+.034)]],.022);
      facet([[-.11,-.12],[.08,-.16],[.02,.02],[-.08,.13]]);break;
    case 'hermes':
      for(const s of [-1,1])for(const [x,y] of [[.32,-.3],[.47,-.56],[.63,-.76]])line([[s*.40,-.03],[s*(x+.08),y+.12]],.035);
      curve([-.27,-.03],[0,-.33],[.27,-.03],.04);
      line([[-.48,.29],[.48,.29]],.035);break;
    case 'nike':
      for(const [x,y] of [[-.22,.44],[0,.05],[.2,-.32]]) {
        line([[x-.07,y-.09],[x-.37,y-.25]],.03);
        line([[x+.09,y+.01],[x+.32,y+.12]],.03);
      }break;
    case 'pheidippides':
      line([[-.33,.70],[-.33,-.53],[0,-.72],[.33,-.53],[.33,.70]],.045);
      line([[-.25,.53],[.25,.53]],.035);
      line([[0,-.43],[0,-.33]],.04);break;
    case 'dionysus':
      for(const y of [-.70,-.53])line([[-.16,y],[0,y-.12],[.16,y]],.033);
      for(const s of [-1,1])line([[s*.13,-.38],[s*.54,-.22]],.033);
      line([[0,.03],[0,.76]],.03);break;
    case 'ariadne':
      for(const a of [.25,.65,1.05,1.45,1.85,2.25,2.65,3.05,3.45,3.85,4.25,4.65,5.05,5.45,5.85]) {
        line([[-.1+Math.cos(a)*.54,.04+Math.sin(a)*.54],[-.1+Math.cos(a+.08)*.65,.04+Math.sin(a+.08)*.65]],.025);
      }break;
    case 'sisyphus':
      facet([[.01,-.53],[.24,-.65],[.51,-.52],[.33,-.35]]);
      curve([-.07,-.28],[-.17,.04],[.18,.12],.05);
      line([[-.62,.72],[.55,.35]],.03);break;
  }
  const context = source.getContext('2d', { willReadFrequently: true });
  const base = context.getImageData(0,0,S,S), cuts = g.getImageData(0,0,S,S).data;
  for(let i=0;i<base.data.length;i+=4) {
    const alpha=cuts[i+3]/255;
    const value=Math.min(base.data[i],base.data[i]*(1-alpha)+cuts[i]*alpha);
    base.data[i]=base.data[i+1]=base.data[i+2]=value;
  }
  context.putImageData(base,0,0);
}

function blur(src, S, radius) {
  const a = Float32Array.from(src), b = new Float32Array(a.length), n = radius * 2 + 1;
  for (let pass = 0; pass < 2; pass++) {
    for (const horizontal of [true, false]) {
      const step = horizontal ? 1 : S;
      for (let row = 0; row < S; row++) {
        const base = horizontal ? row * S : row;
        let sum = 0;
        for (let x = -radius; x <= radius; x++) sum += a[base + clamp(x, 0, S - 1) * step];
        for (let x = 0; x < S; x++) {
          b[base + x * step] = sum / n;
          sum += a[base + Math.min(S - 1, x + radius + 1) * step] - a[base + Math.max(0, x - radius) * step];
        }
      }
      a.set(b);
    }
  }
  return a;
}

export function coverRelief(id, S = 1024) {
  const sign = CHARACTER_SIGNS[id];
  if (!sign) throw new Error(`Unknown cover figure: ${id}`);
  const source = canvas(S), s = source.getContext('2d', { willReadFrequently: true });
  s.fillStyle = '#000'; s.fillRect(0, 0, S, S);
  s.translate(S / 2, S / 2); s.scale(S * .44, S * .44);
  s.fillStyle = s.strokeStyle = '#fff'; s.lineCap = s.lineJoin = 'round'; drawSign(id,s);
  chaseSign(id,source);
  const ink = s.getImageData(0, 0, S, S).data;
  let left = S, top = S, right = 0, bottom = 0;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) if (ink[(y * S + x) * 4] > 64) {
    left = Math.min(left, x); right = Math.max(right, x); top = Math.min(top, y); bottom = Math.max(bottom, y);
  }
  // Preserve the hero sizing, but keep diagonal tips and square corners inside
  // the circular face. Bounding-box sizing alone can clip them at the rim.
  const w = right - left + 1, h = bottom - top + 1;
  const cx = (left + right + 1) / 2, cy = (top + bottom + 1) / 2;
  let reach = 0;
  for (let y = top; y <= bottom; y++) for (let x = left; x <= right; x++) if (ink[(y * S + x) * 4] > 64) {
    reach = Math.max(reach, Math.hypot(x + .5 - cx, y + .5 - cy));
  }
  const k = Math.min(S * .76 / Math.max(w, h), S * .47 / Math.max(1, reach));
  const mask = canvas(S), g = mask.getContext('2d', { willReadFrequently: true });
  g.fillStyle = '#000'; g.fillRect(0, 0, S, S);
  g.drawImage(source, left, top, w, h, (S - w * k) / 2, (S - h * k) / 2, w * k, h * k);
  const pixels = g.getImageData(0, 0, S, S).data;
  const raw = Float32Array.from({ length: S * S }, (_, i) => pixels[i * 4] / 255);
  const height = blur(raw, S, Math.max(1, Math.round(S * .006)));
  for (let i = 0; i < height.length; i++) { const t = clamp((height[i] - .025) / .95, 0, 1); height[i] = t * t * (3 - 2 * t); }
  return { S, height };
}

function faceGeometry(T, relief) {
  const { S, height } = relief, rings = 224, segs = 768;
  const pos = [], uv = [], index = [], normals = [];
  const zAt = (u, v) => {
    const x = clamp(u * (S - 1), 0, S - 1), y = clamp((1 - v) * (S - 1), 0, S - 1);
    const x0=Math.floor(x),y0=Math.floor(y),x1=Math.min(S-1,x0+1),y1=Math.min(S-1,y0+1),tx=x-x0,ty=y-y0;
    const a=height[y0*S+x0]*(1-tx)+height[y0*S+x1]*tx,b=height[y1*S+x0]*(1-tx)+height[y1*S+x1]*tx;
    return .012 + .012 * Math.max(0, 1 - (u-.5)**2*4 - (v-.5)**2*4) + (a*(1-ty)+b*ty) * .064;
  };
  pos.push(0, 0, zAt(.5, .5)); uv.push(.5, .5);
  for (let r = 1; r <= rings; r++) for (let s = 0; s < segs; s++) {
    const f = r / rings, a = s / segs * TAU, u = .5 + .5 * f * Math.cos(a), v = .5 + .5 * f * Math.sin(a);
    pos.push(FACE_RADIUS * f * Math.cos(a), FACE_RADIUS * f * Math.sin(a), zAt(u, v)); uv.push(u, v);
  }
  for (let s = 0; s < segs; s++) index.push(0, 1 + s, 1 + (s + 1) % segs);
  for (let r = 1; r < rings; r++) for (let s = 0; s < segs; s++) {
    const a = 1 + (r - 1) * segs + s, b = 1 + (r - 1) * segs + (s + 1) % segs;
    const c = 1 + r * segs + s, d = 1 + r * segs + (s + 1) % segs;
    index.push(a, c, b, b, c, d);
  }
  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(pos, 3));
  // Sample the continuous height field: triangle density must not stripe the bevel.
  for (let i=0;i<uv.length;i+=2) {
    const u=uv[i],v=uv[i+1],e=1/S;
    const nx=-(zAt(u+e,v)-zAt(u-e,v))/(e*4*FACE_RADIUS),ny=-(zAt(u,v+e)-zAt(u,v-e))/(e*4*FACE_RADIUS),n=Math.hypot(nx,ny,1);
    normals.push(nx/n,ny/n,1/n);
  }
  geometry.setAttribute('normal',new T.Float32BufferAttribute(normals,3));
  geometry.setAttribute('uv', new T.Float32BufferAttribute(uv, 2)); geometry.setIndex(index);
  return geometry;
}

function fieldMaps(relief, finish) {
  const { S, height } = relief, f = FINISH[finish], base = rgb(f.field), bright = rgb(f.metal);
  const color = canvas(S), rough = canvas(S), c = color.getContext('2d'), r = rough.getContext('2d');
  const a = c.createImageData(S, S), b = r.createImageData(S, S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const i = y * S + x, p = height[i], hash = surfaceNoise(x,y);
    const grain = (hash - .5) * 2.5;
    // Recesses retain a dark patina; raised metal is burnished on the same die.
    for (let j = 0; j < 3; j++) a.data[i * 4 + j] = base[j] + (bright[j] - base[j]) * p + grain * (1 - p * .75);
    a.data[i * 4 + 3] = b.data[i * 4 + 3] = 255;
    const v = (f.rough - p * .30) * 255 + (hash - .5) * 8 * (1-p*.9);
    b.data[i * 4] = b.data[i * 4 + 1] = b.data[i * 4 + 2] = v;
  }
  c.putImageData(a, 0, 0); r.putImageData(b, 0, 0);
  return { color, rough };
}

function studio(T) {
  const s = new T.Scene();
  s.add(new T.Mesh(new T.SphereGeometry(20, 24, 12), new T.MeshBasicMaterial({ color: new T.Color(.13, .125, .115), side: T.BackSide })));
  const panel = (w, h, power, xyz) => {
    const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: new T.Color(1, .98, .94).multiplyScalar(power), side: T.DoubleSide }));
    m.position.set(...xyz); m.lookAt(0, 0, 0); s.add(m);
  };
  panel(5, 13, 5.0, [-5, 5, 10]); panel(2, 14, 3.4, [9, 0, 6]);
  panel(10, 2, 1.8, [0, -7, 10]); panel(6, 11, .45, [5, 2, 16]);
  // Reflect into the raised sign at the fixed camera/medal angle.
  panel(9, 7, 2.0, [-7, -5, 10]);
  return s;
}

// Four rows of cut-metal pyramids. Each triangle has its own normal, so the
// decoration reflects the studio as real facets instead of a printed pattern.
// The CPU renderer projects these same triangles when WebGL is unavailable.
function ornamentTriangles() {
  const triangles=[], polar=(r,a,z)=>[r*Math.cos(a),r*Math.sin(a),z];
  const pyramid=(corners,peak)=>{
    for(let i=0;i<4;i++)triangles.push([corners[i],corners[(i+1)%4],peak]);
  };
  for(let row=0;row<4;row++) {
    const inner=.661+row*.066,outer=inner+.066,segments=72,step=TAU/segments;
    const low=.030+row*.013,high=low+.013;
    for(let i=0;i<segments;i++) {
      const a=(i+row*.27)*step,b=a+step;
      pyramid([polar(inner,a,low),polar(outer,a+step*.27,high),polar(outer,b+step*.27,high),polar(inner,b,low)],
        polar((inner+outer)/2,(a+b)/2+step*.135,(low+high)/2+.032));
    }
  }
  // Narrow radial cuts crown the outside of the faceted annulus.
  for(let i=0;i<120;i++) {
    const a=i/120*TAU,b=(i+.80)/120*TAU;
    pyramid([polar(.936,a,.102),polar(.974,a,.109),polar(.974,b,.109),polar(.936,b,.102)],polar(.955,(a+b)/2,.124));
  }
  return triangles;
}

function ornamentGeometry(T) {
  const geometry=new T.BufferGeometry();
  geometry.setAttribute('position',new T.Float32BufferAttribute(ornamentTriangles().flat(2),3));
  geometry.computeVertexNormals();return geometry;
}

function paintFlatOrnament(g,R,finish) {
  const f=FINISH[finish],base=rgb(f.metal),bright=rgb(f.bright);
  for(const triangle of ornamentTriangles()) {
    const [a,b,c]=triangle,u=b.map((v,i)=>v-a[i]),v=c.map((n,i)=>n-a[i]);
    const nx=u[1]*v[2]-u[2]*v[1],ny=u[2]*v[0]-u[0]*v[2],nz=u[0]*v[1]-u[1]*v[0];
    const length=Math.hypot(nx,ny,nz),light=Math.max(0,(-.45*nx+.55*ny+.70*nz)/length);
    const shine=Math.pow(light,12),shade=.34+.68*light;
    const color=base.map((value,i)=>Math.round(clamp(value*shade+bright[i]*shine*.24,0,255)));
    g.fillStyle=`rgb(${color.join(',')})`;g.beginPath();
    triangle.forEach(([x,y],i)=>i?g.lineTo(x*R,-y*R):g.moveTo(x*R,-y*R));g.closePath();g.fill();
  }
}

function disposeTree(root) {
  const geometries = new Set(), materials = new Set(), textures = new Set();
  root.traverse(o => {
    if (o.geometry) geometries.add(o.geometry);
    for (const m of o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []) {
      materials.add(m); for (const v of Object.values(m)) if (v?.isTexture) textures.add(v);
    }
  });
  textures.forEach(t => t.dispose()); materials.forEach(m => m.dispose()); geometries.forEach(g => g.dispose());
}

function ribbonTexture() {
  const c = canvas(256, 512), g = c.getContext('2d');
  const fold=g.createLinearGradient(0,0,256,0);
  fold.addColorStop(0,'#83351f');fold.addColorStop(.18,'#bb4928');fold.addColorStop(.46,'#d9683d');fold.addColorStop(.78,'#b24425');fold.addColorStop(1,'#7c2e1b');
  g.fillStyle = fold; g.fillRect(0, 0, 256, 512);
  for (let y = 0; y < 512; y += 3) { g.fillStyle = y % 6 ? 'rgba(255,182,104,.16)' : 'rgba(76,20,5,.18)'; g.fillRect(0, y, 256, 1); }
  for (let x = 0; x < 256; x += 2) { g.fillStyle = 'rgba(255,208,149,.05)'; g.fillRect(x, 0, 1, 512); }
  g.fillStyle = 'rgba(69,25,15,.7)'; g.fillRect(13, 0, 5, 512); g.fillRect(238, 0, 5, 512);
  return c;
}

async function webglMedal(relief, finish, width, height, portrait = false) {
  const T = await import('./medal3d-three.js');
  let renderer, environment, scene, room;
  try {
    renderer = new T.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power', preserveDrawingBuffer: true });
    renderer.setPixelRatio(1); renderer.setSize(width, height, false); renderer.setClearColor(0, 0);
    renderer.outputColorSpace = T.SRGBColorSpace; renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = .95;
    scene = new T.Scene(); room = studio(T);
    const pmrem = new T.PMREMGenerator(renderer);
    try { environment = pmrem.fromScene(room, .08, .1, 30); } finally { pmrem.dispose(); }
    scene.environment = environment.texture; scene.environmentIntensity = 1.0;
    const f = FINISH[finish], medal = new T.Group(); scene.add(medal);
    medal.rotation.set(.25, -.34, -.07); medal.position.y = portrait ? 0 : -.13;
    const metal = new T.MeshPhysicalMaterial({ color: f.metal, metalness: 1, roughness: .25 });
    const edge = new T.MeshPhysicalMaterial({ color: f.bright, metalness: 1, roughness: .2 });
    const profile = [[0,-.27],[.945,-.27],[.983,-.238],[1,-.19],[1,.045],[.985,.094],[.975,.112],[.932,.098],[.925,.065],[.658,.016],[.64,.004],[0,.004]].map(p => new T.Vector2(...p));
    const body = new T.Mesh(new T.LatheGeometry(profile, 384), metal); body.rotation.x = Math.PI / 2; medal.add(body);
    for (const [r,z,tube] of [[.983,.101,.008],[.93,.09,.007],[.651,.034,.010],[.638,.019,.005]]) {
      const ring = new T.Mesh(new T.TorusGeometry(r,tube,12,384),edge); ring.position.z=z; medal.add(ring);
    }
    medal.add(new T.Mesh(ornamentGeometry(T),new T.MeshPhysicalMaterial({color:f.metal,metalness:1,roughness:.32,flatShading:true})));
    const reedGeo = new T.PlaneGeometry(.005, .15), reedMat = new T.MeshPhysicalMaterial({ color: f.dark, metalness: 1, roughness: .38, side: T.DoubleSide });
    for (let i=0;i<240;i++) {
      const a=i/240*TAU, reed=new T.Mesh(reedGeo,reedMat);
      reed.position.set(1.0005*Math.cos(a),1.0005*Math.sin(a),-.067); reed.rotation.set(Math.PI/2,0,a-Math.PI/2); medal.add(reed);
    }
    const maps = fieldMaps(relief,finish), map = new T.CanvasTexture(maps.color), roughnessMap = new T.CanvasTexture(maps.rough);
    map.colorSpace=T.SRGBColorSpace;
    const face = new T.Mesh(faceGeometry(T,relief),new T.MeshPhysicalMaterial({map,roughnessMap,roughness:1,metalness:1,clearcoat:.1,clearcoatRoughness:.35}));
    medal.add(face);
    if (!portrait) {
      const loop = new T.Mesh(new T.TorusGeometry(.105,.022,16,96),edge); loop.position.set(0,1.035,.02); medal.add(loop);
      const ribbonMap=new T.CanvasTexture(ribbonTexture()); ribbonMap.colorSpace=T.SRGBColorSpace;
      const ribbonMat=new T.MeshPhysicalMaterial({map:ribbonMap,roughness:.83,metalness:0,sheen:.3,sheenRoughness:.7,side:T.DoubleSide});
      for(const s of [-1,1]) {
        const ribbonGeometry=new T.PlaneGeometry(.29,.54,16,20), positions=ribbonGeometry.attributes.position;
        for(let i=0;i<positions.count;i++) {
          const x=positions.getX(i)/.145,y=positions.getY(i)/.27;
          positions.setZ(i,.028*Math.cos(x*Math.PI*.65)+.012*Math.sin(y*2+x));
        }
        ribbonGeometry.computeVertexNormals();
        const ribbon=new T.Mesh(ribbonGeometry,ribbonMat);
        ribbon.position.set(s*.12,1.31,-.06); ribbon.rotation.z=-s*.20; medal.add(ribbon);
      }
    }
    const key=new T.DirectionalLight(0xfff7eb,1.0); key.position.set(-3,4,5); scene.add(key);
    const rim=new T.DirectionalLight(0xffffff,.5); rim.position.set(4,1,2); scene.add(rim);
    const camera=new T.PerspectiveCamera(28,width/height,.1,30);
    camera.position.set(0,portrait ? 0 : .11,(portrait ? 2.36 : 2.68)/(2*Math.tan(14*Math.PI/180))); camera.lookAt(0,portrait ? 0 : .11,0);
    renderer.render(scene,camera);
    const result=canvas(width,height); result.getContext('2d').drawImage(renderer.domElement,0,0);
    result.dataset.renderer='webgl'; return result;
  } finally {
    if(scene)disposeTree(scene); if(room)disposeTree(room); environment?.dispose();
    renderer?.dispose(); renderer?.forceContextLoss();
  }
}

// The same raised mark and round body, lit on the CPU when WebGL is unavailable.
function flatMedal(relief,finish,width,height,portrait = false) {
  const out=canvas(width,height), g=out.getContext('2d'), {S,height:H}=relief, f=FINISH[finish];
  const R=width*(portrait ? .46 : .447), cx=width/2, cy=height*(portrait ? .5 : .566);
  g.save(); g.translate(cx,cy);
  if(!portrait) for(const s of [-1,1]) {
    g.save(); g.translate(s*R*.12,-R*1.29); g.rotate(s*.20);
    g.fillStyle='#c8532c';g.fillRect(-R*.145,-R*.28,R*.29,R*.56);
    for(let y=-R*.28;y<R*.28;y+=2){g.fillStyle='rgba(255,190,123,.13)';g.fillRect(-R*.145,y,R*.29,.65);}g.restore();
  }
  const disk=(x,y,r,fill)=>{g.fillStyle=fill;g.beginPath();g.arc(x,y,r,0,TAU);g.fill();};
  disk(R*.030,R*.072,R,f.dark);
  const edge=g.createLinearGradient(-R,-R,R,R);edge.addColorStop(0,f.bright);edge.addColorStop(.38,f.metal);edge.addColorStop(.7,f.dark);edge.addColorStop(1,f.bright);
  disk(0,0,R,edge);disk(0,0,R*.963,f.dark);disk(0,0,R*.951,edge);
  paintFlatOrnament(g,R,finish);
  const img=new ImageData(S,S), base=rgb(f.field), bright=rgb(f.metal), L=[-.45,.55,.70];
  for(let y=0;y<S;y++)for(let x=0;x<S;x++){
    const i=y*S+x,u=(x+.5)/S*2-1,v=1-(y+.5)/S*2;
    if(u*u+v*v>1)continue;
    const nx=(H[y*S+Math.max(0,x-1)]-H[y*S+Math.min(S-1,x+1)])*S*(.064/(4*FACE_RADIUS))+u*(.048/(2*FACE_RADIUS));
    const ny=(H[Math.min(S-1,y+1)*S+x]-H[Math.max(0,y-1)*S+x])*S*(.064/(4*FACE_RADIUS))+v*(.048/(2*FACE_RADIUS));
    const len=Math.hypot(nx,ny,1), light=clamp((nx*L[0]+ny*L[1]+L[2])/len,0,1);
    const reflection=.77+.13*Math.exp(-(((u+v*.5+.38)/.30)**2))+.08*Math.cos(u*2.1-v*1.5);
    const shade=(.45+.70*light)*reflection, p=H[i];
    const grain=(surfaceNoise(x,y)-.5)*2.5*(1-p*.75);
    for(let c=0;c<3;c++)img.data[i*4+c]=clamp((base[c]+(bright[c]-base[c])*p)*shade+grain,0,255);
    img.data[i*4+3]=255;
  }
  const field=canvas(S);field.getContext('2d').putImageData(img,0,0);g.drawImage(field,-R*FACE_RADIUS,-R*FACE_RADIUS,R*2*FACE_RADIUS,R*2*FACE_RADIUS);
  for(const [radius,line] of [[.983,.008],[.93,.006],[.651,.009],[.638,.004]]) {
    g.strokeStyle=f.bright;g.lineWidth=R*line;g.beginPath();g.arc(0,0,R*radius,0,TAU);g.stroke();
  }
  if(!portrait){g.lineWidth=R*.023;g.strokeStyle=f.dark;g.beginPath();g.arc(0,-R*1.038,R*.104,0,TAU);g.stroke();g.lineWidth=R*.014;g.strokeStyle=f.bright;g.stroke();}
  g.restore();out.dataset.renderer='flat';return out;
}

export async function renderCoverMedal({id,finish='gold',width=1024,webgl=true,portrait=false}) {
  if(!FINISH[finish])throw new Error(`Unknown cover finish: ${finish}`);
  const relief=coverRelief(id), height=portrait?width:Math.round(width*1.25);
  if(webgl) {
    try{return await webglMedal(relief,finish,width,height,portrait);}catch(error){
      // An unavailable/lost context is a rendering capability failure; use the same round relief.
      if(!/WebGL|context|GPU/i.test(String(error)))throw error;
    }
  }
  return flatMedal(relief,finish,width,height,portrait);
}

export function paintCoverMedal(g,fig,medal) {
  const k=Math.min(fig.w*.82/medal.width,fig.h*.98/medal.height),w=medal.width*k,h=medal.height*k;
  const x=fig.x+(fig.w-w)/2,y=fig.y+(fig.h-h)/2;
  g.save();g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
  g.shadowColor='rgba(0,0,0,.60)';g.shadowBlur=18;g.shadowOffsetX=12;g.shadowOffsetY=20;
  g.drawImage(medal,x,y,w,h);g.restore();return{medalWidth:w*.90};
}
