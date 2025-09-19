'use client';

import * as THREE from 'three';
import { useEffect, useState } from 'react';
import * as sectionStyles from '../_styles/section.css';
import * as navStyles from '../_styles/navigation.css';
import * as btnStyles from '../_styles/button.css';
import { lightTheme } from '../_styles/theme.css';
import * as layoutStyles from '../_styles/layout.css';
import { Canvas } from '@react-three/fiber';
import OrangeCharacter from './OrangeCharacter';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';

const DevTrackerLanding = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      title: 'Git 커밋 기반 자동 시간 추적',
      description:
        '개발자의 실제 작업과 연동되어 자동으로 시간을 기록합니다. 더 이상 수동으로 시간을 입력할 필요가 없습니다.',
      features: ['실시간 커밋 추적', '자동 시간 계산', '브랜치별 분석'],
    },
    {
      title: '개발 워크플로우 특화 분류',
      description:
        '기획부터 배포까지, 개발 단계에 맞춰 시간을 자동으로 분류하여 프로젝트 진행 상황을 한눈에 파악하세요.',
      features: ['5단계 워크플로우', '단계별 시간 분석', '병목 구간 식별'],
    },
    {
      title: '코드 생산성 지표',
      description:
        '라인 수, 커밋 빈도, 버그 수정 시간 등 다양한 지표로 개발 생산성을 측정하고 개선점을 찾아보세요.',
      features: ['생산성 대시보드', '코드 품질 지표', '개선 제안'],
    },
    {
      title: 'ROI 분석 및 리포트',
      description:
        '프로젝트별 투입 시간과 수익을 분석하여 비즈니스 인사이트를 제공합니다. 더 나은 의사결정을 위한 데이터를 확보하세요.',
      features: ['수익성 분석', '클라이언트별 리포트', '시간당 수익 계산'],
    },
  ];

  return (
    <div className={`${lightTheme} ${layoutStyles.container}`}>
      {/* Navigation */}
      <nav className={navStyles.navigation}>
        <div className={navStyles.navContent}>
          <div className={navStyles.logo}>
            <div className={navStyles.logoIcon}></div>
            <span className={navStyles.logoText}>DevTracker</span>
          </div>
          <div className={navStyles.navLinks}>
            <a href="#features" className={navStyles.navLink}>
              기능
            </a>
            <a href="#pricing" className={navStyles.navLink}>
              가격
            </a>
            <a href="#contact" className={navStyles.navLink}>
              문의
            </a>
          </div>
          <button className={btnStyles.primaryButton}>시작하기</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={sectionStyles.heroSection}>
        {/* Left Panel - Content */}
        <div className={sectionStyles.heroLeft}>
          <div className={`${sectionStyles.heroContent} ${isLoaded ? 'loaded' : ''}`}>
            <h1 className={sectionStyles.heroTitle}>
              IT 프리랜서를 위한
              <span className={sectionStyles.heroTitleAccent}>스마트 시간 추적</span>
            </h1>
            <p className={sectionStyles.heroDescription}>
              Git 커밋과 연동된 자동 시간 추적으로 개발 워크플로우를 최적화하고, 생산성을
              극대화하세요. 더 이상 시간 관리에 신경 쓸 필요 없습니다.
            </p>
            <div className={sectionStyles.heroButtons}>
              <button className={btnStyles.heroButtonLarge}>무료로 시작하기</button>
              <button className={btnStyles.heroButtonSecondaryLarge}>데모 보기</button>
            </div>
          </div>
        </div>

        {/* Right Panel - 3D Scene */}
        <div className={sectionStyles.heroRight}>
          <div className={sectionStyles.canvasContainer}>
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
              <Scene currentSection={currentSection} onCharacterClick={setCurrentSection} />
            </Canvas>
          </div>

          {/* Character Labels */}
          <div className={sectionStyles.floatingLabels}>
            <div
              className={sectionStyles.floatingLabel}
              style={{ top: '25%', left: '25%', transform: 'translate(-50%, -50%)' }}
            >
              Git Integration
            </div>
            <div
              className={sectionStyles.floatingLabel}
              style={{ top: '16.67%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              Workflow Tracking
            </div>
            <div
              className={sectionStyles.floatingLabel}
              style={{ top: '25%', right: '25%', transform: 'translate(50%, -50%)' }}
            >
              Analytics
            </div>
            <div
              className={sectionStyles.floatingLabel}
              style={{ bottom: '25%', left: '50%', transform: 'translate(-50%, 50%)' }}
            >
              ROI Dashboard
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className={sectionStyles.featuresSection}>
        <div className={sectionStyles.sectionContainer}>
          <div className={sectionStyles.sectionHeader}>
            <h2 className={sectionStyles.sectionTitle}>오렌지와 함께 알아보는 핵심 기능</h2>
            <p className={sectionStyles.sectionSubtitle}>
              각 오렌지 캐릭터를 클릭해서 기능을 자세히 알아보세요!
            </p>
          </div>

          <div className={sectionStyles.featuresGrid}>
            <div className={sectionStyles.featureContent}>
              <div className={sectionStyles.featureCard}>
                <h3 className={sectionStyles.featureCardTitle}>{sections[currentSection].title}</h3>
                <p className={sectionStyles.featureCardDescription}>
                  {sections[currentSection].description}
                </p>
                <ul className={sectionStyles.featureList}>
                  {sections[currentSection].features.map((feature, index) => (
                    <li key={index} className={sectionStyles.featureListItem}>
                      <div className={sectionStyles.featureListDot}></div>
                      <span className={sectionStyles.featureListText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={sectionStyles.sectionButtons}>
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={
                      currentSection === index
                        ? sectionStyles.sectionButtonActive
                        : sectionStyles.sectionButtonInactive
                    }
                  >
                    <div
                      className={
                        currentSection === index
                          ? sectionStyles.buttonIconActive
                          : sectionStyles.buttonIconInactive
                      }
                    ></div>
                    <div className={sectionStyles.buttonText}>
                      {index === 0
                        ? 'Git 추적'
                        : index === 1
                        ? '워크플로우'
                        : index === 2
                        ? '생산성'
                        : 'ROI'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', height: '24rem' }}>
              <Canvas camera={{ position: [0, 0, 6] }}>
                {/* 전체적인 밝기 */}
                <ambientLight intensity={0.9} />

                {/* 위쪽에서 내려오는 주광 (햇빛 같은 느낌) */}
                <directionalLight
                  position={[0, 10, 5]}
                  intensity={1.2}
                  castShadow={false}
                  color="#ffffff"
                />

                {/* 따뜻한 보조광 */}
                <pointLight position={[-5, 2, 5]} intensity={0.7} color="#ffd699" />

                {/* 차가운 보조광 */}
                <pointLight position={[5, -2, 5]} intensity={0.5} color="#aaddff" />

                {/* 전체를 부드럽게 감싸는 하늘/땅 조명 */}
                <hemisphereLight args={['#ffffff', '#ffebcc', 0.6]} />

                <OrangeCharacter position={[0, 0, 0]} isActive={true} scale={1.5} />
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={1}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className={sectionStyles.targetUsersSection}>
        <div className={sectionStyles.sectionContainer}>
          <div className={sectionStyles.sectionHeader}>
            <h2 className={sectionStyles.sectionTitle}>누구를 위한 도구인가요?</h2>
          </div>

          <div className={sectionStyles.usersGrid}>
            {[
              {
                title: '프리랜서 개발자',
                description: '프로젝트별 시간 관리와 수익 분석이 필요한 프리랜서',
                icon: '👨‍💻',
              },
              {
                title: '1인 개발자',
                description: '효율적인 시간 배분과 생산성 향상이 필요한 솔로 개발자',
                icon: '🚀',
              },
              {
                title: '소규모 팀',
                description: '팀원들의 작업 현황과 프로젝트 진행도를 파악하고 싶은 팀',
                icon: '👥',
              },
            ].map((user, index) => (
              <div key={index} className={sectionStyles.userCard}>
                <div className={sectionStyles.userIcon}>{user.icon}</div>
                <h3 className={sectionStyles.userTitle}>{user.title}</h3>
                <p className={sectionStyles.userDescription}>{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={sectionStyles.ctaSection}>
        <div className={sectionStyles.ctaContainer}>
          <h2 className={sectionStyles.ctaTitle}>지금 바로 시작해보세요!</h2>
          <p className={sectionStyles.ctaDescription}>
            14일 무료 체험으로 DevTracker의 강력한 기능을 경험해보세요. 신용카드 등록 없이도 모든
            기능을 사용할 수 있습니다.
          </p>
          <div className={sectionStyles.ctaButtons}>
            <button className={sectionStyles.ctaButtonPrimary}>무료 체험 시작</button>
            <button className={sectionStyles.ctaButtonSecondary}>가격 정보 보기</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={layoutStyles.footer}>
        <div className={layoutStyles.footerContent}>
          <div className={navStyles.logo}>
            <div className={navStyles.logoIcon}></div>
            <span className={navStyles.logoText}>DevTracker</span>
          </div>
          <div className={layoutStyles.footerCopyright}>© 2025 DevTracker. 모든 권리 보유.</div>
        </div>
      </footer>
    </div>
  );
};

export default DevTrackerLanding;
