# GALLERYNOOK 웹 서비스 설계 문서

## 1. 목표 & 스코프
- 브랜드: **갤러리눅 (GALLERYNOOK)** — “집 안의 한 켠, 매달 한 점의 작품과 그 작품을 닮은 향”.
- 상품: **작가의 향** 정기 구독. 작품이 1순위, 향은 작품의 감정을 확장하는 경험.
- 방향: 멀티 페이지 + 상세페이지 중심. 랜딩은 상품 상세처럼 설계.
- 아트디렉션: **Modern Maison Perfume + Excited Editorial** (여백, 미세 하이라이트, 에디토리얼 캡션).

## 2. 기술 스택
- Next.js(App Router) + TypeScript + Tailwind CSS.
- 공통 컴포넌트: Button, Section, SectionTitle, Card, Badge, Reveal, PlaceholderImage.
- 레이아웃: Header(멀티 페이지 내비), Footer, MainLayout.
- 스타일: `globals.css`에 럭셔리 톤 색상 토큰/배경/타이포/모션 규칙 정의. prefers-reduced-motion 존중.

## 3. URL/라우트
- `/` : 작가의 향 상품 상세(이미지 중심) — Hero, Pairing, What’s inside, Installation, How it works, Plans Teaser, Trust/Policy, Artist Preview, FAQ, Contact.
- `/subscribe` : 플랜 비교/선택.
- `/subscribe/[slug]` : 플랜 상세(Sticky summary, 진행바, 갤러리, 포함 구성, 추천 대상, 배송·정책, FAQ, 관련 플랜).
- `/artists` : 작가 리스트.
- `/artists/[slug]` : 작가 상세(소개, 갤러리, 향 페어링 노트, 관련 월호/플랜).
- `/editions` : 월호 리스트.
- `/editions/[slug]` : 월호 상세(Cover → 작품 → 향 → 설치 가이드 → 구성품 → 관련 플랜).
- `/about` : 브랜드 철학/운영.
- `/contact` : 문의/콜라보 + ContactForm.

## 4. 데이터 모델 (`src/data/site.ts`)
- `brand`: name, tagline, shortIntro, links.
- `hero`: headline, subheadline, bullets, ctas, heroImages.
- `pairing`: artworkImage, scentNotes[], spaceTips[], bullets[].
- `lookbookImages`, `includedItems`, `steps`, `trustPolicies`, `faqs`.
- `planDetails`/`plans`: slug, price, cycle, highlights, included, who, delivery, policies, gallery, faq, heroImage.
- `artistDetails`/`artists`: slug, tagline, bio, gallery, pairingNote, relatedEditionSlugs, relatedPlanSlugs.
- `editions`: coverImage, artworkImage, scentImage, gallery, included, installationTips, relatedPlanSlugs.

## 5. 디자인/톤
- 색상: bg `#FBF8F4`, surface `#FFFFFF`, surface-2 `#F4F0EA`, ink `#14120F`, muted `#6D6760`, border `#E7E1D8`.
- 앵커 컬러: primary `#1F3A32`(브랜드 고정), accent-gold `#C6A56A`(마감), spark `#2F5BFF`(미세 포인트).
- 타이포: Display = Playfair Display, Body = Pretendard 우선(미지원 시 Noto Sans KR).
- 스타일: 헤어라인 보더, 소프트 섀도우(거의 안 보이게), 큰 이미지 + 짧은 캡션.
- 모션: IntersectionObserver 기반 Reveal(translate/opacity/blur, 0.6s), 이미지 미세 scale. prefers-reduced-motion 시 모션 제거.

## 6. 테스트/빌드
- `npm run dev`, `npm run lint`, 필요 시 `npm run build`.
- 접근성 확인: 키보드 포커스, 대비(WCAG AA), reduced-motion.

## 7. TODO
- 실제 이미지/갤러리 자산 추가(`public/images/gn/...`).
- 플랜/월호/작가 데이터 확정, SEO/OG 메타 확장.
- 주요 플로우 테스트(RTL/Playwright) 보강.
