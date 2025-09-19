import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './_styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevTracker - IT 프리랜서를 위한 스마트 시간 관리',
  description:
    'Git 커밋과 연동된 자동 시간 추적으로 개발 생산성을 극대화하세요. 개발 단계별 분류와 ROI 분석으로 프리랜서 개발자의 업무 효율성을 혁신합니다.',
  keywords: 'DevTracker, 시간관리, 개발자, 프리랜서, Git, 생산성, 타임트래킹',
  openGraph: {
    title: 'DevTracker - 개발자를 위한 스마트 시간 관리',
    description: '자동 시간 추적과 생산성 분석으로 개발 효율성을 극대화하세요',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
