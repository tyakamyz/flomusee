# Repository Guidelines

## 프로젝트 구조
- Next.js App Router는 `src/app`에 위치하며, 공통 레이아웃은 `layout.tsx`, 기본 랜딩은 `page.tsx`이다. 신규 라우트는 `src/app/<route>/page.tsx` 형태로 추가하고, 공유 UI는 `src/app/components/` 아래에 둔다.
- 전역 스타일은 `src/app/globals.css`, 정적 자원은 `public/`에 둔다.
- 빌드·실행 설정은 `next.config.ts`, 타입 설정은 `tsconfig.json`, 린트 규칙은 `eslint.config.mjs`에 정의되어 있다. `.next/` 등 생성 산출물은 커밋하지 않는다.

## 빌드·테스트·개발 명령
- `npm install`로 의존성을 동기화한다(`package-lock.json`을 사용하므로 npm 권장).
- `npm run dev`: 개발 서버(기본 `http://localhost:3000`)와 HMR 실행.
- `npm run lint`: ESLint(Next core-web-vitals, TypeScript 규칙) 실행. 경고/오류를 해결하거나 명확히 주석 처리 후 푸시한다.
- `npm run build`: 프로덕션 빌드 생성. `npm run start`: 빌드 결과를 로컬에서 제공.

## 코딩 스타일·네이밍
- TypeScript 기반 React 함수형 컴포넌트 사용. 기본은 서버 컴포넌트, 브라우저 API나 훅이 필요할 때만 클라이언트 컴포넌트로 전환한다.
- Next/ESLint 기본 포맷(2칸 들여쓰기, 세미콜론 사용, TSX 더블 쿼트)을 따른다. 불필요한 import·코드는 제거한다.
- 네이밍: 컴포넌트·훅은 PascalCase(`HeaderBar`, `useAuthGuard`), 유틸은 camelCase, 라우트 폴더는 kebab-case(`src/app/user-settings/page.tsx`).
- 스타일: Tailwind 유틸 클래스를 인라인으로 사용하고 공통 커스텀은 `globals.css`에 둔다. 다크/라이트 클래스 적용을 일관되게 유지한다.

## 테스트 가이드
- 현재 공식 테스트 스위트는 없다. 추가 시 컴포넌트는 React Testing Library, 핵심 플로우는 Playwright를 권장한다.
- 테스트는 코드 인근 `*.test.tsx` 또는 `__tests__/`에 배치한다. 렌더링, 접근성 상태, 주요 사용자 인터랙션을 검증하고 필요한 목데이터를 명시한다.

## 커밋·PR 가이드
- 커밋 메시지는 짧은 명령형으로(`feat: add hero layout`, `chore: update lint config`). 단일 목적에 집중한다.
- PR 전 `npm run lint` 실행, 배포 영향이 있으면 `npm run build`도 실행한다.
- PR에는 요약, 실행한 테스트/명령, 연관 이슈, UI 변경 시 스크린샷을 포함한다. 새 환경 변수나 마이그레이션이 있으면 명확히 언급한다.

## 보안·설정 팁
- 비밀 값은 추적되지 않는 `.env.local`에 보관한다. 새 키가 필요하면 목적, 타입, 예시 값을 PR 설명에 적는다.
- 외부 스크립트나 서드파티 엔드포인트 추가 시 개인정보·보안 요구사항을 확인한다. 의존성 추가는 필요 최소로 하고 근거를 남긴다.
