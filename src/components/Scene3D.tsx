import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingIcosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2} floatingRange={[-0.3, 0.3]}>
      <mesh ref={meshRef} position={[2.5, -1, -2]} scale={0.8}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshWobbleMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.6}
          factor={0.4}
          speed={1.5}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.8} floatIntensity={1}>
      <mesh ref={meshRef} position={[-2.5, 1.5, -1]} scale={0.6}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={0.15}
          roughness={0.4}
          metalness={0.9}
          distort={0.2}
          speed={3}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const Particles = () => {
  const points = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#22c55e" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#22c55e" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#06b6d4" />

        <FloatingIcosahedron />
        <FloatingTorus />
        <FloatingOctahedron />
        <Particles />
      </Canvas>
    </div>
  );
};

export default Scene3D;
