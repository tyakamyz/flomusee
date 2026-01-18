import type { Artist } from "@/components/domain/ArtistCard";
import type { FAQ } from "@/components/domain/FAQItem";
import type { Plan } from "@/components/domain/PlanCard";

export const heroHighlights = [
  { title: "월 1회 전시", description: "새로운 테마와 꽃, 아트 패키지" },
  { title: "회수·세척 포함", description: "화병 교체와 재사용으로 부담을 줄여요" },
  { title: "작가 콜라보", description: "에디션 오브제·포스터를 매달 새롭게" },
] as const;

export const features = [
  {
    title: "Botanical Curation",
    description: "계절감과 공간 톤을 맞춘 플라워 부케를 보내드립니다.",
  },
  {
    title: "Artist Edition",
    description: "세라믹·프린트·텍스타일 등 작가 오브제를 함께 담았습니다.",
  },
  {
    title: "Gallery Styling Guide",
    description: "집 안을 전시처럼 꾸밀 수 있는 배치 팁과 음악 큐레이션.",
  },
  {
    title: "Sustainable Loop",
    description: "화병 대여·회수·세척을 포함한 순환형 서비스로 폐기물을 줄입니다.",
  },
] as const;

export const storyPoints = [
  {
    title: "집에서 즐기는 작은 전시",
    description:
      "플로뮤제는 매달 하나의 테마를 선정해 꽃과 아트 오브제를 큐레이션합니다. 공간의 온도와 향, 컬러가 자연스럽게 어우러지도록 구성합니다.",
    bullets: ["계절감이 느껴지는 플라워 팔레트", "작가 오브제/포스터와 함께 연출", "가이드 카드로 간단히 완성"],
  },
  {
    title: "지속 가능한 플라워 경험",
    description:
      "화병을 회수·세척해 재사용하고, 포장재를 최소화했습니다. 남는 꽃은 드라이 플라워나 워크숍 재료로 순환합니다.",
    bullets: ["화병 회수/세척 포함", "친환경 완충재 사용", "지역 플로리스트와 협업"],
  },
  {
    title: "컬렉터블을 모으는 즐거움",
    description:
      "매달 다른 작가와 협업해 작은 에디션을 선보입니다. 향후 단독 전시/워크숍과도 연결될 예정입니다.",
    bullets: ["작가 인터뷰와 테마 노트", "에디션 오브제/프린트 동봉", "다음 전시 프리뷰 제공"],
  },
] as const;

export const steps = [
  {
    title: "테마 큐레이션",
    description: "계절과 작가 테마를 엮어 월별 콘셉트를 선정하고 미리 공지합니다.",
  },
  {
    title: "플라워 & 아트 구성",
    description: "꽃다발과 아트 오브제/프린트를 함께 패키징하고 스타일링 가이드와 음악 플레이리스트를 포함합니다.",
  },
  {
    title: "배송 & 회수",
    description: "배송 알림 후 화병을 회수·세척해 다음 달 구성에 맞춰 다시 준비합니다.",
  },
  {
    title: "다음 전시로 교체",
    description: "새로운 테마와 함께 전시를 교체하고, 큐레이션 노트와 작가 스토리를 함께 전달합니다.",
  },
] as const;

export const plans: Plan[] = [
  {
    name: "Standard",
    price: "월 38,000원",
    cycle: "매월 1회 · 4-6종 꽃",
    tagline: "가볍게 시작하는 홈 갤러리",
    features: [
      "계절 플라워 부케 + 미니 화병 대여",
      "작가 엽서 또는 미니 포스터 1종",
      "다음 달 배송 시 회수·세척 포함",
    ],
    tag: "입문",
  },
  {
    name: "Premium",
    price: "월 68,000원",
    cycle: "매월 1회 · 7-9종 꽃",
    tagline: "공간의 중심이 되는 시그니처 전시",
    features: [
      "프리미엄 부케 + 작가 오브제 또는 향",
      "작가 한정 포스터(또는 미니 에디션)",
      "전시 스타일링 가이드 + 음악 플레이리스트",
      "배송 일정 리마인드 · 회수 서비스",
    ],
    highlight: true,
    tag: "추천",
    note: "가장 인기 있는 구독 · 공간 연출 완성형",
  },
  {
    name: "Gift",
    price: "월 48,000원",
    cycle: "선택한 달 · 1회 배송",
    tagline: "선물용 맞춤 패키지",
    features: [
      "메시지 카드와 전용 패키지 포함",
      "배송 일정 맞춤 조율 및 사전 알림",
      "작가 엽서 동봉 & 보관 가이드",
    ],
    tag: "선물용",
    note: "생일·기념일에 맞춰 전달해 드립니다.",
  },
];

export const artists: Artist[] = [
  {
    name: "한서윤",
    tagline: "가든에서 영감받은 세라믹 화병 시리즈, 빛을 닮은 곡선.",
    theme: "Ceramics",
    imageUrl: "/images/artist-ceramics.svg",
  },
  {
    name: "LEE MIRA",
    tagline: "꽃의 잔상을 레이어링한 실크스크린 포스터 작업.",
    theme: "Print",
    imageUrl: "/images/artist-print.svg",
  },
  {
    name: "Studio V",
    tagline: "식물성 왁스로 만든 향과 조형을 결합한 캔들 아트.",
    theme: "Scent",
    imageUrl: "/images/artist-scent.svg",
  },
  {
    name: "윤채영",
    tagline: "텍스타일 위에 건조 꽃을 압인한 월 아트 연구.",
    theme: "Textile",
    imageUrl: "/images/artist-textile.svg",
  },
] as const;

export const faqs: FAQ[] = [
  {
    question: "배송 일정은 어떻게 되나요?",
    answer: "매달 첫째 주 수요일에 발송합니다. 공휴일이 겹치면 주중 대체일로 조정하며 전날 알림을 드립니다.",
  },
  {
    question: "화병 회수는 어떻게 하나요?",
    answer: "다음 배송 시 기존 화병을 수거·세척해 재사용합니다. 파손·분실 시 소정의 비용이 청구될 수 있습니다.",
  },
  {
    question: "꽃이 시들면 교체가 가능한가요?",
    answer: "배송 후 48시간 내 시듦이 발생하면 사진과 함께 연락 주세요. 상태 확인 후 일부 보상 또는 교체를 진행합니다.",
  },
  {
    question: "구독 플랜 변경/해지는 어떻게 하나요?",
    answer: "배송 5일 전까지 알려주시면 다음 회차부터 변경·해지가 반영됩니다. 향후 마이페이지에서 직접 변경을 지원할 예정입니다.",
  },
] as const;
