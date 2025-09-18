import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const Tower = () => {
  const towerRef = useRef<THREE.Group>(null);
  const crystalsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (towerRef.current) {
      towerRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      towerRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.15;
    }
    
    if (crystalsRef.current) {
      crystalsRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.y = clock.getElapsedTime() * (0.5 + i * 0.2);
          if (child.material instanceof THREE.MeshPhongMaterial) {
            child.material.emissiveIntensity = 0.4 + Math.sin(clock.getElapsedTime() * 3 + i) * 0.3;
          }
        }
      });
    }
  });

  return (
    <group ref={towerRef}>
      {/* Base foundation */}
      <Cylinder args={[1.5, 1.8, 0.3, 8]} position={[0, -1.2, 0]}>
        <meshPhongMaterial 
          color="#1a1a2e" 
          emissive="#8B5CF6"
          emissiveIntensity={0.2}
        />
      </Cylinder>

      {/* Main tower segments */}
      <Box args={[1.2, 1.5, 1.2]} position={[0, -0.3, 0]}>
        <meshPhongMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6"
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
        />
      </Box>

      <Box args={[1, 1.2, 1]} position={[0, 0.6, 0]}>
        <meshPhongMaterial 
          color="#A855F7" 
          emissive="#A855F7"
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
        />
      </Box>

      <Box args={[0.8, 1, 0.8]} position={[0, 1.3, 0]}>
        <meshPhongMaterial 
          color="#E879F9" 
          emissive="#E879F9"
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </Box>

      {/* Floating crystals around tower */}
      <group ref={crystalsRef}>
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(i) * 0.5;
          
          return (
            <Octahedron key={i} args={[0.15]} position={[x, y, z]}>
              <meshPhongMaterial 
                color="#E879F9" 
                emissive="#E879F9"
                emissiveIntensity={0.6}
                transparent
                opacity={0.8}
              />
            </Octahedron>
          );
        })}
      </group>

      {/* Energy beams */}
      {Array.from({ length: 4 }, (_, i) => {
        const angle = (i / 4) * Math.PI * 2;
        const x = Math.cos(angle) * 0.8;
        const z = Math.sin(angle) * 0.8;
        
        return (
          <Cylinder key={`beam-${i}`} args={[0.02, 0.02, 2]} position={[x, 0.5, z]}>
            <meshPhongMaterial 
              color="#8B5CF6" 
              emissive="#8B5CF6"
              emissiveIntensity={0.8}
              transparent
              opacity={0.6}
            />
          </Cylinder>
        );
      })}

      {/* Top crystal */}
      <Octahedron args={[0.3]} position={[0, 2.2, 0]}>
        <meshPhongMaterial 
          color="#E879F9" 
          emissive="#E879F9"
          emissiveIntensity={0.8}
          transparent
          opacity={0.9}
        />
      </Octahedron>

      {/* Glowing orb at the top */}
      <Sphere args={[0.1]} position={[0, 2.8, 0]}>
        <meshPhongMaterial 
          color="#FFFFFF" 
          emissive="#E879F9"
          emissiveIntensity={1}
        />
      </Sphere>
    </group>
  );
};

interface CrystalTowerProps {
  className?: string;
}

export const CrystalTower: React.FC<CrystalTowerProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <Tower />
        <ambientLight intensity={0.3} />
        <pointLight position={[4, 4, 4]} color="#8B5CF6" intensity={1.5} />
        <pointLight position={[-4, -4, -4]} color="#E879F9" intensity={0.8} />
        <spotLight 
          position={[0, 6, 0]} 
          angle={0.3} 
          penumbra={0.5} 
          color="#A855F7" 
          intensity={1.2}
        />
      </Canvas>
    </div>
  );
};