import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface NetworkGlobeProps {
  className?: string;
}

const Globe = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create network nodes around the sphere
  const nodes = useMemo(() => {
    const nodeCount = 30;
    const positions = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      
      const x = Math.cos(theta) * Math.sin(phi) * 2.2;
      const y = Math.cos(phi) * 2.2;
      const z = Math.sin(theta) * Math.sin(phi) * 2.2;
      
      positions.push(new THREE.Vector3(x, y, z));
    }
    return positions;
  }, []);

  // Create connections between nearby nodes
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < 2.5 && Math.random() > 0.7) {
          lines.push([nodes[i], nodes[j]]);
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Globe */}
      <Sphere args={[2, 32, 32]}>
        <meshPhongMaterial 
          color="#8B5CF6" 
          transparent 
          opacity={0.1} 
          wireframe 
        />
      </Sphere>
      
      {/* Network Nodes */}
      {nodes.map((position, index) => (
        <Sphere key={index} args={[0.03, 8, 8]} position={position}>
          <meshBasicMaterial color="#E879F9" />
        </Sphere>
      ))}
      
      {/* Network Connections */}
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={connection}
          color="#8B5CF6"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
      
      {/* Ambient Light */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} color="#8B5CF6" intensity={1} />
    </group>
  );
};

export const NetworkGlobe: React.FC<NetworkGlobeProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Globe />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};