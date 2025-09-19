'use client';

import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const FloatingCode = ({ position }: any) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[0.3, 0.3, 0.05]} />
        <meshPhongMaterial color="#ffffff" opacity={0.8} transparent />
      </mesh>
      <Html center>
        <div
          style={{
            color: '#ff6b35',
            fontSize: '14px',
            fontFamily: 'monospace',
            backgroundColor: 'white',
            padding: '4px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {'</>'}
        </div>
      </Html>
    </group>
  );
};

export default FloatingCode;
