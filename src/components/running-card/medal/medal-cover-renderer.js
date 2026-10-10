import { CHARACTER_SIGNS } from './medal3d-character-signs.js';

// M2 cover only: one die-struck round medal. No personal records enter this renderer.
// Each call owns its scene and GPU resources; the seven-coin analysis scene is never touched.
const TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const FINISH = {
  gold: { metal: '#b99548', bright: '#f0d18c', dark: '#8c6427', rough: .39 },
  silver: { metal: '#a7abad', bright: '#e9ebe8', dark: '#72787b', rough: .36 },
  brass: { metal: '#99733e', bright: '#d8b879', dark: '#684a25', rough: .44 },
};
const rgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
const canvas = (w, h = w) => Object.assign(document.createElement('canvas'), { width: w, height: h });

// Optical editions for the three hero motifs. The small analysis marks remain in CHARACTER_SIGNS unchanged.
function drawSign(id, g) {
  const shape = points => { g.beginPath(); points.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill(); };
  if(id==='hephaestus') {
    g.rotate(-.46);
    shape([[-.61,-.67],[.64,-.67],[.71,-.6],[.71,-.31],[.64,-.24],[-.61,-.24],[-.68,-.31],[-.68,-.6]]);
    shape([[-.115,-.32],[.115,-.32],[.105,.87],[.05,.93],[-.05,.93],[-.105,.87]]);
  } else if(id==='apollo') {
    g.lineWidth=.042;
    for(const s of [-1,1]) {
      g.beginPath();g.moveTo(-s*.09,.84);g.bezierCurveTo(s*.70,.58,s*.72,-.20,s*.35,-.84);g.stroke();
      for(const [x,y] of [[.26,.64],[.44,.35],[.53,.03],[.51,-.29],[.40,-.59]]) {
        // Pointed laurel blades share a stem, with open negative space between tiers.
        for(const direction of [-1,1]) {
          g.save();g.translate(s*x,y);g.scale(s,1);g.rotate(direction===1?.68:-.80);
          g.beginPath();g.moveTo(0,.035);g.bezierCurveTo(-.10,-.08,-.085,-.22,0,-.32);
          g.bezierCurveTo(.085,-.22,.10,-.08,0,.035);g.fill();g.restore();
        }
      }
    }
  } else if(id==='zeus') {
    shape([[-.12,-.32],[-.86,-.68],[-.95,-.6],[-.72,-.26],[-.94,-.33],[-.66,.03],[-.86,-.03],[-.51,.28],[-.64,.24],[-.23,.48],[0,.68],[.23,.48],[.64,.24],[.51,.28],[.86,-.03],[.66,.03],[.94,-.33],[.72,-.26],[.95,-.6],[.86,-.68],[.12,-.32]]);
    shape([[-.15,-.28],[-.18,-.63],[-.09,-.83],[.10,-.83],[.20,-.71],[.38,-.62],[.14,-.60],[.13,-.25]]);
    shape([[-.16,.40],[-.29,.80],[-.08,.73],[0,.91],[.08,.73],[.29,.80],[.16,.40]]);
  } else CHARACTER_SIGNS[id].draw(g);
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
  const ink = s.getImageData(0, 0, S, S).data;
  let left = S, top = S, right = 0, bottom = 0;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) if (ink[(y * S + x) * 4] > 64) {
    left = Math.min(left, x); right = Math.max(right, x); top = Math.min(top, y); bottom = Math.max(bottom, y);
  }
  // Optical sizing: every sign gets the same longest dimension; a thin spear is not stretched into a broad one.
  const w = right - left + 1, h = bottom - top + 1, k = S * .58 / Math.max(w, h);
  const mask = canvas(S), g = mask.getContext('2d', { willReadFrequently: true });
  g.fillStyle = '#000'; g.fillRect(0, 0, S, S);
  g.drawImage(source, left, top, w, h, (S - w * k) / 2, (S - h * k) / 2, w * k, h * k);
  const pixels = g.getImageData(0, 0, S, S).data;
  const raw = Float32Array.from({ length: S * S }, (_, i) => pixels[i * 4] / 255);
  const height = blur(raw, S, Math.max(1, Math.round(S * .009)));
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
    return .025 + .045 * Math.max(0, 1 - (u-.5)**2*4 - (v-.5)**2*4) + (a*(1-ty)+b*ty) * .032;
  };
  pos.push(0, 0, zAt(.5, .5)); uv.push(.5, .5);
  for (let r = 1; r <= rings; r++) for (let s = 0; s < segs; s++) {
    const f = r / rings, a = s / segs * TAU, u = .5 + .5 * f * Math.cos(a), v = .5 + .5 * f * Math.sin(a);
    pos.push(.914 * f * Math.cos(a), .914 * f * Math.sin(a), zAt(u, v)); uv.push(u, v);
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
    const nx=-(zAt(u+e,v)-zAt(u-e,v))/(e*3.656),ny=-(zAt(u,v+e)-zAt(u,v-e))/(e*3.656),n=Math.hypot(nx,ny,1);
    normals.push(nx/n,ny/n,1/n);
  }
  geometry.setAttribute('normal',new T.Float32BufferAttribute(normals,3));
  geometry.setAttribute('uv', new T.Float32BufferAttribute(uv, 2)); geometry.setIndex(index);
  return geometry;
}

function fieldMaps(relief, finish) {
  const { S, height } = relief, f = FINISH[finish], base = rgb(f.metal), bright = rgb(f.bright);
  const color = canvas(S), rough = canvas(S), c = color.getContext('2d'), r = rough.getContext('2d');
  const a = c.createImageData(S, S), b = r.createImageData(S, S);
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const i = y * S + x, p = height[i], hash = ((Math.imul(x + 1, 374761393) ^ Math.imul(y + 1, 668265263)) >>> 0) / 4294967295;
    const grain = (hash - .5) * 4 + Math.sin(y * 2.4 + Math.sin(x * .009)) * 1.1;
    for (let j = 0; j < 3; j++) a.data[i * 4 + j] = base[j] + (bright[j] - base[j]) * p * .035 + grain * (1 - p * .75);
    a.data[i * 4 + 3] = b.data[i * 4 + 3] = 255;
    const v = (f.rough - p * .12) * 255 + (hash - .5) * 5;
    b.data[i * 4] = b.data[i * 4 + 1] = b.data[i * 4 + 2] = v;
  }
  c.putImageData(a, 0, 0); r.putImageData(b, 0, 0);
  return { color, rough };
}

function studio(T) {
  const s = new T.Scene();
  s.add(new T.Mesh(new T.SphereGeometry(20, 24, 12), new T.MeshBasicMaterial({ color: new T.Color(.42, .40, .36), side: T.BackSide })));
  const panel = (w, h, power, xyz) => {
    const m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: new T.Color(1, .98, .94).multiplyScalar(power), side: T.DoubleSide }));
    m.position.set(...xyz); m.lookAt(0, 0, 0); s.add(m);
  };
  panel(7, 13, 4.2, [-5, 5, 10]); panel(3, 15, 2.6, [9, 0, 6]);
  panel(10, 3, 1.5, [0, -7, 10]); panel(6, 11, .7, [5, 2, 16]);
  return s;
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
  g.fillStyle = '#cc4e24'; g.fillRect(0, 0, 256, 512);
  for (let y = 0; y < 512; y += 3) { g.fillStyle = y % 6 ? 'rgba(255,182,104,.16)' : 'rgba(76,20,5,.18)'; g.fillRect(0, y, 256, 1); }
  for (let x = 0; x < 256; x += 2) { g.fillStyle = 'rgba(255,208,149,.05)'; g.fillRect(x, 0, 1, 512); }
  g.fillStyle = 'rgba(69,25,15,.7)'; g.fillRect(13, 0, 5, 512); g.fillRect(238, 0, 5, 512);
  return c;
}

async function webglMedal(relief, finish, width, height) {
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
    medal.rotation.set(.055, -.12, -.035); medal.position.y = -.13;
    const metal = new T.MeshPhysicalMaterial({ color: f.metal, metalness: 1, roughness: .25 });
    const edge = new T.MeshPhysicalMaterial({ color: f.bright, metalness: 1, roughness: .2 });
    const profile = [[0,-.09],[.94,-.09],[.989,-.065],[1,-.036],[1,.032],[.984,.064],[.95,.071],[.926,.047],[.921,.018],[0,.018]].map(p => new T.Vector2(...p));
    const body = new T.Mesh(new T.LatheGeometry(profile, 384), metal); body.rotation.x = Math.PI / 2; medal.add(body);
    for (const [r,z,tube] of [[.971,.066,.006],[.922,.026,.006]]) {
      const ring = new T.Mesh(new T.TorusGeometry(r,tube,12,384),edge); ring.position.z=z; medal.add(ring);
    }
    const reedGeo = new T.PlaneGeometry(.005, .067), reedMat = new T.MeshPhysicalMaterial({ color: f.dark, metalness: 1, roughness: .38, side: T.DoubleSide });
    for (let i=0;i<240;i++) {
      const a=i/240*TAU, reed=new T.Mesh(reedGeo,reedMat);
      reed.position.set(1.0005*Math.cos(a),1.0005*Math.sin(a),-.014); reed.rotation.set(Math.PI/2,0,a-Math.PI/2); medal.add(reed);
    }
    const maps = fieldMaps(relief,finish), map = new T.CanvasTexture(maps.color), roughnessMap = new T.CanvasTexture(maps.rough);
    map.colorSpace=T.SRGBColorSpace;
    const face = new T.Mesh(faceGeometry(T,relief),new T.MeshPhysicalMaterial({map,roughnessMap,roughness:1,metalness:1,clearcoat:.1,clearcoatRoughness:.35}));
    medal.add(face);
    const loop = new T.Mesh(new T.TorusGeometry(.105,.022,16,96),edge); loop.position.set(0,1.035,.02); medal.add(loop);
    const ribbonMap=new T.CanvasTexture(ribbonTexture()); ribbonMap.colorSpace=T.SRGBColorSpace;
    const ribbonMat=new T.MeshPhysicalMaterial({map:ribbonMap,roughness:.83,metalness:0,sheen:.3,sheenRoughness:.7,side:T.DoubleSide});
    for(const s of [-1,1]) {
      const ribbon=new T.Mesh(new T.PlaneGeometry(.29,.54,1,12),ribbonMat);
      ribbon.position.set(s*.12,1.31,-.06); ribbon.rotation.z=-s*.20; medal.add(ribbon);
    }
    const key=new T.DirectionalLight(0xfff7eb,1.0); key.position.set(-3,4,5); scene.add(key);
    const rim=new T.DirectionalLight(0xffffff,.5); rim.position.set(4,1,2); scene.add(rim);
    const camera=new T.PerspectiveCamera(28,width/height,.1,30);
    camera.position.set(0,.11,2.68/(2*Math.tan(14*Math.PI/180))); camera.lookAt(0,.11,0);
    renderer.render(scene,camera);
    const result=canvas(width,height); result.getContext('2d').drawImage(renderer.domElement,0,0);
    result.dataset.renderer='webgl'; return result;
  } finally {
    if(scene)disposeTree(scene); if(room)disposeTree(room); environment?.dispose();
    renderer?.dispose(); renderer?.forceContextLoss();
  }
}

// The same raised mark and round body, lit on the CPU when WebGL is unavailable.
function flatMedal(relief,finish,width,height) {
  const out=canvas(width,height), g=out.getContext('2d'), {S,height:H}=relief, f=FINISH[finish];
  const R=width*.447, cx=width/2, cy=height*.566;
  g.save(); g.translate(cx,cy);
  for(const s of [-1,1]) {
    g.save(); g.translate(s*R*.12,-R*1.29); g.rotate(s*.20);
    g.fillStyle='#c8532c';g.fillRect(-R*.145,-R*.28,R*.29,R*.56);
    for(let y=-R*.28;y<R*.28;y+=2){g.fillStyle='rgba(255,190,123,.13)';g.fillRect(-R*.145,y,R*.29,.65);}g.restore();
  }
  const disk=(x,y,r,fill)=>{g.fillStyle=fill;g.beginPath();g.arc(x,y,r,0,TAU);g.fill();};
  disk(R*.014,R*.045,R,f.dark);
  const edge=g.createLinearGradient(-R,-R,R,R);edge.addColorStop(0,f.bright);edge.addColorStop(.38,f.metal);edge.addColorStop(.7,f.dark);edge.addColorStop(1,f.bright);
  disk(0,0,R,edge);disk(0,0,R*.963,f.dark);disk(0,0,R*.951,edge);
  const img=new ImageData(S,S), base=rgb(f.metal), bright=rgb(f.bright), L=[-.45,.55,.70];
  for(let y=0;y<S;y++)for(let x=0;x<S;x++){
    const i=y*S+x,u=(x+.5)/S*2-1,v=1-(y+.5)/S*2;
    if(u*u+v*v>1)continue;
    const nx=(H[y*S+Math.max(0,x-1)]-H[y*S+Math.min(S-1,x+1)])*S*.00875+u*.0985;
    const ny=(H[Math.min(S-1,y+1)*S+x]-H[Math.max(0,y-1)*S+x])*S*.00875+v*.0985;
    const len=Math.hypot(nx,ny,1), light=clamp((nx*L[0]+ny*L[1]+L[2])/len,0,1);
    const reflection=.77+.13*Math.exp(-(((u+v*.5+.38)/.30)**2))+.08*Math.cos(u*2.1-v*1.5);
    const shade=(.45+.70*light)*reflection, p=H[i];
    const grain=(((Math.imul(x+1,374761393)^Math.imul(y+1,668265263))>>>0)%13-6)*.30;
    for(let c=0;c<3;c++)img.data[i*4+c]=clamp((base[c]+(bright[c]-base[c])*p*.035)*shade+grain,0,255);
    img.data[i*4+3]=255;
  }
  const field=canvas(S);field.getContext('2d').putImageData(img,0,0);g.drawImage(field,-R*.92,-R*.92,R*1.84,R*1.84);
  g.strokeStyle=f.bright;g.lineWidth=R*.007;g.beginPath();g.arc(0,0,R*.923,0,TAU);g.stroke();
  g.lineWidth=R*.023;g.strokeStyle=f.dark;g.beginPath();g.arc(0,-R*1.038,R*.104,0,TAU);g.stroke();
  g.lineWidth=R*.014;g.strokeStyle=f.bright;g.stroke();g.restore();out.dataset.renderer='flat';return out;
}

export async function renderCoverMedal({id,finish='gold',width=1024,webgl=true}) {
  if(!FINISH[finish])throw new Error(`Unknown cover finish: ${finish}`);
  const relief=coverRelief(id), height=Math.round(width*1.25);
  if(webgl) {
    try{return await webglMedal(relief,finish,width,height);}catch(error){
      // An unavailable/lost context is a rendering capability failure; use the same round relief.
      if(!/WebGL|context|GPU/i.test(String(error)))throw error;
    }
  }
  return flatMedal(relief,finish,width,height);
}

export function paintCoverMedal(g,fig,medal) {
  const k=Math.min(fig.w*.82/medal.width,fig.h*.98/medal.height),w=medal.width*k,h=medal.height*k;
  const x=fig.x+(fig.w-w)/2,y=fig.y+(fig.h-h)/2;
  g.save();g.imageSmoothingEnabled=true;g.imageSmoothingQuality='high';
  g.shadowColor='rgba(0,0,0,.42)';g.shadowBlur=22;g.shadowOffsetX=12;g.shadowOffsetY=18;
  g.drawImage(medal,x,y,w,h);g.restore();return{medalWidth:w*.90};
}
