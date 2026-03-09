import { useRef, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import CanvasLoader from "../layout/Loader";

const BLADE_COUNT = 2500;
const FIELD_SIZE = 40;

// Phase is derived from each blade's instance world-origin inside the shader —
// no InstancedBufferAttribute needed, keeping the code portable.
const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // World position of this instance's origin
    vec4 wOrigin = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
    float phase = wOrigin.x * 0.317 + wOrigin.z * 0.516;

    // Quadratic bend — roots stay fixed, tips sway freely
    float bend = uv.y * uv.y;

    pos.z += sin(uTime * 1.25 + phase) * 0.38 * bend;
    pos.x += cos(uTime * 0.85 + phase * 1.3) * 0.14 * bend;

    gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vec3 root = vec3(0.01, 0.08, 0.02);
    vec3 mid  = vec3(0.03, 0.20, 0.05);
    vec3 tip  = vec3(0.06, 0.29, 0.08);

    vec3 col = mix(root, mid, sqrt(vUv.y));
    col      = mix(col,  tip, pow(vUv.y, 2.0));

    // Feather blade edges
    float edge = clamp((0.5 - abs(vUv.x - 0.5)) * 3.0, 0.0, 1.0);
    if (edge < 0.05) discard;

    gl_FragColor = vec4(col, edge);
  }
`;

function buildBladeGeometry() {
  const SEGS = 4;
  const W = 0.065;
  const H = 0.82;

  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let s = 0; s <= SEGS; s++) {
    const t = s / SEGS;
    const w = W * (1.0 - t * 0.87);
    const y = t * H;
    positions.push(-w * 0.5, y, 0.0);
    positions.push(w * 0.5, y, 0.0);
    uvs.push(0.0, t, 1.0, t);
    if (s < SEGS) {
      const b = s * 2;
      indices.push(b, b + 1, b + 2, b + 1, b + 3, b + 2);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function GrassField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const geometry = useMemo(buildBladeGeometry, []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: { uTime: { value: 0.0 } },
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
        alphaTest: 0.05,
      }),
    []
  );

  // Scatter blade instances across the field once on mount
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < BLADE_COUNT; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * FIELD_SIZE,
        0.0,
        (Math.random() - 0.5) * FIELD_SIZE
      );
      dummy.rotation.y = Math.random() * Math.PI * 2;
      dummy.scale.setScalar(0.7 + Math.random() * 0.7);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, []);

  // Update wind uniform every frame (GPU-side — zero JS per-blade work)
  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, BLADE_COUNT]}
      frustumCulled={false}
    />
  );
}

const GrassCanvas = () => (
  <Canvas
    camera={{ position: [0, 3, 12], fov: 58 }}
    gl={{ antialias: false, powerPreference: "high-performance" }}
    dpr={[1, 1.5]}
    style={{ width: "100%", height: "100%" }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <color attach="background" args={["#04090a"]} />
      <fog attach="fog" args={["#071007", 16, 38]} />

      <ambientLight intensity={0.1} />
      <directionalLight position={[-5, 8, 5]} intensity={0.2} color="#3d6e40" />

      <GrassField />

      {/* Dark ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <planeGeometry args={[FIELD_SIZE, FIELD_SIZE]} />
        <meshStandardMaterial color="#020802" />
      </mesh>
    </Suspense>
  </Canvas>
);

export default GrassCanvas;
