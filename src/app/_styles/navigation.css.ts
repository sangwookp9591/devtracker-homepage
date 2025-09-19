import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const navigation = style({
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 50,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${vars.color.orange[200]}`,
});

export const navContent = style({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: `0 ${vars.space.lg}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '4rem',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
});

export const logoIcon = style({
  width: '2rem',
  height: '2rem',
  background: `linear-gradient(135deg, ${vars.color.orange[400]} 0%, ${vars.color.orange[600]} 100%)`,
  borderRadius: vars.borderRadius.full,
});

export const logoText = style({
  fontSize: vars.fontSize.xl,
  fontWeight: 'bold',
  color: vars.color.gray[800],
});

export const navLinks = style({
  display: 'none',
  gap: vars.space.lg,
  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
    },
  },
});

export const navLink = style({
  color: vars.color.gray[600],
  textDecoration: 'none',
  transition: 'color 0.3s',
  ':hover': {
    color: vars.color.orange[600],
  },
});
