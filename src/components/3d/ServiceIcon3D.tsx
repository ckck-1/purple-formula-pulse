import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Cylinder, Torus, Sphere, Octahedron, Cone } from '@react-three/drei';
import * as THREE from 'three';

interface ServiceIcon3DProps {
  type: 'phone' | 'laptop' | 'globe' | 'briefcase' | 'network' | 'bank' | 'gear' | 'building';
  className?: string;
}

const PhoneIcon = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.4;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.8) * 0.1;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
    if (screenRef.current && screenRef.current.material instanceof THREE.MeshPhongMaterial) {
      screenRef.current.material.emissiveIntensity = 0.5 + Math.sin(clock.getElapsedTime() * 3) * 0.3;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.8;
    }
  });

  return (
    <group>
      {/* Phone body with premium materials */}
      <Box ref={meshRef} args={[0.8, 1.4, 0.15]} position={[0, 0, 0]}>
        <meshPhongMaterial color="#0a0a1a" />
      </Box>
      
      {/* Holographic screen */}
      <Box ref={screenRef} args={[0.7, 1.2, 0.05]} position={[0, 0, 0.08]}>
        <meshPhongMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6" 
          emissiveIntensity={0.5}
          transparent
          opacity={0.9}
        />
      </Box>

      {/* Screen interface elements */}
      <Box args={[0.6, 0.08, 0.02]} position={[0, 0.4, 0.12]}>
        <meshPhongMaterial color="#E879F9" emissive="#E879F9" emissiveIntensity={0.6} />
      </Box>
      <Box args={[0.6, 0.06, 0.02]} position={[0, 0.2, 0.12]}>
        <meshPhongMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.4} />
      </Box>
      <Box args={[0.6, 0.06, 0.02]} position={[0, 0, 0.12]}>
        <meshPhongMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={0.4} />
      </Box>

      {/* Premium home button */}
      <Sphere args={[0.08]} position={[0, -0.5, 0.12]}>
        <meshPhongMaterial color="#E879F9" emissive="#E879F9" emissiveIntensity={0.8} />
      </Sphere>

      {/* Floating data particles */}
      <group ref={particlesRef}>
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 1.5;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <Sphere key={i} args={[0.02]} position={[x, y, 0.5]}>
              <meshPhongMaterial 
                color="#E879F9" 
                emissive="#E879F9" 
                emissiveIntensity={0.8}
              />
            </Sphere>
          );
        })}
      </group>
    </group>
  );
};

const LaptopIcon = () => {
  const screenRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.1;
    }
    if (screenRef.current && screenRef.current.material instanceof THREE.MeshPhongMaterial) {
      screenRef.current.material.emissiveIntensity = 0.6 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Enhanced base */}
      <Box args={[1.6, 0.15, 1]} position={[0, -0.4, 0]}>
        <meshPhongMaterial color="#1a1a2e" emissive="#8B5CF6" emissiveIntensity={0.1} />
      </Box>

      {/* Screen bezel */}
      <Box args={[1.5, 1, 0.08]} position={[0, 0.1, -0.4]} rotation={[-0.1, 0, 0]}>
        <meshPhongMaterial color="#0f0f23" />
      </Box>

      {/* Holographic display */}
      <Box ref={screenRef} args={[1.3, 0.8, 0.02]} position={[0, 0.1, -0.37]} rotation={[-0.1, 0, 0]}>
        <meshPhongMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6" 
          emissiveIntensity={0.6}
          transparent
          opacity={0.9}
        />
      </Box>

      {/* Screen content simulation */}
      <Box args={[1.1, 0.04, 0.01]} position={[0, 0.25, -0.35]} rotation={[-0.1, 0, 0]}>
        <meshPhongMaterial color="#E879F9" emissive="#E879F9" emissiveIntensity={0.8} />
      </Box>
      <Box args={[0.8, 0.03, 0.01]} position={[0, 0.15, -0.35]} rotation={[-0.1, 0, 0]}>
        <meshPhongMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.6} />
      </Box>

      {/* Floating UI elements */}
      <group ref={particlesRef}>
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x = Math.cos(angle) * 1.8;
          const z = Math.sin(angle) * 1.8;
          return (
            <Octahedron key={i} args={[0.03]} position={[x, 0.5, z]}>
              <meshPhongMaterial 
                color="#E879F9" 
                emissive="#E879F9" 
                emissiveIntensity={0.8}
              />
            </Octahedron>
          );
        })}
      </group>
    </group>
  );
};

const BriefcaseIcon = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coinsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 0.1;
    }
    if (coinsRef.current) {
      coinsRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.y = clock.getElapsedTime() * (1 + i * 0.3);
          if (child.material instanceof THREE.MeshPhongMaterial) {
            child.material.emissiveIntensity = 0.5 + Math.sin(clock.getElapsedTime() * 3 + i) * 0.3;
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Premium briefcase body */}
      <Box args={[1.4, 0.9, 0.4]} position={[0, 0, 0]}>
        <meshPhongMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6" 
          emissiveIntensity={0.3}
        />
      </Box>
      
      {/* Handle with glow */}
      <Torus args={[0.25, 0.06, 8, 16]} position={[0, 0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhongMaterial 
          color="#E879F9" 
          emissive="#E879F9" 
          emissiveIntensity={0.6}
        />
      </Torus>
      
      {/* Digital lock */}
      <Box args={[0.2, 0.15, 0.08]} position={[0, -0.1, 0.25]}>
        <meshPhongMaterial 
          color="#A855F7" 
          emissive="#A855F7" 
          emissiveIntensity={0.8}
        />
      </Box>

      {/* Premium corner accents */}
      {[[-0.6, -0.4, 0.2], [0.6, -0.4, 0.2], [-0.6, 0.4, 0.2], [0.6, 0.4, 0.2]].map((pos, i) => (
        <Sphere key={i} args={[0.05]} position={pos as [number, number, number]}>
          <meshPhongMaterial 
            color="#E879F9" 
            emissive="#E879F9" 
            emissiveIntensity={0.8}
          />
        </Sphere>
      ))}

      {/* Floating money symbols */}
      <group ref={coinsRef}>
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 1.2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(i) * 0.3;
          
          return (
            <Cylinder key={i} args={[0.08, 0.08, 0.02]} position={[x, y + 0.5, z]}>
              <meshPhongMaterial 
                color="#F59E0B" 
                emissive="#F59E0B" 
                emissiveIntensity={0.6}
              />
            </Cylinder>
          );
        })}
      </group>
    </group>
  );
};

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
  const beamsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
    if (beamsRef.current) {
      beamsRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
          child.material.emissiveIntensity = 0.4 + Math.sin(clock.getElapsedTime() * 2 + i) * 0.3;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Enhanced base with pattern */}
      <Box args={[2.2, 0.25, 1.2]} position={[0, -0.8, 0]}>
        <meshPhongMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6" 
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Glowing columns */}
      <group ref={beamsRef}>
        {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
          <Cylinder key={i} args={[0.08, 0.08, 1.2]} position={[x, 0, 0]}>
            <meshPhongMaterial 
              color="#A855F7" 
              emissive="#A855F7" 
              emissiveIntensity={0.5}
            />
          </Cylinder>
        ))}
      </group>

      {/* Premium top with details */}
      <Box args={[2.2, 0.35, 1.2]} position={[0, 0.8, 0]}>
        <meshPhongMaterial 
          color="#E879F9" 
          emissive="#E879F9" 
          emissiveIntensity={0.4}
        />
      </Box>

      {/* Bank vault door */}
      <Cylinder args={[0.3, 0.3, 0.1]} position={[0, 0.1, 0.65]}>
        <meshPhongMaterial 
          color="#1a1a2e" 
          emissive="#8B5CF6" 
          emissiveIntensity={0.2}
        />
      </Cylinder>

      {/* Floating security elements */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 1.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <Octahedron key={i} args={[0.04]} position={[x, 0.5, z]}>
            <meshPhongMaterial 
              color="#10B981" 
              emissive="#10B981" 
              emissiveIntensity={0.8}
            />
          </Octahedron>
        );
      })}

      {/* Digital security grid */}
      <Box args={[0.15, 0.15, 0.02]} position={[0, 0.1, 0.7]}>
        <meshPhongMaterial 
          color="#10B981" 
          emissive="#10B981" 
          emissiveIntensity={1}
        />
      </Box>
    </group>
  );
};

const iconComponents = {
  phone: PhoneIcon,
  laptop: LaptopIcon,
  globe: GlobeIcon,
  briefcase: BriefcaseIcon,
  network: NetworkIcon,
  bank: BankIcon,
  gear: GearIcon,
  building: BuildingIcon,
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