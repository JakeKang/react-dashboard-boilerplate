# React + Vite + TailwindCSS 대시보드 프로젝트 가이드

## 목차

1. [빠른 시작](#빠른-시작)
2. [전체 설정 가이드](#전체-설정-가이드)
3. [사용된 패키지 설명](#사용된-패키지-설명)

## 빠른 시작

이미 생성된 보일러플레이트를 사용하는 경우:

```bash
# 프로젝트 클론
git clone [repository-url]
cd react-tailwind-dashboard

# 의존성 설치
bun install

# 개발 서버 실행
bun dev
```

## 전체 설정 가이드

### 1. Bun 설치

```bash
curl -fsSL https://bun.sh/install | bash
bun --version
```

### 2. 프로젝트 생성

```bash
bun create vite react-tailwind-dashboard -- --template react-ts
cd react-tailwind-dashboard
```

### 3. 의존성 설치

```bash
# 기본 의존성 설치
bun install

# TailwindCSS 관련 패키지 설치
bun add -d tailwindcss postcss autoprefixer prettier

# 추가 패키지 설치
bun add @headlessui/react @heroicons/react react-router-dom chart.js react-chartjs-2
```

### 4. TailwindCSS 설정

```bash
npx tailwindcss init -p
```

tailwind.config.js:

```typescript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#64748B',
      },
    },
  },
  plugins: [],
};
```

### 5. 프로젝트 구조

```
react-tailwind-dashboard/
├── src/
│   ├── components/
│   │   ├── charts/
│   │   └── ui/
│   ├── layouts/
│   │   └── DashboardLayout.tsx
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vite.config.ts
```

## 사용된 패키지 설명

### @headlessui/react

###### 제거됨

접근성이 고려된 UI 컴포넌트 라이브러리로, TailwindCSS와 완벽하게 통합됩니다.

### @heroicons/react

Tailwind CSS 팀이 제작한 SVG 아이콘 라이브러리입니다.

```typescript
import { BeakerIcon } from '@heroicons/react/24/solid'

function Component() {
  return <BeakerIcon className="h-6 w-6 text-blue-500" />
}
```

### react-router-dom

React 애플리케이션의 라우팅을 관리하는 표준 라이브러리입니다.

### chart.js와 react-chartjs-2

- **chart.js**: 반응형 차트 라이브러리
- **react-chartjs-2**: Chart.js의 React 래퍼

## Bun 주요 명령어

- `bun add <패키지명>`: 패키지 설치
- `bun remove <패키지명>`: 패키지 제거
- `bun install`: 모든 의존성 설치
- `bun dev`: 개발 서버 실행
- `bun run build`: 프로덕션 빌드

## 참고사항

- 개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.
- Bun은 npm 대비 최대 25배 빠른 설치 속도를 제공합니다.
- `bun.lockb` 파일은 바이너리 형식의 lockfile로, 더 빠른 파싱 속도를 제공합니다.

---

## TypeScript 설정 상세

프로젝트는 세 가지 TypeScript 설정 파일을 사용하여 각 환경에 최적화된 설정을 제공합니다.

### tsconfig.json (기본설정)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### tsconfig.node.json (Node.js 환경)

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler"
  },
  "include": ["vite.config.ts"]
}
```

### tsconfig.app.json (애플리케이션)

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["src/**/*.spec.ts", "src/**/*.test.tsx"]
}
```

### ESLint 설정 가이드

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    react: { version: '18.3' },
  },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

### Prettier 설정

프로젝트 루트에 .prettierrc 파일을 생성하여 기본 포맷팅 규칙을 설정합니다.

```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

### 개발 환경 설정 팁

#### 1. VSCode 확장 프로그램 설치

- ESLint
- Prettier
- Tailwind CSS IntelliSense

#### 2. 자동 포맷팅 설정

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
