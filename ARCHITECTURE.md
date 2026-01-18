# FLOMUSÉE 웹 서비스 설계 문서

## 1. 목표 & 스코프

### 1.1 서비스 개요
- **서비스명**: FLOMUSÉE (플로뮤제)
- **핵심 컨셉**
  - 꽃(Floral) + 뮤지엄(Musée)의 조합  
  - 플라워 정기구독 + 예술 작품/작가 콜라보
  - 화병 회수/세척까지 포함된 “꽃+아트 구독형 서비스”
- **1단계 목표**
  - FLOMUSÉE의 브랜드 스토리와 세계관을 잘 보여주는 **가벼운 웹사이트**
  - 서비스 구조와 기술 스택을 검증하는 **MVP(최초 구현)** 역할
- **장기 목표**
  - 자체 사이트에서 **정기결제 + 구독 관리(마이페이지)** 제공
  - Spring Boot 백엔드 + PG 연동으로 **독립적인 구독 플랫폼**으로 성장

---

## 2. 단계별 아키텍처

### 2.1 1단계: 웹 페이지 중심 MVP

- **프론트엔드**
  - Next.js (App Router) + TypeScript + Tailwind CSS
  - 대부분의 페이지는 정적/SSG 또는 SSR 조합으로 구성
- **백엔드**
  - 별도 전용 서버 없이 시작
  - 필요 시:
    - 간단한 폼 제출 처리(문의, 콜라보 제안 등)를 위한 서버리스 함수(API Route 등)
- **핵심 기능**
  - 브랜드/서비스 소개
  - 구독 플랜 정보 제공
  - 작가/작품 소개
  - 블로그/스토리(선택적)

### 2.2 2단계: 정기구독 + 결제 + 구독 관리

- **백엔드**
  - Spring Boot 기반 API 서버 (예: `https://api.flomusee.co.kr`)
  - 주요 기능:
    - 회원/로그인
    - 구독 플랜 및 구독 상태 관리
    - 정기결제(PG 빌링키) 연동
    - 결제 이력, 배송 스케줄 관리
- **프론트엔드**
  - 기존 Next.js 프로젝트에 다음 페이지/기능 추가:
    - `/login`, `/signup`
    - `/mypage`, `/subscriptions`, `/subscriptions/[id]`, `/checkout`
  - API 서버와 통신하여 데이터 조회/변경
- **목표**
  - FLOMUSÉE 자체 도메인에서 가입 → 결제 → 구독 관리까지 모두 처리

---

## 3. 도메인 & URL 전략

### 3.1 도메인

- 예시 도메인: `https://flomusee.co.kr`
- 모든 외부 채널(인스타그램, 블로그 등)에서 이 도메인으로 유입되도록 설계

### 3.2 주요 URL 설계 (1단계 기준)

- `/`  
  - 메인 SPA 랜딩 페이지  
  - 히어로 섹션 + 서비스 요약 + 플로우 + 플랜 + 아티스트 + 스토리 + FAQ + Contact
- `/about`  
  - 현재는 클라이언트에서 `/#about`으로 리디렉션하여 단일 페이지 경험을 유지(SEO/공유 대비)
- `/artists`  
  - 현재는 `/#artists`로 리디렉션(딥링크 유지)
- `/subscribe`  
  - 현재는 `/#plans`로 리디렉션(딥링크 유지)
- `/contact` (옵션)  
  - 현재는 `/#contact`로 리디렉션(딥링크 유지)
- `/blog` (향후 추가)  
  - 브랜드 스토리, 작가 인터뷰, 에세이 리스트
- `/blog/[slug]`  
  - 개별 글 페이지

### 3.3 2단계에서 추가될 URL

- `/login`, `/signup`
- `/mypage`
- `/subscriptions`, `/subscriptions/[id]`
- `/checkout`

---

## 4. 프론트엔드 스택 & 구조

### 4.1 기술 스택

- **언어**: TypeScript
- **프레임워크**: Next.js (App Router 기반)
- **UI 라이브러리**: React
- **스타일링**: Tailwind CSS
- **빌드/배포**: Vercel
- **환경 변수 예시**
  - `NEXT_PUBLIC_INSTAGRAM_URL`
  - `NEXT_PUBLIC_KAKAO_CHANNEL_URL`
  - (2단계 이후) `NEXT_PUBLIC_API_BASE_URL`

### 4.2 디렉토리 구조 (초안)

```txt
/ (repo root)
  /src
    /app
      layout.tsx               # 공통 레이아웃 (Header, Footer, meta)
      page.tsx                 # 메인 랜딩 (/)
      /about
        page.tsx
      /artists
        page.tsx
      /subscribe
        page.tsx
      /contact
        page.tsx
      /blog
        page.tsx               # 블로그 리스트
        /[slug]
          page.tsx             # 개별 포스트
    /components
      /layout
        Header.tsx
        Footer.tsx
        MainLayout.tsx
      /home
        HeroSection.tsx
        HowItWorksSection.tsx
        PlanSection.tsx
        ArtistHighlightSection.tsx
        FAQSection.tsx
      /artists
        ArtistCard.tsx
      /blog
        PostCard.tsx
        PostContent.tsx
      /common
        Button.tsx
        Section.tsx
        SectionTitle.tsx
        Card.tsx
        Badge.tsx
    /styles
      globals.css
      tailwind.config.ts
/content                        # 향후 MDX 기반 블로그
  /posts
    YYYY-MM-DD-slug.mdx
```

---

## 5. 페이지별 정보 구조

### 5.1 `/` (메인 랜딩)

- **HeroSection**
  - 메인 카피: FLOMUSÉE 정체성을 한 줄로 표현(“집 안에 열리는 작은 미술관, 플로뮤제”)
  - 서브 카피: “꽃과 예술이 만나는 구독 뮤지엄” 등
  - 주요 CTA 버튼: “구독 플랜 보기”(#plans), “플로뮤제 전시 미리보기”(#artists)
  - 우측 박스 카드: 월 구독 가격/배송/회수 정보를 담은 글래스 카드 + 플레이스홀더 이미지(`public/images/hero-ambient.svg`)
- **HowItWorksSection**
  - 서비스 이용 흐름 (예시 4단계):
    1. 테마/작가 큐레이션
    2. 플라워 & 아트 요소 구성
    3. 배송 및 화병 회수/세척
    4. 다음 작품/꽃으로 교체
- **PlanSection**
  - 대표 구독 플랜 카드 (예: Standard / Premium / Gift)
  - 각 카드에 주요 정보:
    - 가격
    - 배송 주기
    - 포함 요소
    - 추천 대상/노트
- **ArtistHighlightSection**
  - 대표 작가 1~3명 소개
  - 썸네일 이미지(placeholder `public/images/artist-*.svg`), 한 줄 설명, `/artists` 링크
- **StorySection**
  - 브랜드 스토리/지속가능성/컬렉터블 가치를 3컬럼으로 요약
- **FAQSection**
  - 자주 묻는 질문 요약(아코디언)
- **ContactSection**
  - 문의/콜라보 CTA 카드 + `ContactForm`(문의 주제·내용 제출)
- **FAQSection**
  - 자주 묻는 질문 요약:
    - 배송 요일/주기
    - 시든 꽃 처리 방식
    - 화병 파손/분실 정책
    - 구독 변경/해지 방법

### 5.2 `/subscribe`

- 플랜별 상세 정보:
  - 플랜 이름, 가격, 배송 주기, 구성 요소 리스트
  - 각 플랜의 타깃 고객(예: 입문용, 선물용, 컬렉터용 등)
- FAQ 확장 버전:
  - 결제, 배송, 서비스 정책에 대한 상세 설명
- 차후 결제 연동 시:
  - 선택한 플랜 정보 → `/checkout`으로 넘길 수 있는 구조 고려

### 5.3 `/artists`

- 작가 리스트:
  - `ArtistCard` 반복 렌더링
- 각 카드 정보:
  - 작가 이름
  - 포트폴리오 대표 이미지 혹은 아트워크 모티브
  - 한 줄 소개
  - (추후) `/artists/[id]` 상세 페이지로 확장 가능성을 고려한 구조

### 5.4 `/blog` 및 `/blog/[slug]`

- `/blog`
  - MDX 포스트 메타데이터 목록 렌더링 (제목, 요약, 태그, 작성일 등)
- `/blog/[slug]`
  - MDX 본문 렌더링
  - 공통 `PostContent` 컴포넌트로 스타일 일관성 유지

---

## 6. 재사용 컴포넌트 설계

### 6.1 레이아웃 관련 컴포넌트

- `MainLayout`
  - 페이지 전체 공통 래퍼
  - 예: `max-w-7xl`, `mx-auto`, `px-4`, `py-8`
- `Header`
  - 로고, 메인 내비게이션(`/`, `/about`, `/artists`, `/subscribe`, `/blog`)
- `Footer`
  - 저작권, SNS 링크, 간단한 소개 문구

### 6.2 공통 UI 컴포넌트

- `Button`
  - Props:
    - `variant`: `"primary" | "secondary" | "outline" | "ghost"`
    - `as`: `"button" | "a"`
  - 주요 CTA 버튼/링크에 공통 사용
- `Section`
  - 섹션 간 레이아웃 통일
  - Props:
    - `variant`: `"default" | "muted" | "dark"`
- `SectionTitle`
  - 섹션 제목 + 서브텍스트 컴포넌트
  - Props:
    - `title`, `subtitle`, `align` (`"left" | "center"`)
- `Card`
  - 플랜/작가/포스트 등 카드형 UI 공통 스타일
- `Badge`
  - NEW / LIMITED / 작가명 / 태그 등 라벨 표시용

### 6.3 도메인 특화 컴포넌트

- `PlanCard`
  - 구독 플랜 카드
  - Props 예:
    - `name`, `price`, `cycle`, `features: string[]`, `highlight?: boolean`
- `ArtistCard`
  - 작가 리스트용 카드
  - Props 예:
    - `name`, `tagline`, `imageUrl`, `link?`
- `FAQItem`
  - Q/A 아코디언
  - Props:
    - `question`, `answer`

---

## 7. 블로그/콘텐츠(MDX) 설계

### 7.1 파일 구조

```txt
/content
  /posts
    2025-01-01-brand-story.mdx
    2025-01-15-artist-interview-aaa.mdx
    2025-02-02-vase-care-tips.mdx
```

### 7.2 MDX Frontmatter 예시

```md
---
title: "FLOMUSÉE를 시작하게 된 이유"
slug: "brand-story-origin"
date: "2025-01-01"
tags: ["브랜드 스토리", "철학"]
author: "시현"
summary: "FLOMUSÉE라는 이름에 담긴 의미와, 꽃과 예술을 엮게 된 계기."
coverImage: "/images/blog/brand-story-001.jpg"
---
본문...
```

### 7.3 Next.js 연동

- `/blog/page.tsx`
  - `getAllPosts()`로 MDX 메타데이터 로딩 후 리스트 렌더링
- `/blog/[slug]/page.tsx`
  - `getPostBySlug(slug)`로 MDX 파싱 후 렌더링
  - `PostContent` 컴포넌트로 일관된 스타일 적용

---

## 8. 배포 & 환경 구성

### 8.1 배포

- GitHub 레포 예시 이름: `flomusee`
- Vercel 프로젝트와 GitHub 레포 연동:
  - `main` 브랜치 push → 자동 빌드/배포
- 이후 커스텀 도메인(`flomusee.co.kr`)을 Vercel에 연결

### 8.2 환경 변수

- `.env.local` 예시 (로컬 개발용)

```env
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/...
NEXT_PUBLIC_KAKAO_CHANNEL_URL=https://pf.kakao.com/...
NEXT_PUBLIC_API_BASE_URL=https://api.flomusee.co.kr   # 2단계 이후
```

> `.env.local` 등 환경변수 파일은 Git 커밋 대상에서 제외 (`.gitignore`) 처리.

---

## 9. 초기 개발 TODO (Day 1 기준)

1. Node.js / 패키지 매니저(npm 또는 pnpm) 설치 확인
2. `npx create-next-app@latest . --ts` 옵션으로 FLOMUSÉE 웹 프로젝트 생성  
   - ESLint: Yes  
   - React Compiler: No  
   - Tailwind CSS: Yes  
   - `src/` directory: Yes  
   - App Router: Yes  
   - Import alias 커스터마이징: No (`@/*` 기본 사용)
3. Tailwind CSS 세팅 (공식 가이드 적용 – `globals.css`, `tailwind.config.ts` 설정)
4. `src/app/layout.tsx`에 `Header`, `Footer`, `MainLayout` 초안 구성
5. 공통 컴포넌트 생성:
   - `components/common/Button.tsx`
   - `components/common/Section.tsx`
   - `components/common/SectionTitle.tsx`
   - `components/common/Card.tsx`
6. 메인 랜딩(`/`)에 기본 섹션 골격 배치:
   - `HeroSection`, `HowItWorksSection`, `PlanSection`, `ArtistHighlightSection`, `FAQSection`
7. `/subscribe` 페이지에:
   - 플랜 설명 텍스트
8. GitHub 레포(`flomusee`)와 연동, `main` 브랜치 첫 push
9. Vercel에 레포 연동, 기본 도메인 배포 확인
10. 커스텀 도메인(`flomusee.co.kr` 등) 연결 및 기본 SEO/meta 설정
