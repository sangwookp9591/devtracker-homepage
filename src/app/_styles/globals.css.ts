import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html', {
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  backgroundColor: '#0a0a0a',
  color: '#ffffff',
  overflowX: 'hidden',
  lineHeight: 1.6,
});

globalStyle('::-webkit-scrollbar', {
  width: '8px',
});

globalStyle('::-webkit-scrollbar-track', {
  background: '#1a1a1a',
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: 'linear-gradient(180deg, #00ff88, #0088ff)',
  borderRadius: '4px',
});
