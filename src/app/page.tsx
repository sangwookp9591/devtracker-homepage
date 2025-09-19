'use client';

import React, { useState, useEffect } from 'react';
import {
  Code2,
  GitCommit,
  BarChart3,
  Timer,
  Target,
  TrendingUp,
  ArrowRight,
  Github,
  Clock,
  Layers,
  Zap,
  Cpu,
  Database,
  Globe,
} from 'lucide-react';
import { ThreeBackground } from './_components/ThreeBackground';
import * as styles from './_styles/components.css';

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <GitCommit className="w-10 h-10 text-white" />,
      title: 'Git 커밋 연동',
      description:
        '커밋 기록과 자동으로 연동하여 실제 개발 시간을 정확하게 추적합니다. 개발자의 실제 작업 패턴을 분석하여 더욱 정밀한 시간 관리를 제공합니다.',
      gradient: 'linear-gradient(135deg, #00ff88, #00cc66)',
    },
    {
      icon: <Layers className="w-10 h-10 text-white" />,
      title: '개발 단계별 분류',
      description:
        '기획부터 배포까지 각 단계별로 시간을 자동 분류하고 관리합니다. 워크플로우의 각 단계에서 소요되는 시간을 시각화하여 병목 구간을 쉽게 파악할 수 있습니다.',
      gradient: 'linear-gradient(135deg, #0088ff, #0066cc)',
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-white" />,
      title: '생산성 분석 & ROI',
      description:
        '코드 생산성 지표와 ROI 분석으로 업무 효율성을 극대화하세요. 데이터 기반의 인사이트로 수익성을 개선하고 경쟁력을 강화할 수 있습니다.',
      gradient: 'linear-gradient(135deg, #ff0088, #cc0066)',
    },
  ];

  const benefits = [
    {
      icon: <Timer className="w-10 h-10" />,
      title: '자동화된 시간 추적',
      description:
        'Git 커밋 기록으로 수동 입력 없이 정확한 작업 시간을 자동으로 기록합니다. 개발에만 집중하고 시간 관리는 DevTracker에게 맡기세요.',
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: '생산성 극대화',
      description:
        '개발 단계별 분석으로 병목구간을 찾아내고 효율성을 개선합니다. 데이터 기반의 워크플로우 최적화로 더 많은 프로젝트를 성공적으로 완료하세요.',
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: '정확한 프로젝트 관리',
      description:
        '프로젝트별 투입 시간과 성과를 정확히 측정하여 수익성을 최적화합니다. 클라이언트에게 투명한 작업 내역을 제공하여 신뢰도를 높일 수 있습니다.',
    },
  ];

  const stats = [
    { label: '평균 시간 절약', value: '40%', icon: <Clock className="w-10 h-10" /> },
    { label: '생산성 향상', value: '2.5x', icon: <TrendingUp className="w-10 h-10" /> },
    { label: '추적 정확도', value: '99%', icon: <Target className="w-10 h-10" /> },
  ];

  return (
    <div className={styles.container}>
      {/* Three.js Background */}
      <div className={`${styles.threeBackground} ${isLoaded ? styles.threeBackgroundLoaded : ''}`}>
        <ThreeBackground scrollY={scrollY} onLoaded={() => setIsLoaded(true)} />
      </div>

      <div className={styles.contentWrapper}>
        {/* Navigation */}
        <nav className={styles.navbar}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Code2 className="w-6 h-6 text-black" />
              </div>
              DevTracker
            </div>
            <div className={styles.navLinks}>
              <a href="#features" className={styles.navLink}>
                기능
              </a>
              <a href="#benefits" className={styles.navLink}>
                장점
              </a>
              <a href="#pricing" className={styles.navLink}>
                요금제
              </a>
              <a href="#support" className={styles.navLink}>
                지원
              </a>
              <button className={styles.ctaButton}>시작하기</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.badge}>🚀 차세대 개발자 시간 관리 플랫폼</div>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleGradient}>개발자를 위한</span>
                <br />
                <span className={styles.titleGradient}>스마트 시간 관리</span>
              </h1>
              <p className={styles.heroDescription}>
                Git 커밋과 연동된 자동 시간 추적으로 개발 생산성을 극대화하세요. IT 프리랜서와 1인
                개발자를 위한 전문적인 워크플로우 관리 솔루션입니다.
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.primaryButton}>
                  <span>무료로 시작하기</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className={styles.secondaryButton}>
                  <Github className="w-6 h-6" />
                  <span>GitHub으로 연동</span>
                </button>
              </div>
            </div>

            {/* Enhanced Developer Character Scene */}
            <div className={styles.characterSection}>
              <div className={styles.developerScene}>
                <div className={styles.computerSetup}>
                  {/* Screen glow effect */}
                  <div className={styles.screenGlow}></div>

                  {/* Main monitor */}
                  <div className={styles.mainMonitor}>
                    <div className={styles.screenContent}>
                      <div className={styles.codeEditor}>
                        <div style={{ color: '#7c3aed', marginBottom: '8px' }}>
                          <span style={{ color: '#f97316' }}>// </span>
                          DevTracker Integration
                        </div>
                        <div style={{ color: '#0ea5e9', marginBottom: '6px' }}>
                          <span className={styles.typingText}>
                            const timeTracker = new DevTracker()
                          </span>
                        </div>
                        <div style={{ color: '#10b981', marginLeft: '16px', marginBottom: '4px' }}>
                          git.onCommit(trackTime)
                        </div>
                        <div style={{ color: '#10b981', marginLeft: '16px', marginBottom: '4px' }}>
                          analyze.productivity()
                        </div>
                        <div style={{ color: '#10b981', marginLeft: '16px', marginBottom: '8px' }}>
                          generate.reports()
                        </div>
                        <div style={{ color: '#22c55e', fontSize: '11px' }}>
                          ✅ Time tracking activated!
                        </div>
                        <div style={{ color: '#22c55e', fontSize: '11px' }}>
                          📊 Productivity insights ready
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Developer avatar */}
                  <div className={styles.developerAvatar}>👨‍💻</div>

                  {/* Work desk */}
                  <div className={styles.workDesk}></div>

                  {/* Enhanced floating elements */}
                  <div className={styles.floatingElements}>
                    <div
                      className={styles.floatingIcon}
                      style={{
                        top: '20px',
                        left: '30px',
                        animationDelay: '0s',
                        color: '#00ff88',
                      }}
                    >
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div
                      className={styles.floatingIcon}
                      style={{
                        top: '80px',
                        right: '40px',
                        animationDelay: '0.5s',
                        color: '#0088ff',
                      }}
                    >
                      <Database className="w-6 h-6" />
                    </div>
                    <div
                      className={styles.floatingIcon}
                      style={{
                        bottom: '120px',
                        left: '50px',
                        animationDelay: '1s',
                        color: '#ff0088',
                      }}
                    >
                      <Globe className="w-6 h-6" />
                    </div>
                    <div
                      className={styles.floatingIcon}
                      style={{
                        bottom: '180px',
                        right: '30px',
                        animationDelay: '1.5s',
                        color: '#88ff00',
                      }}
                    >
                      ⚡
                    </div>
                    <div
                      className={styles.floatingIcon}
                      style={{
                        top: '140px',
                        left: '20px',
                        animationDelay: '2s',
                        color: '#ff8800',
                      }}
                    >
                      🎯
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>핵심 기능</h2>
            <p className={styles.sectionSubtitle}>개발자의 워크플로우에 최적화된 혁신적인 기능들</p>

            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon} style={{ background: feature.gradient }}>
                    {feature.icon}
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className={styles.featuresSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>
              <span
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #0088ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                왜 DevTracker인가?
              </span>
            </h2>
            <p className={styles.sectionSubtitle}>
              현대적이고 효율적인 개발자 시간 관리의 새로운 표준
            </p>

            <div className={styles.featuresGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.featureCard}>
                  <div
                    className={styles.featureIcon}
                    style={{
                      background:
                        index === 0
                          ? 'linear-gradient(135deg, #00ff88, #00cc66)'
                          : index === 1
                          ? 'linear-gradient(135deg, #0088ff, #0066cc)'
                          : 'linear-gradient(135deg, #ff0088, #cc0066)',
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className={styles.featureTitle}>{benefit.title}</h3>
                  <p className={styles.featureDescription}>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.ctaTitle}>지금 바로 시작하세요</h2>
            <p className={styles.ctaDescription}>
              DevTracker로 개발 시간을 스마트하게 관리하고 생산성을 극대화하세요. 전문적인 개발
              워크플로우를 경험해보세요.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <span>무료 체험 시작</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              <p style={{ color: '#999999', fontSize: '16px', marginTop: '16px' }}>
                신용카드 없이 30일 무료 체험 • 언제든 취소 가능
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="support" className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Code2 className="w-6 h-6 text-black" />
              </div>
              DevTracker
            </div>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>
                개인정보처리방침
              </a>
              <a href="#" className={styles.footerLink}>
                서비스 약관
              </a>
              <a href="#" className={styles.footerLink}>
                고객 지원
              </a>
              <a href="#" className={styles.footerLink}>
                API 문서
              </a>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2024 DevTracker. 모든 권리 보유. | 개발자를 위한 전문 시간 관리 솔루션</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
