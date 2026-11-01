"use client";

import { memo, useLayoutEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Sky } from "@react-three/drei";
import type { CourseData } from "./course-model";
import {
  clamp,
  pointAt,
  pointHeight,
  routeProgress,
  smooth,
  terrainHeight,
} from "./course-model";

const GROUND = "#ffffff";
const GOLD = "#f6cd8b";
const HEIGHT = (data: CourseData, x: number, z: number) =>
  (terrainHeight(data, x, z) / 100) * data.verticalScale;

function inside(x: number, z: number, polygon: number[][]) {
  let hit = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const a = polygon[i],
      b = polygon[j];
    if (
      a[1] > z !== b[1] > z &&
      x < ((b[0] - a[0]) * (z - a[1])) / (b[1] - a[1]) + a[0]
    )
      hit = !hit;
  }
  return hit;
}

function clipPolygon(points: number[][], data: CourseData) {
  const t = data.terrain;
  let polygon = points;
  for (const [axis, value, sign] of [
    [0, t.x0, 1],
    [0, t.x1, -1],
    [1, t.z0, 1],
    [1, t.z1, -1],
  ]) {
    const output: number[][] = [];
    for (let i = 0; i < polygon.length; i++) {
      const a = polygon[i],
        b = polygon[(i + 1) % polygon.length];
      const inA = (a[axis] - value) * sign >= 0,
        inB = (b[axis] - value) * sign >= 0;
      if (inA) output.push(a);
      if (inA !== inB) {
        const f = (value - a[axis]) / (b[axis] - a[axis]);
        output.push([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f]);
      }
    }
    polygon = output;
  }
  return polygon;
}

const Landscape = memo(function Landscape({ data }: { data: CourseData }) {
  const geometry = useMemo(() => {
    const t = data.terrain;
    const g = new THREE.PlaneGeometry(
      t.x1 - t.x0,
      t.z1 - t.z0,
      t.size - 1,
      t.size - 1,
    );
    g.rotateX(-Math.PI / 2);
    g.translate((t.x0 + t.x1) / 2, 0, (t.z0 + t.z1) / 2);
    const p = g.getAttribute("position"),
      colors = new Float32Array(p.count * 3);
    const low = new THREE.Color("#858064"),
      high = new THREE.Color("#5b6550"),
      forest = new THREE.Color("#303d2d");
    const forestBounds = data.forest.map((poly) => ({
      poly,
      minX: Math.min(...poly.map((p) => p[0])),
      maxX: Math.max(...poly.map((p) => p[0])),
      minZ: Math.min(...poly.map((p) => p[1])),
      maxZ: Math.max(...poly.map((p) => p[1])),
    }));
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i),
        z = p.getZ(i),
        e = terrainHeight(data, x, z);
      const isWater = data.water.some((poly) => inside(x, z, poly));
      p.setY(i, isWater ? -0.025 : (e / 100) * data.verticalScale);
      const noise =
        (Math.sin(x * 5.1 + z * 3.7) * Math.sin(x * 0.93 - z * 2.2) + 1) / 2;
      const c = low.clone().lerp(high, clamp(e / 190) * 0.7 + noise * 0.13);
      const wooded = forestBounds.some(
        (b) =>
          x > b.minX &&
          x < b.maxX &&
          z > b.minZ &&
          z < b.maxZ &&
          inside(x, z, b.poly),
      );
      if (wooded) c.lerp(forest, 0.64);
      c.multiplyScalar(0.91 + noise * 0.13);
      c.toArray(colors, i * 3);
    }
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    g.computeVertexNormals();
    return g;
  }, [data]);
  return (
    <mesh geometry={geometry} receiveShadow>
      <meshStandardMaterial
        color={GROUND}
        vertexColors
        roughness={0.95}
        metalness={0.03}
        onBeforeCompile={(shader) => {
          shader.vertexShader = "varying vec3 vLandscapePosition;\n" + shader.vertexShader;
          shader.vertexShader = shader.vertexShader.replace("#include <begin_vertex>", "#include <begin_vertex>\nvLandscapePosition = (modelMatrix * vec4(transformed, 1.0)).xyz;");
          shader.fragmentShader = "varying vec3 vLandscapePosition;\n" + shader.fragmentShader;
          shader.fragmentShader = shader.fragmentShader.replace("#include <color_fragment>", `#include <color_fragment>
            float grain = sin(vLandscapePosition.x * 71.0 + sin(vLandscapePosition.z * 37.0)) * sin(vLandscapePosition.z * 53.0 + vLandscapePosition.x * 19.0);
            float patch = sin(vLandscapePosition.x * 2.3) * sin(vLandscapePosition.z * 3.7);
            diffuseColor.rgb *= 0.92 + grain * 0.075 + patch * 0.07;
          `);
        }}
      />
    </mesh>
  );
});

const Water = memo(function Water({ data }: { data: CourseData }) {
  const shapes = useMemo(
    () =>
      data.water
        .map((poly) => clipPolygon(poly, data))
        .filter((p) => p.length > 3)
        .map((poly) => {
          const shape = new THREE.Shape(
            poly.map((p) => new THREE.Vector2(p[0], -p[1])),
          );
          const g = new THREE.ShapeGeometry(shape);
          g.rotateX(-Math.PI / 2);
          return g;
        }),
    [data],
  );
  return (
    <group position={[0, 0.055, 0]}>
      {shapes.map((g, i) => (
        <mesh key={i} geometry={g}>
          <meshStandardMaterial
            color="#4a656b"
            roughness={0.18}
            metalness={0.36}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
});

const Bridge = memo(function Bridge({ data }: { data: CourseData }) {
  const meshes = useMemo(
    () =>
      data.bridgeModel?.meshes.map((m) => {
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(m.positions, 3),
        );
        geometry.setIndex(m.indices);
        geometry.computeVertexNormals();
        return {
          geometry,
          color: new THREE.Color(...(m.color as [number, number, number])),
        };
      }) ?? [],
    [data],
  );
  // OSM bridge endpoints, in the same local coordinate system as the GPX.
  const a = [-28.499, 0.284],
    b = [-23.057, 7.468];
  const angle = -Math.atan2(b[1] - a[1], b[0] - a[0]),
    length = Math.hypot(b[0] - a[0], b[1] - a[1]);
  return (
    <group
      position={[(a[0] + b[0]) / 2, 0.27, (a[1] + b[1]) / 2]}
      rotation={[0, angle, 0]}
      scale={[length, 1, 1]}
    >
      {meshes.map((m, i) => (
        <mesh key={i} geometry={m.geometry}>
          <meshStandardMaterial color={m.color} roughness={0.84} />
        </mesh>
      ))}
    </group>
  );
});

const Roads = memo(function Roads({ data }: { data: CourseData }) {
  const geometry = useMemo(() => {
    const coords: number[] = [];
    for (const road of data.roads) {
      if (road.kind === "river") continue;
      for (let i = 1; i < road.points.length; i++) {
        const a = road.points[i - 1],
          b = road.points[i];
        const t = data.terrain;
        if (
          [a, b].some(
            (p) => p[0] < t.x0 || p[0] > t.x1 || p[1] < t.z0 || p[1] > t.z1,
          )
        )
          continue;
        coords.push(
          a[0],
          HEIGHT(data, a[0], a[1]) + 0.035,
          a[1],
          b[0],
          HEIGHT(data, b[0], b[1]) + 0.035,
          b[1],
        );
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(coords, 3));
    return g;
  }, [data]);
  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#b6b19b" transparent opacity={0.25} />
    </lineSegments>
  );
});

const Forest = memo(function Forest({ data }: { data: CourseData }) {
  const objects = useMemo(() => {
    const matrices: THREE.Matrix4[] = [];
    const dummy = new THREE.Object3D();
    for (const polygon of data.forest) {
      const minX = Math.min(...polygon.map((p) => p[0])),
        maxX = Math.max(...polygon.map((p) => p[0]));
      const minZ = Math.min(...polygon.map((p) => p[1])),
        maxZ = Math.max(...polygon.map((p) => p[1]));
      for (let x = minX; x < maxX && matrices.length < 4500; x += 0.65)
        for (let z = minZ; z < maxZ && matrices.length < 4500; z += 0.65) {
          const noise = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
          const r = noise - Math.floor(noise);
          const px = x + (r - 0.5) * 0.5,
            pz = z + Math.sin(noise) * 0.25;
          const t = data.terrain;
          if (px < t.x0 || px > t.x1 || pz < t.z0 || pz > t.z1) continue;
          if (
            !inside(px, pz, polygon) ||
            data.water.some((poly) => inside(px, pz, poly))
          )
            continue;
          const size = 0.09 + r * 0.07;
          dummy.position.set(px, HEIGHT(data, px, pz) + size * 0.65, pz);
          dummy.scale.set(size * (0.8 + r * 0.3), size * (1.1 + r * 0.5), size);
          dummy.rotation.set(r, noise, 0);
          dummy.updateMatrix();
          matrices.push(dummy.matrix.clone());
        }
    }
    return matrices;
  }, [data]);
  return (
    <instancedMesh
      castShadow
      receiveShadow
      args={[undefined, undefined, objects.length]}
      ref={(mesh) => {
        if (mesh) {
          objects.forEach((m, i) => mesh.setMatrixAt(i, m));
          mesh.instanceMatrix.needsUpdate = true;
        }
      }}
    >
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#3b4631" roughness={1} />
    </instancedMesh>
  );
});

function Route({ data, progress }: { data: CourseData; progress: number }) {
  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(
      data.points.map(
        (p) => new THREE.Vector3(p[0], pointHeight(data, p), p[1]),
      ),
      false,
      "centripetal",
    );
    return {
      base: new THREE.TubeGeometry(curve, 2200, 0.055, 5, false),
      active: new THREE.TubeGeometry(curve, 2200, 0.07, 6, false),
    };
  }, [data]);
  useLayoutEffect(() => {
    const count = Math.max(1, Math.floor(clamp(progress) * 2200));
    geometry.active.setDrawRange(0, count * 6 * 6);
  }, [geometry, progress]);
  const point = pointAt(data, progress);
  return (
    <group>
      <mesh geometry={geometry.base}>
        <meshBasicMaterial
          color="#e4ba7c"
          transparent
          opacity={0.72}
          toneMapped={false}
        />
      </mesh>
      <mesh geometry={geometry.active}>
        <meshBasicMaterial color={GOLD} toneMapped={false} />
      </mesh>
      <mesh position={[point[0], pointHeight(data, point) + 0.1, point[1]]}>
        <sphereGeometry args={[0.17, 16, 12]} />
        <meshBasicMaterial color="#fff0cd" toneMapped={false} />
      </mesh>
      {data.markers
        .filter((m) => m.id === "start" || m.id.startsWith("turn"))
        .map((m, i) => {
          const p = data.points[m.index],
            y = pointHeight(data, p);
          return (
            <group key={m.id} position={[p[0], y, p[1]]}>
              <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.32, 0.39, 40]} />
                <meshBasicMaterial
                  color={i === 0 ? "#eee8da" : "#f6cd8b"}
                  side={THREE.DoubleSide}
                />
              </mesh>
              <mesh position={[0, 0.55, 0]}>
                <cylinderGeometry args={[0.025, 0.025, 1.1, 6]} />
                <meshBasicMaterial color="#efe9d8" />
              </mesh>
              <mesh position={[0.15, 1, 0]}>
                <boxGeometry args={[0.32, 0.19, 0.02]} />
                <meshBasicMaterial color={i === 0 ? "#eee8da" : "#d8a969"} />
              </mesh>
            </group>
          );
        })}
    </group>
  );
}

function Camera({
  data,
  time,
  overview,
}: {
  data: CourseData;
  time: number;
  overview: boolean;
}) {
  const { camera, size } = useThree();
  useLayoutEffect(() => {
    const progress = routeProgress(time),
      p = pointAt(data, progress),
      next = pointAt(data, clamp(progress + 0.002));
    const rotation = 0.4 + progress * 0.75;
    const height = pointHeight(data, p);
    const follow = new THREE.Vector3(
      p[0] - Math.cos(rotation) * 18,
      height + 10,
      p[1] + Math.sin(rotation) * 12 + 23,
    );
    const target = new THREE.Vector3(next[0], height + 0.1, next[1]);
    const portrait = size.width / size.height < 0.8;
    const orbit = time * 0.16;
    const far = new THREE.Vector3(
      -72 + orbit * 8,
      portrait ? 150 : 67,
      portrait ? 180 : 125,
    );
    const center = new THREE.Vector3(0, 2, 1);
    const intro = 1 - smooth((time - 0.025) / 0.105),
      outro = smooth((time - 0.89) / 0.095);
    const blend = overview ? 1 : Math.max(intro, outro);
    camera.position.copy(follow.lerp(far, blend));
    camera.lookAt(target.lerp(center, blend));
    camera.updateProjectionMatrix();
  }, [camera, data, time, overview, size.width, size.height]);
  return null;
}

export function CourseScene({
  data,
  time,
  overview = false,
}: {
  data: CourseData;
  time: number;
  overview?: boolean;
}) {
  return (
    <>
      <color attach="background" args={["#c2b8a3"]} />
      <Sky distance={1000} sunPosition={[-80, 9, -45]} turbidity={7} rayleigh={1.8} mieCoefficient={0.009} mieDirectionalG={0.86} />
      <fog attach="fog" args={["#c2b8a3", 65, 235]} />
      <hemisphereLight args={["#b7c6cf", "#454333", 0.65]} />
      <directionalLight castShadow position={[-65, 14, -45]} color="#ffd099" intensity={3.2}
        shadow-mapSize={[2048, 2048]} shadow-camera-left={-100} shadow-camera-right={100}
        shadow-camera-top={100} shadow-camera-bottom={-100} shadow-camera-far={260}
        shadow-bias={-0.0002} shadow-normalBias={0.035} />
      <directionalLight position={[25, 35, 70]} color="#adc7dc" intensity={0.2} />
      <Camera data={data} time={time} overview={overview} />
      <Landscape data={data} />
      <Water data={data} />
      <Roads data={data} />
      <Forest data={data} />
      <Bridge data={data} />
      <Route data={data} progress={routeProgress(time)} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.18, 0]}>
        <planeGeometry args={[1200, 1200]} />
        <meshStandardMaterial color="#77745d" roughness={1} />
      </mesh>
    </>
  );
}
