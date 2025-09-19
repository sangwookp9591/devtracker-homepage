import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  fontFamily: 'system-ui, -apple-system, sans-serif',
  lineHeight: 1.5,
  color: vars.color.gray[800],
});
