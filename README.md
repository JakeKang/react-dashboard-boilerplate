# React + Vite + TailwindCSS + Shadcn 대시보드 프로젝트 가이드

## 목차

1. [빠른 시작](#빠른-시작)
2. [전체 설정 가이드](#전체-설정-가이드)
3. [Shadcn 설치 및 설정](#shadcn-설치-및-설정)
4. [사용된 패키지 설명](#사용된-패키지-설명)
5. [TypeScript 설정 상세](#typescript-설정-상세)
6. [ESLint 및 Prettier 설정](#eslint-및-prettier-설정)
7. [개발 환경 설정 팁](#개발-환경-설정-팁)

---

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

---

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

# 추가 패키지 설치 (Shadcn, React Router, Chart.js 등)
bun add @heroicons/react react-router-dom chart.js react-chartjs-2 lucide-react
```

---

## Shadcn 설치 및 설정

### 1. Shadcn 초기화

Shadcn은 컴포넌트 코드를 직접 복사하여 사용하는 방식입니다. 이를 위해 `shadcn` CLI를 사용하여 필요한 컴포넌트를 추가할 수 있습니다.

```bash
npx shadcn@latest init
```

이 명령어는 프로젝트에 Shadcn을 초기화하여 사용할 준비를 완료합니다.

### 2. Shadcn 컴포넌트 추가

필요한 컴포넌트를 추가할 수 있습니다. 예를 들어, 버튼 컴포넌트를 추가하려면 다음 명령어를 실행합니다:

```bash
npx shadcn@latest add button
```

이 명령어는 `src/components/ui/button.tsx` 파일에 버튼 컴포넌트 코드를 생성합니다.

#### 버튼 컴포넌트 사용 예시:

```tsx
import React from 'react';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Button variant='primary'>Click Me!</Button>
    </div>
  );
}

export default App;
```

---

## TailwindCSS 설정

TailwindCSS는 Shadcn과 함께 사용되며, Tailwind의 유틸리티 클래스를 통해 UI 스타일링을 쉽게 할 수 있습니다.

### TailwindCSS 초기화:

```bash
npx tailwindcss init -p
```

### tailwind.config.js 설정:

```typescript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
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

### src/index.css 또는 src/App.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 프로젝트 구조

```
react-tailwind-dashboard/
├── src/
│   ├── components/
│   │   ├── charts/
│   │   └── ui/
│   │       └── button.tsx (Shadcn에서 추가한 버튼 컴포넌트)
│   ├── layouts/
│   │   └── DashboardLayout.tsx
│   ├── pages/
│   ├── App.tsx (루트 컴포넌트)
│   └── main.tsx (엔트리 포인트)
├── public/
├── index.html (HTML 템플릿)
├── package.json (프로젝트 설정 파일)
├── tailwind.config.js (TailwindCSS 설정 파일)
├── postcss.config.js (PostCSS 설정 파일)
├── tsconfig.json (TypeScript 기본 설정 파일)
└── vite.config.ts (Vite 설정 파일)
```

---

## 사용된 패키지 설명

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

- **chart.js**: 반응형 차트 라이브러리.
- **react-chartjs-2**: Chart.js의 React 래퍼.

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

---

## ESLint 및 Prettier 설정

### ESLint 설정 가이드:

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

### Prettier 설정:

프로젝트 루트에 `.prettierrc` 파일을 생성하여 기본 포맷팅 규칙을 설정합니다.

```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

---

## 개발 환경 설정 팁

#### VSCode 확장 프로그램 설치:

1. **ESLint**
2. **Prettier**
3. **Tailwind CSS IntelliSense**

#### 자동 포맷팅 설정:

VSCode에서 저장 시 자동으로 코드 포맷팅을 적용하려면 다음과 같이 `.vscode/settings.json` 파일을 수정합니다.

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

---

## Bun 주요 명령어

- `bun add <패키지명>`: 패키지 설치.
- `bun remove <패키지명>`: 패키지 제거.
- `bun install`: 모든 의존성 설치.
- `bun dev`: 개발 서버 실행.
- `bun run build`: 프로덕션 빌드.

---

## 참고사항

1. 개발 서버는 기본적으로 `http://localhost:5173`에서 실행됩니다.
2. Bun은 npm 대비 최대 **25배 빠른 설치 속도**를 제공합니다.
3. `bun.lockb` 파일은 바이너리 형식의 lockfile로, 더 빠른 파싱 속도를 제공합니다.

---
