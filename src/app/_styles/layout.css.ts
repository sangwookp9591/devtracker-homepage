import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const container = style({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${vars.color.white} 0%, ${vars.color.orange[50]} 50%, ${vars.color.orange[100]} 100%)`,
  overflow: 'hidden',
});

export const footer = style({
  backgroundColor: vars.color.gray[800],
  color: vars.color.white,
  padding: `${vars.space.xl} 0`,
});

export const footerContent = style({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: `0 ${vars.space.lg}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const footerCopyright = style({
  color: vars.color.gray[400],
});
