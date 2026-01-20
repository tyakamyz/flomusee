# Repository Guidelines (GALLERYNOOK)

## 프로젝트 구조/기술 제약
- Next.js App Router + TypeScript + Tailwind CSS. 구조는 `src/app`, `src/components`, `src/data/site.ts`, `public/images` 유지.
- 라우트: `/`, `/about`, `/artists`, `/artists/[slug]`, `/subscribe`, `/subscribe/[slug]`, `/contact`, `/editions`, `/editions/[slug]`.
- 전역 스타일은 `src/app/globals.css`(갤러리눅 색상 토큰/배경/타이포/모션 규칙), 정적 자원은 `public/`에 둔다.
- 공통 컴포넌트는 `src/components/common`(Button, Section, SectionTitle, Card, Badge, Reveal, PlaceholderImage), 레이아웃은 `src/components/layout`(Header, Footer, MainLayout), 도메인/페이지별 컴포넌트는 `src/components/home`, `src/components/subscribe`, `src/components/contact` 등에서 재사용한다.
- 데이터는 `src/data/site.ts`에서 브랜드/홈/플랜/작가/월호 정보를 관리한다.

## 브랜드/카피 가이드 (갤러리눅, 작가의 향)
- 브랜드명: **갤러리눅(GALLERYNOOK)**. 핵심 한 줄: “집 안의 한 켠, 매달 한 점의 작품과 그 작품을 닮은 향”.
- 상품명: **작가의 향**. 작품이 1순위, 향은 작품의 감정을 확장하는 2순위 경험.
- 톤: 전시 도록처럼 정제된 문장, 과장 금지, 조용하지만 확신 있는 문체. WCAG AA 대비 유지.
- CTA 예시: “구독 플랜 보기”(`/subscribe`), “이번 달 월호 보기”(`/editions`).

## 내비게이션
- Header 메뉴: 작가의 향(/), 구독(/subscribe), 월호(/editions), 작가(/artists), 브랜드(/about), 문의(/contact).
- 모바일 드로어는 포커스 트랩/ESC 닫기 유지. prefers-reduced-motion 존중.

## 색상/스타일 토큰
- bg-base `#FAF7F2`, bg-surface `#FFFFFF`, text-main `#12110F`, text-muted `#5F5A55`, border-subtle `#E7DED3`.
- primary(Nook Green) `#1F3A32`, primary-dark `#13261F`, primary-soft `#E7F0E8`.
- accent-amber `#C79A4B`, accent-rose `#D48C8C`(제한적).
- 버튼: 라운드-full, 대비 준수, hover lift 미세. 카드: 라운드 3xl, 얇은 보더, 소프트 섀도우.
- 배경: 웜 페이퍼 그라데이션 + 노이즈(`.noise-overlay`). 모션: Reveal 기본(translate/opacity/blur), prefers-reduced-motion=reduce 시 즉시 표시.

## 랜딩(/) 섹션 구성 (상품 상세 중심)
- Hero: 키 비주얼(작품+향), 헤드라인/서브, CTA 2개(/subscribe, /editions), 스펙 카드(월 1회, 작품+향, 노트, 정책).
- The Pairing: 작품 이미지 + 향 페어링 노트 + 공간 제안.
- Lookbook/Installation: 이미지 그리드 + 캡션(공간/조명/거리/시간대).
- What’s in the Nook: 구성품 상세(작품/향/노트/패키징).
- How it works: 월 작가 선정 → 향 페어링 → 발송/가이드 → 다음 달 한 켠.
- Plans Teaser: Standard/Premium/Collector 요약 + 상세 링크.
- Trust & Policy: 교체/파손/향 강도/스킵·해지/주소 변경 요약.
- Artist Preview: 대표 작가 3인 + `/artists`.
- FAQ, Contact CTA.

## 플랜/월호/작가 페이지
- `/subscribe`: 플랜 비교 테이블/카드, CTA는 `/subscribe/[slug]`.
- `/subscribe/[slug]`: Sticky hero, 진행바, 갤러리, 포함 구성, 추천 대상, 배송·정책, FAQ, 관련 플랜.
- `/artists`: 작가 리스트 + 상세 링크. `/artists/[slug]`: 소개+갤러리+향 페어링 노트+관련 월호/플랜.
- `/editions`: 월호 리스트. `/editions/[slug]`: Issue Hero, 작품/향/설치/구성/갤러리, 관련 플랜 CTA.
- `/about`: 브랜드 철학/운영 원칙. `/contact`: 문의/콜라보 안내 + ContactForm + 채널 CTA.

## 데이터 모델 (src/data/site.ts)
- brand, hero, pairing, lookbookImages, includedItems, steps, trustPolicies, faqs.
- planDetails/plans: slug, price, cycle, highlights, included, who, delivery, policies, gallery, faq.
- artistDetails/artists: slug, tagline, bio, gallery, pairingNote, relatedEditionSlugs.
- editions: 월호 메타, story, gallery, included, installationTips, relatedPlanSlugs.

## 애니메이션/접근성
- Reveal 컴포넌트 + `useInView`(IntersectionObserver)로 스크롤 등장. Scroll 이벤트 남발 금지.
- prefers-reduced-motion=reduce 시 모션 제거/즉시 표시. 대비(WCAG AA) 우선.

## 빌드/명령
- `npm install`, `npm run dev`, `npm run lint`, `npm run build`.

## TODO/권장
- 실제 이미지/갤러리 추가(`public/images/gn/...`), plan/edition/artist 데이터 확정.
- SEO/OG 확장, favicon/OG 이미지 적용.
- 테스트 추가 시 RTL/Playwright 사용, 주요 렌더/접근성/인터랙션 검증.
