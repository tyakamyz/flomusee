const plans = [
  {
    name: "Standard",
    cycle: "매월 1회 배송",
    price: "월 38,000원",
    features: [
      "계절 꽃다발 기본 구성",
      "작가 엽서 또는 미니 포스터 1종",
      "화병 대여 및 회수",
    ],
    badge: null,
    buttonVariant: "soft" as const,
  },
  {
    name: "Premium",
    cycle: "매월 1회 배송",
    price: "월 68,000원",
    features: [
      "프리미엄 꽃다발 + 오브제 1종",
      "작가 한정 포스터 또는 향초 포함",
      "배송 일정 리마인드 & 회수 서비스",
    ],
    badge: { label: "추천", tone: "coral" as const },
    buttonVariant: "solid" as const,
  },
  {
    name: "Gift",
    cycle: "원하는 달에 1회 배송",
    price: "월 48,000원",
    features: [
      "선물용 메시지 카드 포함",
      "포장·배송 일정 맞춤 조율",
      "작가 엽서 동봉",
    ],
    badge: { label: "선물용", tone: "mint" as const },
    buttonVariant: "soft" as const,
  },
];

export default function FlomuseePricing() {
  return (
    <section className="w-full bg-bgPage bg-[#F5EFE6] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-textMuted text-[#6B7280]">
            FLOMUSÉE
          </p>
          <h2 className="text-3xl font-semibold text-textMain text-[#1F2933]">
            구독 플랜을 선택하세요
          </h2>
          <p className="text-base leading-7 text-textMuted text-[#6B7280]">
            배송 주기, 포함 구성, 추천 대상에 맞춰 준비했습니다.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="relative flex flex-col gap-6 rounded-2xl border border-[#e5ded4] bg-bgCard bg-white p-6 shadow-[0_10px_30px_rgba(20,30,25,0.08)]"
            >
              {plan.badge ? (
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.badge.tone === "coral"
                      ? "bg-accentCoral bg-[#F28D8D] text-white" // 높인 대비: coral 배경 + white 텍스트
                      : "bg-primarySoft bg-[#D7E4DC] text-primary text-white" // mint 배경 + 딥그린 배경 대비 흰색계열로 조정
                  }`}
                >
                  {plan.badge.label}
                </span>
              ) : null}

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-textMain text-[#1F2933]">
                  {plan.name}
                </h3>
                <p className="text-sm text-textMuted text-[#6B7280]">{plan.cycle}</p>
              </div>

              <div className="text-3xl font-bold text-textMain text-[#1F2933]">{plan.price}</div>

              <ul className="flex flex-col gap-3 text-sm text-textMain text-[#1F2933]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary bg-[#1f3a32]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className={`w-full rounded-full px-4 py-3 text-sm font-semibold transition-colors ${
                    plan.buttonVariant === "solid"
                      ? "bg-primary bg-[#1f3a32] text-white hover:bg-primaryDark hover:bg-[#162d26]" // 대비 개선: deep green + white
                      : "bg-primarySoft bg-[#D7E4DC] text-white hover:bg-[#cddcd3]" // 대비 개선: soft green + white (딥그린 대신 흰색계열로 가독성 확보)
                  }`}
                >
                  플랜 상세 보기
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-textMain text-[#1F2933]">
            커스텀 플랜 상담이 필요하신가요?
          </span>
          <a
            href="/contact"
            className="rounded-full border border-primary border-[#1f3a32] px-4 py-2 text-sm font-semibold text-primary text-[#1f3a32] hover:bg-[#1f3a32] hover:text-white"
          >
            상담 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
