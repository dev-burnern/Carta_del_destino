# Carta del Destino

타로 카드 운세 웹 애플리케이션

## 기술 스택

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS

### Backend
- Node.js
- NestJS
- TypeScript
- Express

## 프로젝트 구조

```
├── react/          # 프론트엔드 (React + Vite)
├── server/         # 백엔드 (NestJS)
└── README.md
```

## 개발 환경 설정

### 1. 의존성 설치

```bash
# 프론트엔드
cd react
npm install

# 백엔드
cd ../server
npm install
```

### 2. 환경변수 설정

```bash
# 백엔드 환경변수
cd server
cp .env.example .env
# .env 파일을 편집하여 실제 값으로 수정
```

### 3. 개발 서버 실행

```bash
# 프론트엔드 (포트 5173)
cd react
npm run dev

# 백엔드 (포트 3000)
cd server
npm run start:dev
```

## 스크립트

### Frontend (react/)
- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드된 앱 미리보기
- `npm run lint` - ESLint 실행

### Backend (server/)
- `npm run start:dev` - 개발 서버 실행 (watch 모드)
- `npm run start` - 프로덕션 서버 실행
- `npm run build` - TypeScript 컴파일
- `npm run test` - 테스트 실행
- `npm run lint` - ESLint 실행
