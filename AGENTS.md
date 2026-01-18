# Repository Guidelines

## 프로젝트 구조
- Next.js App Router는 `src/app`에 위치하며, 공통 레이아웃은 `layout.tsx`, 기본 랜딩은 `page.tsx`이다. 신규 라우트는 `src/app/<route>/page.tsx` 형태로 추가한다. 현재 준비된 페이지: `/`, `/about`, `/artists`, `/subscribe`, `/contact`.
- 전역 스타일은 `src/app/globals.css`, 정적 자원은 `public/`에 둔다. `globals.css`에서 배경 그라데이션·노이즈 오버레이, 타이포 스케일, 스크롤 행동(감소 모션 존중)을 정의한다.
- 재사용 컴포넌트는 `src/components/common`(Button, Section, SectionTitle, Card, Badge), `src/components/layout`(Header, Footer, MainLayout), `src/components/domain`(PlanCard, ArtistCard, FAQItem), `src/components/home`(Hero/Intro/Flow/Plan/Artist/FAQ/Story/Contact 섹션, `FlomuseeLandingPage`, `FlomuseePricing`), `src/components/contact`(ContactForm) 아래에 있다. 기본 데이터 샘플은 `src/data/site.ts`에 정의하며 heroHighlights, storyPoints, steps, plans, artists, faqs를 포함한다.
- 빌드·실행 설정은 `next.config.ts`, 타입 설정은 `tsconfig.json`, 린트 규칙은 `eslint.config.mjs`에 정의되어 있다. `.next/` 등 생성 산출물은 커밋하지 않는다.

## SPA 내비게이션
- 헤더는 앵커 내비게이션(About/Artists/Plans/FAQ/Contact)을 제공하며, IntersectionObserver로 활성 섹션을 표시한다. 스크롤 시 투명→서피스 배경으로 전환되고 모바일 드로어(포커스 트랩, ESC 닫기)를 포함한다.
- 부드러운 스크롤은 `prefers-reduced-motion`을 존중한다. 해시(#about 등)로 진입 시 자동 스크롤된다.
- `/about`, `/artists`, `/subscribe`, `/contact` 라우트는 클라이언트에서 `/#섹션`으로 리디렉션하는 얇은 페이지로 유지한다(SEO/공유 대비).
- 섹션 id: `about`, `artists`, `plans`, `faq`, `contact`(필수). 상단 CTA: “구독 플랜 보기” → #plans, “플로뮤제 전시 미리보기” → #artists.

## 랜딩 카피/컴포넌트 가이드
- 브랜드 카피는 한글 기준으로 고정한다(예: Hero 헤드라인 “집 안에 열리는 작은 미술관, 플로뮤제”). 줄바꿈 포함 카피는 `whitespace-pre-line` 등으로 처리한다.
- 단일 스크롤 랜딩 기본 구성: Hero → Service Intro(#about) → Flow → Plans(#plans) → Artists(#artists) → Story → FAQ(#faq) → Contact(#contact)/Footer. 컨테이너는 `max-w-6xl mx-auto px-4(5)/py-16` 기준을 유지한다.
- Hero 오른쪽 “구독 박스 카드”는 유리감·보더·통계를 포함한 카드로 구성한다. CTA는 #plans, #artists 앵커를 사용한다.
- `FlomuseeLandingPage`는 레거시 데모용으로 남겨 두었고, 실제 랜딩은 `src/app/page.tsx`에 섹션별 서버 컴포넌트로 배치한다. `FlomuseePricing` 대비 가이드는 참고용으로 유지한다.
- Primary 배경(#1f3a32) 위 텍스트는 `text-white`로 고정하고, Soft green 배경(#E7F0E8) 위에는 흰색/딥그린 대비를 사용한다. 버튼은 라운드-full, hover 시 subtle lift/색 변화가 적용된다.

## Tailwind 색상 토큰 제안
`theme.extend.colors` 예시:
```js
colors: {
  primary: "#234033",
  primaryDark: "#1B3227",
  primarySoft: "#D7E4DC",
  accentCoral: "#F28D8D",
  bgPage: "#F5EFE6",
  bgCard: "#FFFFFF",
  textMain: "#1F2933",
  textMuted: "#6B7280",
  textSubtle: "#9CA3AF",
  textOnPrimary: "#FFFFFF",
  textOnAccent: "#FFFFFF",
},
```

## 빌드·테스트·개발 명령
- `npm install`로 의존성을 동기화한다(`package-lock.json`을 사용하므로 npm 권장).
- `npm run dev`: 개발 서버(기본 `http://localhost:3000`)와 HMR 실행.
- `npm run lint`: ESLint(Next core-web-vitals, TypeScript 규칙) 실행. 경고/오류를 해결하거나 명확히 주석 처리 후 푸시한다.
- `npm run build`: 프로덕션 빌드 생성. `npm run start`: 빌드 결과를 로컬에서 제공.

## 코딩 스타일·네이밍
- TypeScript 기반 React 함수형 컴포넌트 사용. 기본은 서버 컴포넌트, 브라우저 API나 훅이 필요할 때만 클라이언트 컴포넌트로 전환한다. 상태가 필요한 폼 등은 `use client`로 명시한다.
- Next/ESLint 기본 포맷(2칸 들여쓰기, 세미콜론 사용, TSX 더블 쿼트)을 따른다. 불필요한 import·코드는 제거한다.
- 네이밍: 컴포넌트·훅은 PascalCase(`HeroSection`, `useAuthGuard`), 유틸은 camelCase, 라우트 폴더는 kebab-case(`src/app/user-settings/page.tsx`). 데이터 샘플은 `site.ts`처럼 의미 있는 파일명으로 분리한다.
- 스타일: Tailwind v4 토큰을 `@theme`로 정의해 `bg-primary`, `text-main`, `border-subtle` 등으로 사용한다. 공통 타이포 유틸 `.text-h1`~`.text-caption`은 `globals.css`에 정의되어 있으니 헤딩/본문에 우선 사용.

## 디자인 토큰 (요약)
- 색상(`globals.css` @theme): primary `#1F3A32`, primary-dark `#13261F`, primary-soft `#E7F0E8`, bg-base `#F8F3EC`, bg-surface `#FFFFFF`, bg-subtle `#F3EEE6`, text-main `#1F1A17`, text-muted `#5B554F`, text-disabled `#A6A09A`, border-subtle `#E5DED4`, border-strong `#D1C8BB`, accent-coral `#E69A8D`, accent-mustard `#D1A540`.
- 폰트: 헤딩 `var(--font-playfair)`(Playfair Display, next/font/google), 바디 `var(--font-body)`(Pretendard/SUIT/Geist). 전역 클래스 `.text-h1~4`, `.text-body`, `.text-caption` 활용.
- 컴포넌트 스타일: Button(Primary/Secondary/Outline/Ghost) 모두 브랜드 컬러 적용, Card는 라운드 2xl + 섀도우, Section variant(default/muted/dark)로 배경 톤 제어.

## 최근 스타일 정리
- 배경: 웜 아이보리→서브틀 그라데이션 + 얇은 노이즈 오버레이(`.noise-overlay`). Section variant(default/muted/dark)마다 미세하게 다른 그라데이션을 쓴다.
- 카드: 라운드 3xl, 소프트 섀도우, 얇은 보더, 일부 블러를 사용한다.
- 버튼: 기본 라운드-full, subtle lift/섀도우/포커스 링을 포함한다.
- 헤더: 투명/블러 시작 → 스크롤 시 서피스 배경. IntersectionObserver로 활성 메뉴 하이라이트.

## 랜딩 섹션 구성
- `HeroSection`: 브랜드 카피, CTA 2개(#plans/#artists), 오른쪽 구독 박스 카드(가격/배송/회수 정보).
- `ServiceIntroSection`(id=about): 4개 특징 카드(꽃, 오브제, 스타일링, 지속 가능성).
- `HowItWorksSection`: 4스텝 플로우 카드(플레이스홀더 이미지 `public/images/flow-1~4.svg` 사용).
- `PlanSection`(id=plans): `PlanCard` 3종(Standard/Premium/Gift, 추천 뱃지/노트 포함).
- `ArtistHighlightSection`(id=artists): 작가 카드 3종(이미지 플레이스홀더 `public/images/artist-*.svg`).
- `StorySection`: 브랜드 스토리·지속가능·콜렉터블 3컬럼 요약.
- `FAQSection`(id=faq): 아코디언 FAQ 카드.
- `ContactSection`(id=contact): ContactForm + 채널 CTA 카드.

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
- 연락 폼(`ContactForm`)은 `/api/contact`로 POST하여 서버가 필수 필드를 검증한다(`src/app/api/contact/route.ts`). 현재는 콘솔 로그만 남기므로 추후 이메일/CRM 연동 시 이 지점에 전송 로직을 추가하고 스팸 방어(레이트 리밋/캡차)를 적용한다.
- 환경 변수: 공개 링크는 `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_KAKAO_CHANNEL_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`를 사용하며 `.env.example` 참고. 추가 시 반드시 `NEXT_PUBLIC_` 접두사를 부여해 빌드 시 주입한다.

## TODO (권장 작업)
- `/api/contact`에 이메일 서비스(예: SendGrid/Resend) 혹은 CRM Webhook 연동 추가, 오류 로깅 및 레이트 리밋/캡차 적용.
- 문의 접수 건 저장소 연동(Prisma+DB 또는 외부 로깅 서비스) 및 관리용 뷰 설계.
- `src/data/site.ts`의 플랜/아티스트/특징 정보에 실제 이미지, 가격, 배송 주기 확정 값 반영. Hero/Plan 카드의 가격·배송 문구도 확정 데이터로 교체.
- SEO/OG 메타, 파비콘·소셜 이미지 추가 및 `metadata` 확장.
- 접근성 점검: 키보드 포커스 스타일, 폼 필드 aria 라벨, 대비 확인.
- 배포 환경 변수(Vercel) 설정: `NEXT_PUBLIC_*` 값 등록 및 비공개 키 필요 시 서버 전용 변수 추가.
- 이미지 에셋 정리: `public/images/...` 구조로 샘플 박스/작가/포스터 이미지 추가, 카드에 실제 썸네일 바인딩.
- 디자인 QA: 모바일/태블릿 레이아웃 검토, 섹션 간 여백/폰트 스케일 미세 조정.
- 추가 섹션: Blog/스토리, 콜라보/프레스 CTA, 고객 후기(있다면) 섹션을 설계 후 라우트 확장.
- 랜딩 페이지 적용: `/`에서 섹션을 렌더하는 SPA 구조 유지, 해시 앵커 동선을 점검한다.
- CTA 동선 확정: “구독 플랜 보기”(#plans), “플로뮤제 전시 미리보기”(#artists) 후속 경로 결정.
- Tailwind 색상 토큰 반영: `theme.extend.colors`에 primary/bg/text/accent 토큰을 추가하고, 기존 스타일(`globals.css` @theme)과 정리하여 중복/불일치 없는지 확인. 토큰 적용 후 `FlomuseePricing` 및 공통 컴포넌트에서 임시 hex 백업 클래스를 제거한다.

## Git 커밋 규칙 추가
- 커밋 요청 시 Google Java Style Guide의 커밋 컨벤션을 따르며, 기능 단위로 나눠 개별 커밋을 만든다.
- 커밋 메시지는 모두 한글로 작성한다.
