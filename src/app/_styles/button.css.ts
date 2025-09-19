import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const primaryButton = style({
  backgroundColor: vars.color.orange[600],
  color: vars.color.white,
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.borderRadius.full,
  border: 'none',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s',
  ':hover': {
    backgroundColor: vars.color.orange[700],
    transform: 'scale(1.05)',
  },
});

export const secondaryButton = style({
  border: `2px solid ${vars.color.orange[600]}`,
  color: vars.color.orange[600],
  backgroundColor: 'transparent',
  padding: `${vars.space.xs} ${vars.space.md}`,
  borderRadius: vars.borderRadius.full,
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s',
  ':hover': {
    backgroundColor: vars.color.orange[50],
  },
});

export const heroButtonLarge = style([
  primaryButton,
  {
    padding: `${vars.space.sm} ${vars.space.lg}`,
    fontSize: vars.fontSize.lg,
    fontWeight: '600',
  },
]);

export const heroButtonSecondaryLarge = style([
  secondaryButton,
  {
    padding: `${vars.space.sm} ${vars.space.lg}`,
    fontSize: vars.fontSize.lg,
    fontWeight: '600',
  },
]);
