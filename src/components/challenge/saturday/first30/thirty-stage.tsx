'use client';

import { useEffect, useRef, type RefObject } from 'react';
import * as THREE from 'three';
import styles from './first-thirty.module.css';
import { chapterAt } from './story-timeline';

const root = '/images/challenge/saturday/first30';
const clamp = THREE.MathUtils.clamp;

// Purpose-drawn numerals: real bevelled geometry, with no remote font request.
function digitShape(digit: string) {
  const shape = new THREE.Shape();
  if (digit === '0') {
    shape.moveTo(.18, 0); shape.lineTo(.82, 0); shape.quadraticCurveTo(1, 0, 1, .18); shape.lineTo(1, 1.32); shape.quadraticCurveTo(1, 1.5, .82, 1.5); shape.lineTo(.18, 1.5); shape.quadraticCurveTo(0, 1.5, 0, 1.32); shape.lineTo(0, .18); shape.quadraticCurveTo(0, 0, .18, 0);
    const hole = new THREE.Path(); hole.moveTo(.3, .3); hole.lineTo(.3, 1.2); hole.lineTo(.7, 1.2); hole.lineTo(.7, .3); hole.closePath(); shape.holes.push(hole);
    return shape;
  }
  const paths: Record<string, number[][]> = {
    '2': [[0,1.5],[1,1.5],[1,.75],[.3,.3],[1,.3],[1,0],[0,0],[0,.55],[.7,1],[.7,1.2],[0,1.2]],
    '3': [[0,1.5],[1,1.5],[1,0],[0,0],[0,.3],[.7,.3],[.7,.6],[.14,.6],[.14,.9],[.7,.9],[.7,1.2],[0,1.2]],
    '5': [[0,1.5],[1,1.5],[1,1.2],[.3,1.2],[.3,.92],[1,.92],[1,0],[0,0],[0,.3],[.7,.3],[.7,.62],[0,.62]],
  };
  paths[digit].forEach(([x, y], i) => { if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y); });
  shape.closePath(); return shape;
}

export default function ThirtyStage({ hostRef, onFailure }: { hostRef: RefObject<HTMLDivElement | null>; onFailure: () => void }) {
  const canvasHost = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mount = canvasHost.current;
    const host = hostRef.current;
    if (!mount || !host) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
    catch { onFailure(); return; }

    let disposed = false;
    let frame = 0;
    let target = 0;
    let current = 0;
    let width = 1;
    let height = 1;
    let top = 0;
    let travel = 1;
    let pointerX = 0;
    let rotationX = 0;
    let lastTarget = 0;
    let velocity = 0;
    let previousTime = 0;
    let visible = true;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x080809, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, .1, 60);
    camera.position.set(0, 0, 7);
    const ambient = new THREE.HemisphereLight(0xe7f1ff, 0x171010, 2.2); scene.add(ambient);
    const key = new THREE.DirectionalLight(0xffffff, 4); key.position.set(-3, 5, 6); scene.add(key);
    const orange = new THREE.PointLight(0xff491c, 25, 20); orange.position.set(4, -1, 3); scene.add(orange);
    const geometry = new Map<string, THREE.ExtrudeGeometry>();
    const numberMaterials: THREE.MeshStandardMaterial[] = [];
    const makeNumber = (number: string, dark = false) => {
      const group = new THREE.Group();
      const face = new THREE.MeshStandardMaterial({ color: dark ? 0x28211e : 0xe9e7df, metalness: .55, roughness: dark ? .65 : .3, transparent: true });
      const edge = new THREE.MeshStandardMaterial({ color: 0xd84419, metalness: .8, roughness: .28, transparent: true });
      numberMaterials.push(face, edge);
      number.split('').forEach((digit, i) => {
        if (!geometry.has(digit)) geometry.set(digit, new THREE.ExtrudeGeometry(digitShape(digit), { depth: .21, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: .018, bevelThickness: .025, curveSegments: 10 }));
        const mesh = new THREE.Mesh(geometry.get(digit), [face, edge]);
        mesh.position.set(i * 1.18 - 1.09, -.75, 0); group.add(mesh);
      });
      scene.add(group); return group;
    };
    const plan = makeNumber('25');
    const wall = makeNumber('23', true);
    const finish = makeNumber('30');

    const photos: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = [];
    const textures: THREE.Texture[] = [];
    const loader = new THREE.TextureLoader();
    ['running-front', 'riverside', 'running-back', 'gel-break'].forEach((name, i) => {
      const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.6), material);
      mesh.userData.index = i; photos.push(mesh); scene.add(mesh);
      loader.load(`${root}/${name}-texture.webp`, (texture) => {
        if (disposed) { texture.dispose(); return; }
        texture.colorSpace = THREE.SRGBColorSpace; textures.push(texture); material.map = texture; material.needsUpdate = true; requestDraw();
      }, undefined, () => { /* The same photograph remains available as HTML below. */ });
    });

    const track = new THREE.Group();
    const trackMaterial = new THREE.MeshBasicMaterial({ color: 0x9c301c, transparent: true, opacity: .32 });
    const trackGeometry = new THREE.BoxGeometry(.016, .008, 26);
    [-1.9, -1.3, 1.3, 1.9].forEach(x => { const line = new THREE.Mesh(trackGeometry, trackMaterial); line.position.set(x, -1.6, -7); track.add(line); });
    scene.add(track);

    // A remembered path rather than a literal GPS trace: it tightens as 25 becomes 30.
    const routeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.8, -1.45, -6), new THREE.Vector3(-1.7, -.7, -3.5),
      new THREE.Vector3(-.5, -1.15, -1), new THREE.Vector3(.7, -.55, 1.4),
      new THREE.Vector3(2.2, -1.1, 3.5), new THREE.Vector3(.3, -.65, 5.5),
    ]);
    const routeGeometry = new THREE.TubeGeometry(routeCurve, 96, .018, 6, false);
    const routeMaterial = new THREE.MeshBasicMaterial({ color: 0xff542b, transparent: true, opacity: .28 });
    const route = new THREE.Mesh(routeGeometry, routeMaterial); route.rotation.x = -.11; scene.add(route);

    const dustCount = 90;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPositions[i * 3] = Math.sin(i * 12.37) * 4.6;
      dustPositions[i * 3 + 1] = Math.cos(i * 7.13) * 2.6;
      dustPositions[i * 3 + 2] = -1 - (i % 13) * .42;
    }
    const dustGeometry = new THREE.BufferGeometry(); dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({ color: 0xff6b42, size: .025, transparent: true, opacity: .15, depthWrite: false });
    const dust = new THREE.Points(dustGeometry, dustMaterial); scene.add(dust);

    const scenes = Array.from(host.querySelectorAll<HTMLElement>('[data-scene]'));
    const distance = host.querySelector<HTMLElement>('[data-distance]');
    const progressBar = host.querySelector<HTMLElement>('[data-progress]');
    const chapterLabel = host.querySelector<HTMLElement>('[data-chapter-label]');
    const chapterNames = ['00 / THE PLAN', '01 / 한강으로', '02 / 23 KM', '03 / 28 KM', '04 / MY FIRST 30K'];
    const draw = (time: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden) return;
      const dt = Math.min((time - previousTime) / 16.67 || 1, 3); previousTime = time;
      current += (target - current) * (1 - Math.pow(.87, dt));
      rotationX += (pointerX - rotationX) * (1 - Math.pow(.92, dt));
      velocity = Math.max(velocity, Math.min(Math.abs(target - lastTarget) * 35, .65));
      lastTarget = target;
      velocity *= Math.pow(.88, dt);
      if (Math.abs(target - current) < .0001) current = target;
      const position = chapterAt(current);
      const weight = (chapter: number) => 1 - THREE.MathUtils.smoothstep(Math.abs(position - chapter), .12, .88);
      scenes.forEach((el, i) => {
        const delta = position - i;
        const alpha = weight(i);
        el.style.opacity = String(alpha);
        el.style.visibility = alpha > .01 ? 'visible' : 'hidden';
        el.style.pointerEvents = alpha > .7 ? 'auto' : 'none';
        el.style.transform = `translateY(${clamp(-delta * (i === 3 ? 14 : 32), -38, 38)}px)`;
        el.style.setProperty('--scene-progress', String(clamp(delta + .5, 0, 1)));
        el.inert = i !== Math.round(position);
      });
      const pressure = weight(2);
      const release = weight(4);
      camera.position.set(rotationX * .1 + pressure * .22, pressure * -.1, 7 - pressure * .9 + release * .45);
      camera.lookAt(0, 0, 0);
      const worldWidth = 2 * Math.tan(THREE.MathUtils.degToRad(21)) * camera.position.z * camera.aspect;
      const scale = Math.min(worldWidth * .76 / 2.18, height < 700 ? 1.25 : 1.65);
      for (const [object, chapter] of [[plan, 0], [wall, 2], [finish, 4]] as const) {
        const delta = position - chapter;
        object.visible = weight(chapter) > .001;
        object.traverse(child => {
          if (child instanceof THREE.Mesh) for (const material of child.material as THREE.MeshStandardMaterial[]) material.opacity = weight(chapter);
        });
        object.scale.setScalar(scale * (chapter === 2 ? 1.12 : 1) * (1 + Math.min(Math.abs(delta), 1) * .12));
        object.position.set(chapter === 2 && width > 700 ? worldWidth * .2 : 0, chapter === 2 ? .75 : .7, -Math.abs(delta) * 2);
        object.rotation.set(chapter === 2 ? .09 : -.06, (chapter === 4 ? .06 : -.17) + rotationX * .12 + delta * .45, chapter === 2 ? -.09 : -.018);
      }
      photos.forEach((photo, i) => {
        const side = i % 2 ? 1 : -1;
        const gallery = weight(1);
        photo.material.opacity = gallery * (width < 700 ? .25 : .5);
        photo.position.set(side * (worldWidth * .37 + .15), (i < 2 ? .5 : -.6), -1.5 - (i % 3) * 1.4 + gallery * 1.5);
        photo.rotation.set(.03, -side * (.25 + current * .3), side * .08);
        photo.scale.setScalar(width < 700 ? .7 : 1.2);
      });
      track.rotation.z = rotationX * .025;
      track.scale.x = 1 - pressure * .42;
      trackMaterial.opacity = (.18 + pressure * .2) * (1 - weight(3));
      route.rotation.z = rotationX * .05;
      route.position.z = -4 + position * 1.05;
      route.position.y = -.8;
      routeMaterial.opacity = (.13 + velocity * .18) * (1 - weight(3)) * (1 - pressure * .6);
      dust.rotation.z = current * .18 + rotationX * .015;
      dust.position.z = position * .28;
      dustMaterial.opacity = (.07 + velocity * .3) * (1 - weight(3));
      orange.position.x = 4 - pressure * 5;
      orange.intensity = 22 + pressure * 15 + release * 28 + velocity * 12;
      key.intensity = 4 - pressure * 2.7 + release * .6;
      ambient.intensity = 2.2 - pressure * 1.3;
      const km = position <= 1 ? position * 15 : position <= 2 ? 15 + (position - 1) * 8 : position <= 3 ? 23 + (position - 2) * 5 : 28 + Math.min(position - 3, 1) * 2.02;
      if (distance) distance.textContent = km.toFixed(2).padStart(5, '0');
      if (progressBar) progressBar.style.transform = `scaleX(${clamp(km / 30.02, 0, 1)})`;
      if (chapterLabel) chapterLabel.textContent = chapterNames[Math.round(position)];
      try { renderer.render(scene, camera); host.dataset.webgl = 'ready'; }
      catch { onFailure(); return; }
      if (Math.abs(target - current) > .0001 || Math.abs(pointerX - rotationX) > .001 || velocity > .004) requestDraw();
    };
    function requestDraw() { if (!disposed && !frame && visible && !document.hidden) frame = requestAnimationFrame(draw); }
    const onScroll = () => { target = clamp((window.scrollY - top) / travel, 0, 1); requestDraw(); };
    const resize = () => {
      width = mount.clientWidth; height = mount.clientHeight;
      if (!width || !height) return;
      top = host.getBoundingClientRect().top + window.scrollY; travel = Math.max(1, host.offsetHeight - height);
      renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); onScroll();
    };
    const pointer = (event: PointerEvent) => { if (event.pointerType === 'mouse') { pointerX = (event.clientX / width - .5) * 2; requestDraw(); } };
    const lost = (event: Event) => { event.preventDefault(); onFailure(); };
    const visibility = () => { if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else requestDraw(); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (!visible) { cancelAnimationFrame(frame); frame = 0; } else onScroll(); });
    observer.observe(host);
    const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(mount);
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('pointermove', pointer, { passive: true });
    document.addEventListener('visibilitychange', visibility); renderer.domElement.addEventListener('webglcontextlost', lost);
    resize(); current = target; requestDraw();

    return () => {
      disposed = true; cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect();
      window.removeEventListener('scroll', onScroll); window.removeEventListener('pointermove', pointer); document.removeEventListener('visibilitychange', visibility);
      renderer.domElement.removeEventListener('webglcontextlost', lost);
      scenes.forEach(el => { el.style.removeProperty('opacity'); el.style.removeProperty('visibility'); el.style.removeProperty('transform'); el.style.removeProperty('pointer-events'); el.style.removeProperty('--scene-progress'); el.inert = false; });
      geometry.forEach(value => value.dispose()); numberMaterials.forEach(material => material.dispose()); trackGeometry.dispose(); trackMaterial.dispose();
      routeGeometry.dispose(); routeMaterial.dispose(); dustGeometry.dispose(); dustMaterial.dispose();
      photos.forEach(photo => { photo.geometry.dispose(); photo.material.dispose(); }); textures.forEach(texture => texture.dispose());
      renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove(); delete host.dataset.webgl;
    };
  }, [hostRef, onFailure]);
  return <div className={styles.canvas} ref={canvasHost} aria-hidden="true" />;
}
