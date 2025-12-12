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
    <section className="w-full bg-bgPage py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-textMuted">
            FLOMUSÉE
          </p>
          <h2 className="text-3xl font-semibold text-textMain">
            구독 플랜을 선택하세요
          </h2>
          <p className="text-base leading-7 text-textMuted">
            배송 주기, 포함 구성, 추천 대상에 맞춰 준비했습니다.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="relative flex flex-col gap-6 rounded-2xl border border-primarySoft/60 bg-bgCard p-6 shadow-[0_10px_30px_rgba(20,30,25,0.08)]"
            >
              {plan.badge ? (
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.badge.tone === "coral"
                      ? "bg-accentCoral text-textOnAccent" // coral 배경 + white
                      : "bg-primarySoft text-primary" // mint 배경 + deep green (선물용)
                  }`}
                >
                  {plan.badge.label}
                </span>
              ) : null}

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-textMain">
                  {plan.name}
                </h3>
                <p className="text-sm text-textMuted">{plan.cycle}</p>
              </div>

              <div className="text-3xl font-bold text-textMain">{plan.price}</div>

              <ul className="flex flex-col gap-3 text-sm text-textMain">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className={`w-full rounded-full px-4 py-3 text-sm font-semibold transition-colors ${
                    plan.buttonVariant === "solid"
                      ? "bg-primary text-textOnPrimary hover:bg-primaryDark" // use text-on-primary for readability on dark button
                      : "bg-primarySoft text-textMain hover:bg-primarySoft/90" // soft button with dark text for contrast
                  }`}
                >
                  플랜 상세 보기
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-textMain">
            커스텀 플랜 상담이 필요하신가요?
          </span>
          <a
            href="/contact"
            className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary hover:text-textOnPrimary"
          >
            상담 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
