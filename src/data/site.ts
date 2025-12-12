import type { Artist } from "@/components/domain/ArtistCard";
import type { FAQ } from "@/components/domain/FAQItem";
import type { Plan } from "@/components/domain/PlanCard";

export const features = [
  {
    title: "Curated Flowers",
    description: "계절감과 공간 색감을 맞춘 꽃다발을 큐레이션합니다.",
  },
  {
    title: "Artist Objects",
    description: "작가 콜라보 오브제/포스터/엽서를 함께 제공합니다.",
  },
  {
    title: "Monthly Delivery",
    description: "매월 지정 주간에 배송, 다음 회차에 화병 회수/세척 포함.",
  },
  {
    title: "Home Gallery Guide",
    description: "작은 전시처럼 연출하는 스타일링 가이드와 음악 추천.",
  },
] as const;

export const steps = [
  {
    title: "테마 큐레이션",
    description: "계절과 작가 테마를 엮어 월별 콘셉트를 선정합니다.",
  },
  {
    title: "플라워 & 아트 구성",
    description: "꽃다발과 아트 오브제/프린트를 함께 패키징합니다.",
  },
  {
    title: "배송 & 회수",
    description: "배송 시기 알림 후 회수·세척까지 담당합니다.",
  },
  {
    title: "다음 전시로 교체",
    description: "새로운 테마와 함께 다음 달 전시를 시작합니다.",
  },
] as const;

export const plans: Plan[] = [
  {
    name: "Standard",
    price: "월 38,000원",
    cycle: "매월 1회 배송",
    features: [
      "계절 꽃다발 기본 구성",
      "작가 엽서 또는 미니 포스터 1종",
      "화병 대여 및 회수",
    ],
  },
  {
    name: "Premium",
    price: "월 68,000원",
    cycle: "매월 1회 배송",
    features: [
      "프리미엄 꽃다발 + 오브제 1종",
      "작가 한정 포스터 또는 향초 포함",
      "배송 일정 리마인드 & 회수 서비스",
    ],
    highlight: true,
    tag: "추천",
  },
  {
    name: "Gift",
    price: "월 48,000원",
    cycle: "원하는 달에 1회 배송",
    features: [
      "선물용 메시지 카드 포함",
      "포장·배송 일정 맞춤 조율",
      "작가 엽서 동봉",
    ],
    tag: "선물용",
  },
];

export const artists: Artist[] = [
  {
    name: "한서윤",
    tagline: "가든에서 영감받은 세라믹 화병 시리즈, 빛을 닮은 곡선.",
    theme: "Ceramics",
  },
  {
    name: "LEE MIRA",
    tagline: "꽃의 잔상을 레이어링한 실크스크린 포스터 작업.",
    theme: "Print",
  },
  {
    name: "Studio V",
    tagline: "식물성 왁스로 만든 향과 조형을 결합한 캔들 아트.",
    theme: "Scent",
  },
  {
    name: "윤채영",
    tagline: "텍스타일 위에 건조 꽃을 압인한 월 아트 연구.",
    theme: "Textile",
  },
] as const;

export const faqs: FAQ[] = [
  {
    question: "배송은 언제 진행되나요?",
    answer:
      "매달 첫째 주 수요일에 일괄 배송하며, 전날 알림 메시지를 드립니다. 휴무일이 겹치면 주중 대체일로 조정합니다.",
  },
  {
    question: "화병 회수는 어떻게 하나요?",
    answer:
      "다음 배송일에 기존 화병을 수거하고 세척 후 재사용합니다. 파손·분실 시 별도 비용이 청구될 수 있습니다.",
  },
  {
    question: "꽃이 시들면 교체가 가능한가요?",
    answer:
      "배송 후 48시간 내 시듦이 발생하면 사진과 함께 연락 주세요. 상태 확인 후 일부 보상 혹은 교체를 진행합니다.",
  },
  {
    question: "구독 플랜 변경/해지는 어떻게 하나요?",
    answer:
      "배송 5일 전까지 문의 주시면 다음 회차부터 변경 또는 해지가 반영됩니다. 차후 마이페이지 연동 시 셀프 변경을 지원합니다.",
  },
] as const;
