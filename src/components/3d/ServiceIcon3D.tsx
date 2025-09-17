import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Cylinder, Torus, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface ServiceIcon3DProps {
  type: 'gear' | 'building' | 'globe' | 'portfolio' | 'network' | 'bank';
  className?: string;
}

const GearIcon = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group>
      <Cylinder ref={meshRef} args={[1, 1, 0.2, 8]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#8B5CF6" />
      </Cylinder>
      <Sphere args={[0.3]} position={[0, 0, 0.15]}>
        <meshPhongMaterial color="#E879F9" />
      </Sphere>
    </group>
  );
};

const BuildingIcon = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Box args={[0.8, 2, 0.8]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#8B5CF6" />
      </Box>
      <Box args={[0.6, 1.5, 0.6]} position={[0, 0.7, 0]}>
        <meshPhongMaterial color="#A855F7" />
      </Box>
      <Box args={[0.4, 1, 0.4]} position={[0, 1.2, 0]}>
        <meshPhongMaterial color="#E879F9" />
      </Box>
    </group>
  );
};

const GlobeIcon = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 16, 16]}>
        <meshPhongMaterial color="#8B5CF6" wireframe />
      </Sphere>
      <Torus args={[1.2, 0.05, 8, 16]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhongMaterial color="#E879F9" />
      </Torus>
    </group>
  );
};

const PortfolioIcon = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Box args={[1.5, 0.2, 1]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#8B5CF6" />
      </Box>
      <Box args={[1.2, 0.15, 0.8]} position={[0, 0.2, 0]}>
        <meshPhongMaterial color="#A855F7" />
      </Box>
      <Box args={[0.9, 0.1, 0.6]} position={[0, 0.35, 0]}>
        <meshPhongMaterial color="#E879F9" />
      </Box>
    </group>
  );
};

const NetworkIcon = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central node */}
      <Sphere args={[0.2]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#E879F9" />
      </Sphere>
      {/* Surrounding nodes */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 0.8;
        const z = Math.sin(angle) * 0.8;
        return (
          <Sphere key={i} args={[0.1]} position={[x, 0, z]}>
            <meshPhongMaterial color="#8B5CF6" />
          </Sphere>
        );
      })}
    </group>
  );
};

const BankIcon = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <Box args={[2, 0.2, 1]} position={[0, -0.8, 0]}>
        <meshPhongMaterial color="#8B5CF6" />
      </Box>
      {/* Columns */}
      {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
        <Cylinder key={i} args={[0.08, 0.08, 1.2]} position={[x, 0, 0]}>
          <meshPhongMaterial color="#A855F7" />
        </Cylinder>
      ))}
      {/* Top */}
      <Box args={[2, 0.3, 1]} position={[0, 0.8, 0]}>
        <meshPhongMaterial color="#E879F9" />
      </Box>
    </group>
  );
};

const iconComponents = {
  gear: GearIcon,
  building: BuildingIcon,
  globe: GlobeIcon,
  portfolio: PortfolioIcon,
  network: NetworkIcon,
  bank: BankIcon,
};

export const ServiceIcon3D: React.FC<ServiceIcon3DProps> = ({ type, className }) => {
  const IconComponent = iconComponents[type];

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <IconComponent />
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 2, 2]} color="#8B5CF6" intensity={0.8} />
        <pointLight position={[-2, -2, -2]} color="#E879F9" intensity={0.4} />
      </Canvas>
    </div>
  );
};