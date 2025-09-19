import { style, keyframes } from '@vanilla-extract/css';

export const float = keyframes({
  '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
  '33%': { transform: 'translateY(-15px) rotate(2deg)' },
  '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
});

export const typing = keyframes({
  '0%': { width: '0' },
  '50%': { width: '100%' },
  '100%': { width: '100%' },
});

export const blink = keyframes({
  '0%, 50%': { borderColor: 'transparent' },
  '51%, 100%': { borderColor: '#00ff88' },
});

export const pulse = keyframes({
  '0%, 100%': { opacity: 1, transform: 'scale(1)' },
  '50%': { opacity: 0.8, transform: 'scale(1.05)' },
});

export const container = style({
  position: 'relative',
  minHeight: '100vh',
  background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 35%, #0f0f23 100%)',
  overflow: 'hidden',
});

export const threeBackground = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  opacity: 0,
  transition: 'opacity 1.5s ease-in-out',
});

export const threeBackgroundLoaded = style({
  opacity: 1,
});

export const contentWrapper = style({
  position: 'relative',
  zIndex: 10,
});

// Navigation Styles
export const navbar = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  backdropFilter: 'blur(20px)',
  backgroundColor: 'rgba(10, 10, 10, 0.8)',
  borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
  zIndex: 50,
  transition: 'all 0.3s ease',
});

export const navContainer = style({
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '80px',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  fontSize: '28px',
  fontWeight: 900,
  background: 'linear-gradient(45deg, #00ff88, #0088ff)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '-0.02em',
});

export const logoIcon = style({
  width: '44px',
  height: '44px',
  background: 'linear-gradient(135deg, #00ff88, #0088ff)',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 8px 32px rgba(0, 255, 136, 0.3)',
});

export const navLinks = style({
  display: 'none',
  alignItems: 'center',
  gap: '40px',
  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
    },
  },
});

export const navLink = style({
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '17px',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  position: 'relative',

  // 기본 after
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: '0',
      height: '2px',
      background: 'linear-gradient(45deg, #00ff88, #0088ff)',
      transition: 'width 0.3s ease',
    },
    '&:hover': {
      color: '#00ff88',
      transform: 'translateY(-1px)',
    },
    '&:hover::after': {
      width: '100%',
    },
  },
});

export const ctaButton = style({
  background: 'linear-gradient(135deg, #00ff88, #0088ff)',
  color: '#000000',
  padding: '14px 28px',
  borderRadius: '12px',
  border: 'none',
  fontSize: '17px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxShadow: '0 8px 32px rgba(0, 255, 136, 0.3)',
  ':hover': {
    transform: 'translateY(-2px) scale(1.05)',
    boxShadow: '0 15px 45px rgba(0, 255, 136, 0.5)',
  },
});

// Hero Section Styles
export const heroSection = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '120px 24px 80px',
  position: 'relative',
});

export const heroContent = style({
  maxWidth: '1400px',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '80px',
  alignItems: 'center',
  '@media': {
    '(min-width: 1024px)': {
      gridTemplateColumns: '1.2fr 1fr',
      gap: '120px',
    },
  },
});

export const heroText = style({
  textAlign: 'center',
  '@media': {
    '(min-width: 1024px)': {
      textAlign: 'left',
    },
  },
});

export const badge = style({
  display: 'inline-block',
  background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 136, 255, 0.15))',
  border: '1px solid rgba(0, 255, 136, 0.4)',
  borderRadius: '40px',
  padding: '12px 24px',
  fontSize: '16px',
  color: '#00ff88',
  marginBottom: '40px',
  fontWeight: '600',
  backdropFilter: 'blur(10px)',
  animation: `${pulse} 2s ease-in-out infinite`,
});

export const heroTitle = style({
  fontSize: '56px',
  fontWeight: '900',
  lineHeight: '1.1',
  marginBottom: '32px',
  letterSpacing: '-0.03em',
  '@media': {
    '(min-width: 768px)': {
      fontSize: '72px',
    },
    '(min-width: 1024px)': {
      fontSize: '80px',
    },
  },
});

export const titleGradient = style({
  background: 'linear-gradient(135deg, #ffffff 0%, #00ff88 50%, #0088ff 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const heroDescription = style({
  fontSize: '22px',
  lineHeight: '1.7',
  color: '#cccccc',
  marginBottom: '48px',
  maxWidth: '580px',
  margin: '0 auto 48px auto',
  '@media': {
    '(min-width: 1024px)': {
      margin: '0 0 48px 0',
      fontSize: '24px',
    },
  },
});

export const heroButtons = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  '@media': {
    '(min-width: 640px)': {
      flexDirection: 'row',
    },
    '(min-width: 1024px)': {
      justifyContent: 'flex-start',
    },
  },
});

export const primaryButton = style({
  background: 'linear-gradient(135deg, #00ff88, #0088ff)',
  color: '#000000',
  padding: '20px 40px',
  borderRadius: '16px',
  border: 'none',
  fontSize: '20px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  boxShadow: '0 10px 40px rgba(0, 255, 136, 0.4)',
  ':hover': {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 20px 60px rgba(0, 255, 136, 0.6)',
  },
});

export const secondaryButton = style({
  background: 'rgba(255, 255, 255, 0.08)',
  color: '#ffffff',
  padding: '20px 40px',
  borderRadius: '16px',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  fontSize: '20px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  backdropFilter: 'blur(10px)',
  ':hover': {
    borderColor: 'rgba(0, 255, 136, 0.5)',
    backgroundColor: 'rgba(0, 255, 136, 0.1)',
    transform: 'translateY(-2px)',
  },
});

// Character Section Styles
export const characterSection = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const developerScene = style({
  position: 'relative',
  width: '100%',
  maxWidth: '600px',
  height: '500px',
  animation: `${float} 4s ease-in-out infinite`,
});

export const computerSetup = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const mainMonitor = style({
  position: 'absolute',
  top: '50px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '320px',
  height: '200px',
  background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
  borderRadius: '16px',
  border: '12px solid #333333',
  overflow: 'hidden',
  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
});

export const screenGlow = style({
  position: 'absolute',
  top: '-20px',
  left: '-20px',
  right: '-20px',
  bottom: '-20px',
  background: 'radial-gradient(ellipse at center, rgba(0, 255, 136, 0.3) 0%, transparent 70%)',
  borderRadius: '24px',
  zIndex: -1,
});

export const screenContent = style({
  padding: '20px',
  height: '100%',
  background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
  fontSize: '13px',
  color: '#e6edf3',
});

export const codeEditor = style({
  lineHeight: '1.6',
});

export const typingText = style({
  borderRight: '3px solid #00ff88',
  animation: `${typing} 5s infinite, ${blink} 1s infinite`,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const developerAvatar = style({
  position: 'absolute',
  bottom: '30px',
  right: '60px',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '48px',
  border: '6px solid #00ff88',
  boxShadow: '0 15px 50px rgba(0, 255, 136, 0.4)',
  animation: `${pulse} 3s ease-in-out infinite`,
});

export const workDesk = style({
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '400px',
  height: '20px',
  background: 'linear-gradient(135deg, #8B4513, #A0522D)',
  borderRadius: '10px 10px 0 0',
  boxShadow: '0 -5px 20px rgba(139, 69, 19, 0.3)',
});

export const floatingElements = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
});

export const floatingIcon = style({
  position: 'absolute',
  fontSize: '28px',
  animation: `${float} 3s ease-in-out infinite`,
  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
});

// Stats Section
export const statsSection = style({
  padding: '100px 24px',
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(20px)',
});

export const sectionContainer = style({
  maxWidth: '1400px',
  margin: '0 auto',
});

export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '40px',
});

export const statCard = style({
  textAlign: 'center',
  padding: '48px 32px',
  background:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  backdropFilter: 'blur(20px)',
  ':hover': {
    transform: 'translateY(-8px) scale(1.02)',
    borderColor: 'rgba(0, 255, 136, 0.6)',
    boxShadow: '0 20px 60px rgba(0, 255, 136, 0.2)',
  },
});

export const statIcon = style({
  color: '#00ff88',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
});

export const statValue = style({
  fontSize: '56px',
  fontWeight: '900',
  color: '#ffffff',
  marginBottom: '12px',
  background: 'linear-gradient(135deg, #ffffff, #00ff88)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const statLabel = style({
  fontSize: '18px',
  color: '#cccccc',
  fontWeight: '600',
});

// Features Section
export const featuresSection = style({
  padding: '140px 24px',
});

export const sectionTitle = style({
  textAlign: 'center',
  fontSize: '56px',
  fontWeight: '900',
  marginBottom: '24px',
  background: 'linear-gradient(135deg, #ffffff, #00ff88)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '-0.02em',
});

export const sectionSubtitle = style({
  textAlign: 'center',
  fontSize: '22px',
  color: '#cccccc',
  marginBottom: '100px',
  maxWidth: '700px',
  margin: '0 auto 100px auto',
});

export const featuresGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  gap: '48px',
});

export const featureCard = style({
  background:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '24px',
  padding: '48px',
  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  ':hover': {
    transform: 'translateY(-12px) scale(1.02)',
    borderColor: 'rgba(0, 255, 136, 0.6)',
    boxShadow: '0 25px 80px rgba(0, 255, 136, 0.15)',
  },
});

export const featureIcon = style({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  marginBottom: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease',
});

export const featureTitle = style({
  fontSize: '28px',
  fontWeight: '800',
  marginBottom: '20px',
  color: '#ffffff',
});

export const featureDescription = style({
  fontSize: '18px',
  lineHeight: '1.7',
  color: '#cccccc',
});

// CTA Section
export const ctaSection = style({
  padding: '140px 24px',
  textAlign: 'center',
  background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.08) 0%, rgba(0, 136, 255, 0.08) 100%)',
  backdropFilter: 'blur(20px)',
});

export const ctaTitle = style({
  fontSize: '56px',
  fontWeight: '900',
  marginBottom: '32px',
  background: 'linear-gradient(135deg, #ffffff, #cccccc)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

export const ctaDescription = style({
  fontSize: '24px',
  color: '#cccccc',
  marginBottom: '48px',
  maxWidth: '700px',
  margin: '0 auto 48px auto',
  lineHeight: '1.6',
});

export const ctaButtons = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  '@media': {
    '(min-width: 640px)': {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
});

// Footer
export const footer = style({
  padding: '80px 24px',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(20px)',
});

export const footerContent = style({
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
  '@media': {
    '(min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
});

export const footerLinks = style({
  display: 'flex',
  gap: '40px',
});

export const footerLink = style({
  color: '#cccccc',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: '600',
  transition: 'color 0.3s ease',
  ':hover': {
    color: '#00ff88',
  },
});

export const copyright = style({
  marginTop: '40px',
  paddingTop: '40px',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  textAlign: 'center',
  color: '#888888',
  fontSize: '16px',
});
