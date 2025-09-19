'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const GitCommit = ({ position, active, message }: any) => {
  const meshRef = useRef<any>(null);
  const color = new THREE.Color();
  const activeColor = new THREE.Color('#ff6b35');
  const inactiveColor = new THREE.Color('#cccccc');

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime;

    // scale + bounce
    const scale = 1 + (active ? Math.sin(t * 6) * 0.2 : 0);
    meshRef.current.scale.setScalar(scale);

    // y position bounce
    meshRef.current.position.y = position[1] + (active ? Math.sin(t * 3) * 0.1 : 0);

    // color lerp
    (meshRef.current.material as THREE.MeshPhongMaterial).color.lerp(
      active ? activeColor : inactiveColor,
      0.1,
    );
  });

  return (
    <group>
      <mesh ref={meshRef} position={position}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
        <meshPhongMaterial color={inactiveColor} />
      </mesh>

      {/* 커밋 메시지 표시 */}
      {active && message && (
        <Text
          position={[position[0], position[1] + 0.5, position[2]]}
          fontSize={0.2}
          color="#ff6b35"
          anchorX="center"
          anchorY="bottom"
        >
          {message}
        </Text>
      )}
    </group>
  );
};

export default GitCommit;
