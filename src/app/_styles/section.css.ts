import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const heroSection = style({
  paddingTop: '4rem',
  display: 'flex',
  minHeight: '100vh',
});

export const heroLeft = style({
  width: '50%',
  padding: vars.space.lg,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const heroContent = style({
  transform: 'translateY(10px)',
  opacity: 0,
  transition: 'all 1s ease-out',
  selectors: {
    '&.loaded': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
});

export const heroTitle = style({
  fontSize: vars.fontSize['5xl'],
  fontWeight: 'bold',
  color: vars.color.gray[800],
  marginBottom: vars.space.md,
  lineHeight: 1.1,
});

export const heroTitleAccent = style({
  display: 'block',
  background: `linear-gradient(135deg, ${vars.color.orange[500]} 0%, ${vars.color.orange[700]} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

export const heroDescription = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.gray[600],
  marginBottom: vars.space.lg,
  lineHeight: 1.6,
});

export const heroButtons = style({
  display: 'flex',
  gap: vars.space.sm,
});

export const heroRight = style({
  width: '50%',
  position: 'relative',
});

export const canvasContainer = style({
  width: '100%',
  height: '100%',
});

export const floatingLabels = style({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
});

export const floatingLabel = style({
  position: 'absolute',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: '500',
  color: vars.color.gray[700],
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

// Section Styles
export const sectionContainer = style({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: `0 ${vars.space.lg}`,
});

export const sectionHeader = style({
  textAlign: 'center',
  marginBottom: vars.space.xxl,
});

export const sectionTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: 'bold',
  color: vars.color.gray[800],
  marginBottom: vars.space.sm,
});

export const sectionSubtitle = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.gray[600],
});

// Features Section Styles
export const featuresSection = style({
  padding: `${vars.space.xxl} 0`,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
});

export const featuresGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.space.xl,
  alignItems: 'center',
  '@media': {
    '(min-width: 1024px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
});

export const featureContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const featureCard = style({
  background: `linear-gradient(135deg, ${vars.color.orange[500]} 0%, ${vars.color.orange[600]} 100%)`,
  color: vars.color.white,
  padding: vars.space.md,
  borderRadius: vars.borderRadius.xl,
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
});

export const featureCardTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: 'bold',
  marginBottom: vars.space.sm,
});

export const featureCardDescription = style({
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: vars.space.md,
  lineHeight: 1.6,
});

export const featureList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
});

export const featureListItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
});

export const featureListDot = style({
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: vars.borderRadius.full,
});

export const featureListText = style({
  color: 'rgba(255, 255, 255, 0.9)',
});

export const sectionButtons = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space.sm,
});

export const sectionButton = style({
  padding: vars.space.sm,
  borderRadius: vars.borderRadius.xl,
  border: '2px solid',
  transition: 'all 0.3s',
  cursor: 'pointer',
  backgroundColor: vars.color.white,
  textAlign: 'center',
});

export const sectionButtonActive = style([
  sectionButton,
  {
    borderColor: vars.color.orange[500],
    backgroundColor: vars.color.orange[50],
  },
]);

export const sectionButtonInactive = style([
  sectionButton,
  {
    borderColor: vars.color.gray[200],
    ':hover': {
      borderColor: vars.color.orange[400],
    },
  },
]);

export const buttonIcon = style({
  width: '2rem',
  height: '2rem',
  borderRadius: vars.borderRadius.full,
  margin: '0 auto',
  marginBottom: vars.space.xs,
});

export const buttonIconActive = style([
  buttonIcon,
  {
    backgroundColor: vars.color.orange[500],
  },
]);

export const buttonIconInactive = style([
  buttonIcon,
  {
    backgroundColor: vars.color.gray[400],
  },
]);

export const buttonText = style({
  fontSize: vars.fontSize.sm,
  fontWeight: '500',
  color: vars.color.gray[600],
});

// Target Users Section Styles
export const targetUsersSection = style({
  padding: `${vars.space.xxl} 0`,
  background: `linear-gradient(135deg, ${vars.color.orange[50]} 0%, ${vars.color.white} 100%)`,
});

export const usersGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: vars.space.lg,
});

export const userCard = style({
  backgroundColor: vars.color.white,
  padding: vars.space.lg,
  borderRadius: vars.borderRadius.xl,
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s',
  ':hover': {
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
  },
});

export const userIcon = style({
  fontSize: vars.fontSize['4xl'],
  marginBottom: vars.space.sm,
});

export const userTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: 'bold',
  color: vars.color.gray[800],
  marginBottom: vars.space.sm,
});

export const userDescription = style({
  color: vars.color.gray[600],
  lineHeight: 1.6,
});

// CTA Section Styles
export const ctaSection = style({
  padding: `${vars.space.xxl} 0`,
  background: `linear-gradient(135deg, ${vars.color.orange[500]} 0%, ${vars.color.orange[600]} 100%)`,
  textAlign: 'center',
});

export const ctaContainer = style({
  maxWidth: '1024px',
  margin: '0 auto',
  padding: `0 ${vars.space.lg}`,
});

export const ctaTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: 'bold',
  color: vars.color.white,
  marginBottom: vars.space.md,
});

export const ctaDescription = style({
  fontSize: vars.fontSize.xl,
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: vars.space.lg,
  lineHeight: 1.6,
});

export const ctaButtons = style({
  display: 'flex',
  justifyContent: 'center',
  gap: vars.space.sm,
  flexWrap: 'wrap',
});

export const ctaButtonPrimary = style({
  backgroundColor: vars.color.white,
  color: vars.color.orange[600],
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: vars.borderRadius.full,
  border: 'none',
  fontSize: vars.fontSize.lg,
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s',
  ':hover': {
    backgroundColor: vars.color.gray[50],
    transform: 'scale(1.05)',
  },
});

export const ctaButtonSecondary = style({
  border: `2px solid ${vars.color.white}`,
  color: vars.color.white,
  backgroundColor: 'transparent',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.lg,
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
