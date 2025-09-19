'use client';

import { OrbitControls, Text } from '@react-three/drei';
import FloatingCode from './FloatingCode';
import OrangeCharacter from './OrangeCharacter';
import GitCommit from './GitCommit';

// 3D Scene Component
const Scene = ({ currentSection, onCharacterClick }: any) => {
  const characters = [
    { position: [-4, 0, 0], section: 0, label: 'Git Integration' },
    { position: [0, 2, 0], section: 1, label: 'Workflow Tracking' },
    { position: [4, 0, 0], section: 2, label: 'Analytics' },
    { position: [0, -2, 0], section: 3, label: 'ROI Dashboard' },
  ];

  return (
    <>
      <ambientLight intensity={0.9} />

      {/* 위쪽에서 내려오는 주광 (햇빛 같은 느낌) */}
      <directionalLight position={[0, 10, 5]} intensity={1.2} castShadow={false} color="#ffffff" />

      {/* 따뜻한 보조광 */}
      <pointLight position={[-5, 2, 5]} intensity={0.7} color="#ffd699" />

      {/* 차가운 보조광 */}
      <pointLight position={[5, -2, 5]} intensity={0.5} color="#aaddff" />

      {/* 전체를 부드럽게 감싸는 하늘/땅 조명 */}
      <hemisphereLight args={['#ffffff', '#ffebcc', 0.6]} />

      {/* Orange Characters for each section */}
      {characters.map((char, index) => (
        <OrangeCharacter
          key={index}
          position={char.position}
          onClick={() => onCharacterClick(char.section)}
          isActive={currentSection === char.section}
          scale={currentSection === char.section ? 1.2 : 0.8}
        />
      ))}

      {/* Floating Code Elements */}
      {[...Array(8)].map((_, i) => (
        <FloatingCode
          key={i}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
          ]}
        />
      ))}

      {/* Git Commits Visualization */}
      {currentSection === 0 &&
        [
          { msg: 'feat: login', active: true },
          { msg: 'fix: signup bug', active: true },
          { msg: 'chore: update deps', active: true },
          { msg: 'feat: dashboard', active: false },
          { msg: 'refactor: code cleanup', active: false },
        ].map((commit, i) => (
          <GitCommit
            key={i}
            position={[-6 + i * 0.5, -1, 0]}
            active={commit.active}
            message={commit.msg}
          />
        ))}
      {/* Workflow Stages */}
      {currentSection === 1 && (
        <group>
          <Text position={[-2, 3, 0]} fontSize={0.3} color="#ff6b35">
            기획
          </Text>
          <Text position={[-1, 3, 0]} fontSize={0.3} color="#ff6b35">
            설계
          </Text>
          <Text position={[0, 3, 0]} fontSize={0.3} color="#ff6b35">
            개발
          </Text>
          <Text position={[1, 3, 0]} fontSize={0.3} color="#ff6b35">
            테스트
          </Text>
          <Text position={[2, 3, 0]} fontSize={0.3} color="#ff6b35">
            배포
          </Text>
        </group>
      )}

      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

export default Scene;
