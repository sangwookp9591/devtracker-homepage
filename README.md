# DevTracker - 공식 홈페이지

IT 프리랜서와 1인 개발자를 위한 전문적인 시간 관리 솔루션 DevTracker의 공식 홈페이지입니다.

## 🚀 기술 스택

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Vanilla Extract** (Type-safe CSS-in-JS)
- **Three.js** (3D 배경 효과)
- **Lucide React** (아이콘)

## 📦 설치 및 실행

```bash
# 프로젝트 생성
npx create-next-app@latest devtracker-homepage --typescript --tailwind --eslint --app --src-dir

# 의존성 설치 (위의 package.json 내용으로 교체 후)
pnpm install

# 개발 서버 실행
pnpm run dev

# 빌드
pnpm run build

# 프로덕션 서버 실행
pnpm start
```

## ✨ 주요 특징

### 🎨 디자인 컨셉

- **Young & Trendy**: 현대적이고 세련된 디자인
- **Professional**: 공식 홈페이지답게 전문적인 느낌
- **Tech-inspired**: 개발자를 위한 기술적 요소들

### 🖥️ 개발자 캐릭터 & 환경

- 실제 코딩 환경을 연상시키는 모니터 화면
- 실시간 타이핑 효과로 DevTracker 코드 시연
- 3D 플로팅 아이콘들로 생동감 연출
- 개발자 아바타와 작업 공간 시각화

### 🎯 타겟 사용자

- IT 프리랜서
- 1인 개발자
- 소규모 개발팀
- 디자이너 & 퍼블리셔

## 🛠️ 개발 가이드

### 폴더 구조

```
src/
├── app/
│   ├── _components/
│   │   └── ThreeBackground.tsx
│   └── _styles/
│       ├── global.css.ts
│       └── components.css.ts
│   ├── layout.tsx
│   └── page.tsx
```

### 스타일링

- Vanilla Extract를 사용한 Type-safe CSS
- 컴포넌트별 스타일 모듈화
- 반응형 디자인 완벽 지원

### 성능 최적화

- Next.js 14 App Router 사용
- 이미지 최적화 (next/image)
- 폰트 최적화 (next/font)
- Three.js 최적화된 렌더링

## 🎨 브랜딩

### 컬러 팔레트

- Primary: `#00ff88` (Neon Green)
- Secondary: `#0088ff` (Cyber Blue)
- Accent: `#ff0088` (Hot Pink)
- Background: Gradient from `#0a0a0a` to `#16213e`

### 타이포그래피

- UI: Inter (Modern & Clean)
- Code: JetBrains Mono (Developer-friendly)
