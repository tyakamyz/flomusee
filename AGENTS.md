# Repository Guidelines (GALLERYNOOK)

## 프로젝트 구조/기술 제약
- Next.js App Router + TypeScript + Tailwind CSS. 구조는 `src/app`, `src/components`, `src/data/site.ts`, `public/images` 유지.
- 라우트: `/`, `/about`, `/artists`, `/artists/[slug]`, `/subscribe`, `/subscribe/[slug]`, `/contact`, `/editions`, `/editions/[slug]`.
- 전역 스타일은 `src/app/globals.css`(모던 럭셔리 색상 토큰/배경/타이포/모션 규칙), 정적 자원은 `public/`에 둔다.
- 공통 컴포넌트는 `src/components/common`(Button, Section, SectionTitle, Card, Badge, Reveal, PlaceholderImage), 레이아웃은 `src/components/layout`(Header, Footer, MainLayout), 도메인/페이지별 컴포넌트는 `src/components/home`, `src/components/subscribe`, `src/components/contact` 등에서 재사용한다.
- 데이터는 `src/data/site.ts`에서 브랜드/홈/플랜/작가/월호 정보를 관리한다.

## 브랜드/카피 가이드 (갤러리눅, 작가의 향)
- 브랜드명: **갤러리눅(GALLERYNOOK)**. 핵심 한 줄: “집 안의 한 켠, 매달 한 점의 작품과 그 작품을 닮은 향”.
- 상품명: **작가의 향**. 작품이 1순위, 향은 작품의 감정을 확장하는 2순위 경험.
- 톤: 단정, 절제, 에디토리얼. 과장/유치/감탄사/이모지 금지. WCAG AA 대비 유지.
- 섹션 카피 구조: Headline 1문장 + Sub 1~2문장 + Bullets 3개.
- CTA 예시: “구독 플랜 보기”(`/subscribe`), “이번 월호 보기”(`/editions`).

## 내비게이션
- Header 메뉴: 작가의 향(/), 구독(/subscribe), 월호(/editions), 작가(/artists), 브랜드(/about), 문의(/contact).
- 초기: 투명/가벼운 블러 → 스크롤 시 surface + 헤어라인 보더 + 미세 그림자.
- 모바일 드로어는 포커스 트랩/ESC 닫기 유지. prefers-reduced-motion 존중.

## 색상/스타일 토큰 (Modern Luxury)
- bg `#FBF8F4`, surface `#FFFFFF`, surface-2 `#F4F0EA`.
- ink `#14120F`, muted `#6D6760`, border `#E7E1D8`.
- primary(브랜드 앵커) `#1F3A32`, accent-gold `#C6A56A`, spark `#2F5BFF`.
- 카드: 라운드 12~16px, 얇은 보더, 미세 섀도우. 버튼: 딥그린 솔리드 + 헤어라인 outline.
- 배경: 웜 샴페인 그라데이션 + 아주 약한 노이즈. 하프톤/스티커/굵은 윤곽선 금지.

## 랜딩(/) 섹션 구성 (상품 상세 중심)
- Hero: 키 비주얼, 헤드라인/서브, CTA 2개(/subscribe, /editions), 3개 불릿.
- Pairing: 작품 × 향(작품 우선). 노트/공간 제안 포함.
- What’s inside: 구성품(작품/향/노트/패키징).
- Installation: 이미지 그리드 + 캡션.
- How it works: 4-step.
- Plans teaser: 3 플랜 요약 + 상세 링크.
- Trust & Policy: 교체/파손/향 강도/스킵·해지/주소 변경.
- Artist Preview: 대표 작가 3인 + `/artists`.
- FAQ, Contact CTA.

## 플랜/월호/작가 페이지
- `/subscribe`: 플랜 비교 테이블/카드, CTA는 `/subscribe/[slug]`.
- `/subscribe/[slug]`: Sticky summary + 진행바, 갤러리, 포함 구성, 추천 대상, 배송·정책, FAQ, 관련 플랜.
- `/artists`: 작가 리스트 + 상세 링크. `/artists/[slug]`: 소개+갤러리+향 페어링 노트+관련 월호/플랜.
- `/editions`: 월호 리스트. `/editions/[slug]`: Cover → 작품 → 향 → 설치 가이드 → 구성품 → 관련 플랜 CTA.
- `/about`: 브랜드 철학/운영 원칙. `/contact`: 문의/콜라보 안내 + ContactForm + 채널 CTA.

## 데이터 모델 (src/data/site.ts)
- brand, hero, pairing, lookbookImages, includedItems, steps, trustPolicies, faqs.
- planDetails/plans: slug, price, cycle, highlights, included, who, delivery, policies, gallery, faq, heroImage.
- artistDetails/artists: slug, tagline, bio, gallery, pairingNote, relatedEditionSlugs, relatedPlanSlugs.
- editions: coverImage, artworkImage, scentImage, gallery, included, installationTips, relatedPlanSlugs.

## 애니메이션/접근성
- Reveal 컴포넌트 + `useInView`(IntersectionObserver)로 스크롤 등장. Scroll 이벤트 남발 금지.
- prefers-reduced-motion=reduce 시 모션 제거/즉시 표시. 대비(WCAG AA) 우선.
- 링크 underline/버튼 sheen은 150~250ms 내 미세하게.

## 빌드/명령
- `npm install`, `npm run dev`, `npm run lint`, `npm run build`.

## TODO/권장
- 실제 이미지/갤러리 자산 추가(`public/images/gn/...`).
- 플랜/월호/작가 데이터 확정, SEO/OG 메타 확장.
- 테스트 추가 시 RTL/Playwright 사용, 주요 렌더/접근성/인터랙션 검증.
