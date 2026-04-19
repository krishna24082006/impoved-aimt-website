import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Icosahedron, TorusKnot } from "@react-three/drei";
import { useRef } from "react";
import { TextureLoader, type Mesh, SRGBColorSpace } from "three";
import logoUrl from "@/assets/aimt-logo.png";

function CrestOrb() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.22;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.8}>
      <Icosahedron ref={ref} args={[1.35, 1]} position={[1.4, -0.3, -2.2]}>
        <MeshDistortMaterial
          color="#a8202b"
          emissive="#3a0a10"
          roughness={0.18}
          metalness={0.7}
          distort={0.28}
          speed={1.4}
        />
      </Icosahedron>
    </Float>
  );
}

function LogoMedallion() {
  const ref = useRef<Mesh>(null);
  const texture = useLoader(TextureLoader, logoUrl);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 8;

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.06;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.6}>
      <group ref={ref} position={[0, 0.05, 1.8]} renderOrder={10}>
        {/* Soft glow halo behind the medallion */}
        <mesh position={[0, 0, -0.05]}>
          <circleGeometry args={[1.45, 64]} />
          <meshBasicMaterial color="#fff4d6" transparent opacity={0.18} />
        </mesh>
        {/* Gold rim ring */}
        <mesh position={[0, 0, -0.01]}>
          <ringGeometry args={[1.05, 1.18, 64]} />
          <meshStandardMaterial
            color="#d9a441"
            metalness={1}
            roughness={0.2}
            emissive="#5a3d10"
          />
        </mesh>
        {/* Logo disc */}
        <mesh>
          <circleGeometry args={[1.1, 64]} />
          <meshStandardMaterial
            map={texture}
            transparent
            metalness={0.15}
            roughness={0.55}
            emissive="#1a0a14"
            emissiveIntensity={0.15}
            depthWrite={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

function GoldRing() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.35;
    ref.current.rotation.z = state.clock.elapsedTime * 0.18;
  });
  return (
    <Float speed={0.8} floatIntensity={0.5}>
      <TorusKnot ref={ref} args={[2.8, 0.04, 200, 16]} position={[0, 0, -1.4]}>
        <meshStandardMaterial color="#d9a441" metalness={1} roughness={0.2} emissive="#5a3d10" />
      </TorusKnot>
    </Float>
  );
}

function BlueOrbit() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = -state.clock.elapsedTime * 0.28;
    ref.current.rotation.x = state.clock.elapsedTime * 0.14;
  });
  return (
    <Float speed={1} floatIntensity={0.6}>
      <TorusKnot ref={ref} args={[2.25, 0.022, 160, 16]} position={[0, 0, -1.6]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#2c4a8a" metalness={0.9} roughness={0.25} emissive="#0e1a3a" />
      </TorusKnot>
    </Float>
  );
}

export default function HeroSceneInner() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff3d6" />
      <directionalLight position={[-5, -3, -2]} intensity={0.6} color="#7a90d6" />
      <pointLight position={[0, 0, 3]} intensity={1.6} color="#d9a441" />
      <CrestOrb />
      <LogoMedallion />
      <GoldRing />
      <BlueOrbit />
      <Environment preset="sunset" />
    </Canvas>
  );
}
