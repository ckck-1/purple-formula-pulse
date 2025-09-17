import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Text } from '@react-three/drei';
import * as THREE from 'three';

const Phone = () => {
  const phoneRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      phoneRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      phoneRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
    if (screenRef.current && screenRef.current.material instanceof THREE.MeshPhongMaterial) {
      screenRef.current.material.emissiveIntensity = 0.5 + Math.sin(clock.getElapsedTime() * 3) * 0.2;
    }
  });

  return (
    <group ref={phoneRef}>
      {/* Phone Body */}
      <Box args={[1.2, 2.2, 0.15]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#1a1a2e" />
      </Box>
      
      {/* Screen */}
      <Box ref={screenRef} args={[1, 1.8, 0.05]} position={[0, 0, 0.1]}>
        <meshPhongMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6" 
          emissiveIntensity={0.5}
        />
      </Box>

      {/* Screen Elements */}
      <Box args={[0.8, 0.1, 0.02]} position={[0, 0.7, 0.12]}>
        <meshPhongMaterial color="#E879F9" emissive="#E879F9" emissiveIntensity={0.3} />
      </Box>
      <Box args={[0.8, 0.08, 0.02]} position={[0, 0.5, 0.12]}>
        <meshPhongMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.2} />
      </Box>
      <Box args={[0.8, 0.08, 0.02]} position={[0, 0.3, 0.12]}>
        <meshPhongMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={0.2} />
      </Box>

      {/* Home Button */}
      <Sphere args={[0.08]} position={[0, -0.8, 0.12]}>
        <meshPhongMaterial color="#E879F9" />
      </Sphere>

      {/* Floating particles around phone */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 1.8;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <Sphere key={i} args={[0.02]} position={[x, y, 0.5]}>
            <meshPhongMaterial color="#E879F9" />
          </Sphere>
        );
      })}
    </group>
  );
};

interface FloatingPhoneProps {
  className?: string;
}

export const FloatingPhone: React.FC<FloatingPhoneProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Phone />
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} color="#8B5CF6" intensity={1} />
        <pointLight position={[-3, -3, -3]} color="#E879F9" intensity={0.5} />
        <spotLight 
          position={[0, 0, 8]} 
          angle={0.3} 
          penumbra={0.5} 
          color="#A855F7" 
          intensity={0.8}
        />
      </Canvas>
    </div>
  );
};