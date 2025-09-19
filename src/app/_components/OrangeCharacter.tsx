'use client';

import React, { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const OrangeCharacter = ({ position, onClick, isActive, scale = 1 }: any) => {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 3) * 0.1;

      if (isActive) {
        meshRef.current.scale.setScalar(scale * (1 + Math.sin(state.clock.elapsedTime * 4) * 0.1));
      } else {
        meshRef.current.scale.setScalar(scale * (hovered ? 1.1 : 1));
      }
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Orange Body - 더 밝은 주황 */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhongMaterial color="#FFB347" /> {/* 밝은 파스텔 오렌지 */}
      </mesh>

      {/* Orange segments - 더 연한 색으로 */}
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[0, 0, 0]} rotation={[0, ((Math.PI * 2) / 6) * i, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.6, 8]} />
          <meshPhongMaterial color="#FF914D" />
        </mesh>
      ))}

      {/* Eyes - 조금 크게 */}
      <mesh position={[-0.28, 0.35, 0.6]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshPhongMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.28, 0.35, 0.6]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshPhongMaterial color="#ffffff" />
      </mesh>

      {/* Pupils - 동그랗게, 살짝 위에 */}
      <mesh position={[-0.28, 0.37, 0.68]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      <mesh position={[0.28, 0.37, 0.68]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshPhongMaterial color="#000000" />
      </mesh>

      {/* Smile - 조금 위로 올리고 밝은색 */}
      <mesh position={[0, 0.05, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.22, 0.035, 8, 16, Math.PI]} />
        <meshPhongMaterial color="#444444" />
      </mesh>

      {/* 볼터치 - 귀여움 포인트 */}
      <mesh position={[-0.4, 0.15, 0.65]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhongMaterial color="#FFB6C1" /> {/* 핑크색 볼터치 */}
      </mesh>
      <mesh position={[0.4, 0.15, 0.65]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhongMaterial color="#FFB6C1" />
      </mesh>

      {/* Leaf on top - 더 연두색 */}
      <mesh position={[0, 0.95, 0]} rotation={[0, 0, Math.PI / 6]}>
        <coneGeometry args={[0.18, 0.35, 8]} />
        <meshPhongMaterial color="#7CFC00" /> {/* 연두색 */}
      </mesh>
    </group>
  );
};

export default OrangeCharacter;
