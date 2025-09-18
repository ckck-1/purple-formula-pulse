import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const Chart = () => {
  const groupRef = useRef<THREE.Group>(null);
  const barsRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
    
    if (barsRef.current) {
      barsRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
          child.material.emissiveIntensity = 0.3 + Math.sin(clock.getElapsedTime() * 2 + i) * 0.2;
        }
      });
    }
  });

  const chartData = [0.3, 0.7, 1.2, 0.9, 1.5, 0.8, 1.1];
  const colors = ['#8B5CF6', '#A855F7', '#E879F9', '#7C3AED', '#C084FC', '#DDD6FE', '#F3E8FF'];

  return (
    <group ref={groupRef}>
      {/* Base platform */}
      <Box args={[3, 0.1, 2]} position={[0, -0.8, 0]}>
        <meshPhongMaterial 
          color="#1a1a2e" 
          transparent 
          opacity={0.8}
          emissive="#8B5CF6"
          emissiveIntensity={0.1}
        />
      </Box>

      {/* Chart bars */}
      <group ref={barsRef}>
        {chartData.map((height, i) => (
          <Box 
            key={i} 
            args={[0.3, height, 0.3]} 
            position={[(i - 3) * 0.4, height / 2 - 0.8, 0]}
          >
            <meshPhongMaterial 
              color={colors[i]} 
              emissive={colors[i]}
              emissiveIntensity={0.3}
              transparent
              opacity={0.9}
            />
          </Box>
        ))}
      </group>

      {/* Holographic grid lines */}
      {Array.from({ length: 5 }, (_, i) => (
        <Box 
          key={`grid-${i}`}
          args={[3, 0.01, 0.01]} 
          position={[0, (i * 0.3) - 0.6, 0]}
        >
          <meshPhongMaterial 
            color="#E879F9" 
            emissive="#E879F9"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </Box>
      ))}

      {/* Floating data points */}
      {chartData.map((_, i) => (
        <Sphere key={`point-${i}`} args={[0.05]} position={[(i - 3) * 0.4, 1.2, 0.5]}>
          <meshPhongMaterial 
            color="#E879F9" 
            emissive="#E879F9"
            emissiveIntensity={0.8}
          />
        </Sphere>
      ))}

      {/* Connecting lines between data points */}
      {chartData.map((_, i) => {
        if (i < chartData.length - 1) {
          const start = new THREE.Vector3((i - 3) * 0.4, 1.2, 0.5);
          const end = new THREE.Vector3(((i + 1) - 3) * 0.4, 1.2, 0.5);
          return (
            <Line
              key={`line-${i}`}
              points={[start, end]}
              color="#8B5CF6"
              lineWidth={2}
            />
          );
        }
        return null;
      })}
    </group>
  );
};

interface HolographicChartProps {
  className?: string;
}

export const HolographicChart: React.FC<HolographicChartProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [2, 2, 4], fov: 50 }}>
        <Chart />
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} color="#8B5CF6" intensity={1.2} />
        <pointLight position={[-3, -3, -3]} color="#E879F9" intensity={0.8} />
        <spotLight 
          position={[0, 4, 2]} 
          angle={0.4} 
          penumbra={0.5} 
          color="#A855F7" 
          intensity={1}
        />
      </Canvas>
    </div>
  );
};