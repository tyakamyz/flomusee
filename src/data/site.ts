import type { Artist } from "@/components/domain/ArtistCard";
import type { FAQ } from "@/components/domain/FAQItem";
import type { Plan } from "@/components/domain/PlanCard";

export type Brand = {
  name: string;
  tagline: string;
  shortIntro: string;
  links: {
    instagram: string;
    kakao: string;
    contact: string;
  };
};

export type PlanDetail = Plan & {
  slug: string;
  priceNote?: string;
  highlights: string[];
  included: string[];
  gallery: string[];
  who: string[];
  delivery: string[];
  policies: { title: string; description: string }[];
  relatedPlans: string[];
  faq: FAQ[];
};

export type ArtistDetail = Artist & {
  slug: string;
  bio: string;
  gallery: string[];
  pairingNote: string;
  relatedEditionSlugs: string[];
};

export type Edition = {
  slug: string;
  monthLabel: string;
  artistSlug: string;
  title: string;
  scentTitle: string;
  story: string;
  gallery: string[];
  included: string[];
  installationTips: string[];
  relatedPlanSlugs: string[];
};

export const brand: Brand = {
  name: "GALLERYNOOK",
  tagline: "집 안의 한 켠, 매달 한 점의 작품과 그 작품을 닮은 향",
  shortIntro: "작품이 머무는 자리와 향이 남기는 여운을 함께 큐레이션합니다.",
  links: {
    instagram: "https://www.instagram.com",
    kakao: "https://pf.kakao.com",
    contact: "/contact",
  },
};

export const hero = {
  headline: "집 안의 한 켠, 한 점의 작품과 그 작품을 닮은 향",
  subheadline: "매월 한 작가의 작품과 그 작품에 어울리는 디퓨저, 그리고 큐레이션 노트가 함께 도착합니다.",
  ctas: [
    { label: "구독 플랜 보기", href: "/subscribe" },
    { label: "이번 달 월호 보기", href: "/editions" },
  ],
  specCard: [
    "월 1회 발송 · 작품+향 페어링",
    "큐레이션 노트 · 설치 가이드 포함",
    "향 용량 100ml (placeholder)",
    "교체/스킵/해지 정책 투명 안내",
  ],
};

export const pairing = {
  title: "작품을 먼저 고르고, 향은 여운을 확장합니다",
  description: "작품의 감정과 질감을 공간으로 이어주는 향 페어링. 시각과 후각이 한 장면에서 만납니다.",
  artworkImage: "/images/placeholders/lookbook.svg",
  scentNotes: ["햇살을 머금은 린넨", "나무 결의 여운", "아주 낮은 채도의 플로럴"],
  spaceTips: ["거실 한 켠, 액자 아래", "창가 방향으로 1m 거리", "아침/저녁 30분 환기 후 향 퍼짐"],
};

export const lookbookImages = [
  { src: "/images/placeholders/lookbook.svg", caption: "낮은 채도, 자연광, 벽면 여백을 살린 설치" },
  { src: "/images/placeholders/lookbook.svg", caption: "작품 아래에 디퓨저를 배치해 향의 여운을 확장" },
  { src: "/images/placeholders/lookbook.svg", caption: "테이블 위 작은 전시: 프린트 + 향 + 노트" },
  { src: "/images/placeholders/lookbook.svg", caption: "밤 시간대, 조명을 낮춰 작품과 향을 즐기는 순간" },
] as const;

export const includedItems = [
  { title: "작품 프린트/카드", description: "월 작가의 작품을 담은 프린트 또는 카드" },
  { title: "향(디퓨저)", description: "작품의 질감과 감정을 이어주는 향 페어링" },
  { title: "큐레이션 노트", description: "작품/향 스토리와 공간 설치 가이드" },
  { title: "패키징", description: "갤러리 도록 같은 패키징과 캡션 카드" },
] as const;

export const steps = [
  { title: "월 작가 선정", description: "한 명의 작가와 작품을 선정해 테마를 만듭니다." },
  { title: "향 페어링 큐레이션", description: "작품의 여운을 공간에 남길 향을 함께 고릅니다." },
  { title: "발송 & 설치 가이드", description: "작품과 향, 노트, 캡션을 패키징해 발송합니다." },
  { title: "다음 달 새로운 한 켠", description: "회수/관리 안내와 함께 다음 월호를 예고합니다." },
] as const;

export const trustPolicies = [
  { title: "교체/보상", description: "파손·누수·향 문제 발생 시 확인 후 교체/보상합니다." },
  { title: "향 강도 가이드", description: "향 강도/알러지 안내를 동봉하고 공간별 사용량을 제안합니다." },
  { title: "스킵/해지", description: "배송 5일 전까지 스킵/해지를 접수하면 다음 회차부터 반영합니다." },
  { title: "주소/시간 변경", description: "배송 5일 전까지 주소/시간 변경을 지원합니다." },
] as const;

export const faqs: FAQ[] = [
  { question: "배송 일정은 어떻게 되나요?", answer: "매달 첫째 주 수요일 발송을 기본으로 하며, 전날 알림을 드립니다." },
  { question: "향이 너무 강하면 어떻게 하나요?", answer: "향 강도 가이드가 동봉되며, 필요 시 리드 개수/공간 위치로 조절할 수 있습니다." },
  { question: "파손/누수 시 보상은?", answer: "수령 후 48시간 내 사진과 함께 연락 주시면 확인 후 교체/보상을 진행합니다." },
  { question: "스킵/해지는 언제까지 가능한가요?", answer: "배송 5일 전까지 요청 시 다음 회차부터 스킵/해지가 반영됩니다." },
] as const;

export const planDetails: PlanDetail[] = [
  {
    slug: "standard",
    name: "Standard",
    price: "월 42,000원",
    priceNote: "1회 배송 · 부가세 포함 (placeholder)",
    cycle: "월 1회",
    tagline: "작품+향을 가볍게 시작하는 입문 구독",
    features: ["작품 프린트/카드", "향 50ml", "큐레이션 노트"],
    highlights: ["컴팩트 구성", "작가 노트 포함", "월별 테마 프린트"],
    included: ["프린트/카드 1종", "향 50ml", "설치 가이드+노트"],
    gallery: ["/images/placeholders/plan-gallery.svg", "/images/placeholders/plan-gallery.svg"],
    who: ["첫 구독 입문자", "작은 공간/데스크", "향 강도 조절이 필요한 분"],
    delivery: ["월 1회 배송", "배송 전 알림", "스킵/해지 5일 전까지"],
    policies: [
      { title: "파손/누수", description: "48시간 내 접수 시 보상/교체" },
      { title: "향 강도", description: "리드 개수·공간 배치 가이드 제공" },
      { title: "스킵/해지", description: "배송 5일 전까지 접수" },
    ],
    relatedPlans: ["premium", "collector"],
    faq: [
      { question: "향 용량은 어느 정도인가요?", answer: "50ml 소용량으로 책상/협탁 공간에 적합합니다." },
      { question: "작품은 어떤 형태로 오나요?", answer: "프린트 또는 아트 카드 형태로 월별 테마에 맞춰 전달됩니다." },
    ],
    tag: "입문",
  },
  {
    slug: "premium",
    name: "Premium",
    price: "월 72,000원",
    priceNote: "1회 배송 · 부가세 포함 (placeholder)",
    cycle: "월 1회",
    tagline: "공간의 중심을 만드는 시그니처 페어링",
    features: ["작품 프린트/포스터", "향 100ml", "큐레이션 노트 + 설치 카드"],
    highlights: ["가장 인기", "향/작품 볼륨 업", "공간 연출 가이드"],
    included: ["포스터/프린트 1종", "향 100ml", "설치 가이드+노트", "캡션 카드"],
    gallery: [
      "/images/placeholders/plan-gallery.svg",
      "/images/placeholders/plan-gallery.svg",
      "/images/placeholders/plan-gallery.svg",
    ],
    who: ["거실/다이닝 중앙 포인트", "향과 작품을 함께 연출하고 싶은 분", "월별 테마를 수집하고 싶은 분"],
    delivery: ["월 1회 배송", "배송/회수 알림", "향 관리/환기 가이드"],
    policies: [
      { title: "파손/누수", description: "48시간 내 접수 시 보상/교체" },
      { title: "향 강도", description: "공간별 리드/거리 제안" },
      { title: "스킵/해지", description: "배송 5일 전까지 접수" },
    ],
    relatedPlans: ["standard", "collector"],
    faq: [
      { question: "향은 어떤 노트인가요?", answer: "월 작가 작품에 맞춘 페어링 향을 소개 카드와 함께 제공합니다." },
      { question: "포스터 사이즈는?", answer: "A3 또는 유사 사이즈(placeholder), 액자 권장 사이즈 안내 포함." },
    ],
    highlight: true,
    tag: "추천",
    note: "작품과 향 모두 충분한 볼륨으로 즐기는 구독",
  },
  {
    slug: "collector",
    name: "Collector",
    price: "월 96,000원",
    priceNote: "1회 배송 · 부가세 포함 (placeholder)",
    cycle: "월 1회",
    tagline: "월호 컬렉션과 설치 경험을 모두 담은 플랜",
    features: ["작품 포스터+소품", "향 100ml + 여분 스틱", "큐레이션 노트·설치 가이드"],
    highlights: ["월호 컬렉터를 위한 구성", "작품+소품 동봉", "향 리필/스틱 여유분"],
    included: ["포스터/소품", "향 100ml+스틱", "큐레이션 노트/가이드", "캡션/에디션 카드"],
    gallery: ["/images/placeholders/plan-gallery.svg", "/images/placeholders/plan-gallery.svg"],
    who: ["작품+향을 수집하려는 분", "선물/이사/신혼 공간 연출", "향을 넉넉히 쓰고 싶은 분"],
    delivery: ["월 1회 배송", "배송 전 알림", "회수/보상 정책 안내"],
    policies: [
      { title: "파손/누수", description: "48시간 내 접수 시 보상/교체" },
      { title: "향 리필", description: "여분 스틱 포함, 리필 옵션은 향후 안내" },
      { title: "스킵/해지", description: "배송 5일 전까지 접수" },
    ],
    relatedPlans: ["premium", "standard"],
    faq: [
      { question: "리필이나 여분이 포함되나요?", answer: "스틱 여분이 포함되며 리필 옵션은 추후 안내 예정입니다." },
      { question: "소품은 어떤가요?", answer: "작품 테마와 어울리는 소품/액세서리가 월별로 달라집니다." },
    ],
    tag: "컬렉터",
    note: "작품, 향, 설치 경험을 모두 담은 풀 패키지",
  },
];

export const plans: Plan[] = planDetails.map(
  ({ slug, name, price, cycle, features, highlight, tag, tagline, priceNote, note }) => ({
    slug,
    name,
    price,
    cycle,
    features,
    highlight,
    tag,
    tagline,
    priceNote,
    note,
  }),
);

export const artists: Artist[] = [
  { name: "이지안", tagline: "빛과 여백을 겹치는 페인팅", theme: "Painting", imageUrl: "/images/placeholders/artist.svg" },
  { name: "하진", tagline: "종이 조형과 잉크의 질감", theme: "Paper", imageUrl: "/images/placeholders/artist.svg" },
  { name: "서윤아", tagline: "밤의 정원을 기록하는 사진", theme: "Photo", imageUrl: "/images/placeholders/artist.svg" },
] as const;

export const artistDetails: ArtistDetail[] = [
  {
    slug: "lee-jian",
    name: "이지안",
    tagline: "빛과 여백을 겹치는 페인팅",
    theme: "Painting",
    bio: "잉크와 파스텔 톤으로 빛이 머무는 여백을 그립니다. 향은 부드러운 앰버와 우디 노트로 페어링했습니다.",
    gallery: ["/images/placeholders/artist.svg", "/images/placeholders/artist.svg", "/images/placeholders/artist.svg"],
    imageUrl: "/images/placeholders/artist.svg",
    pairingNote: "햇살이 스며든 오후, 따뜻한 나무 결과 드라이 플로럴이 섞이는 순간",
    relatedEditionSlugs: ["2026-01"],
  },
  {
    slug: "ha-jin",
    name: "하진",
    tagline: "종이 조형과 잉크의 질감",
    theme: "Paper",
    bio: "손으로 접은 종이에 잉크를 번지게 해 시간의 흔적을 남깁니다. 향은 차분한 머스크와 종이향을 닮은 노트.",
    gallery: ["/images/placeholders/artist.svg", "/images/placeholders/artist.svg", "/images/placeholders/artist.svg"],
    imageUrl: "/images/placeholders/artist.svg",
    pairingNote: "책장을 넘길 때의 잔향, 차분한 머스크와 종이섬유의 여운",
    relatedEditionSlugs: ["2026-02"],
  },
  {
    slug: "seo-youna",
    name: "서윤아",
    tagline: "밤의 정원을 기록하는 사진",
    theme: "Photo",
    bio: "밤의 정원에서 채집한 빛과 그림자를 사진으로 남깁니다. 향은 풀잎의 서늘함과 앰버의 따뜻함을 함께 담았습니다.",
    gallery: ["/images/placeholders/artist.svg", "/images/placeholders/artist.svg", "/images/placeholders/artist.svg"],
    imageUrl: "/images/placeholders/artist.svg",
    pairingNote: "밤공기 속 풀잎과 앰버, 낮은 조도의 조용한 향",
    relatedEditionSlugs: ["2026-03"],
  },
];

export const editions: Edition[] = [
  {
    slug: "2026-01",
    monthLabel: "2026.01",
    artistSlug: "lee-jian",
    title: "Light in Silence",
    scentTitle: "Amber Linen",
    story: "잉크와 여백이 만든 고요한 화면, 그 위에 따뜻한 앰버와 린넨 향을 겹칩니다.",
    gallery: ["/images/placeholders/lookbook.svg", "/images/placeholders/lookbook.svg"],
    included: ["A3 프린트", "향 100ml", "큐레이션 노트/캡션 카드"],
    installationTips: ["창가에서 1m 거리", "낮은 조도 스탠드", "아침 환기 후 향 분포 조절"],
    relatedPlanSlugs: ["premium", "collector"],
  },
] as const;
