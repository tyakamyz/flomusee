export default function FlomuseeLandingPage() {
  return (
    <div className="bg-[#f8f3ec] text-[#1f1a17]">
      {/* Hero */}
      <section className="w-full bg-[#f8f3ec]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:gap-12 md:py-20">
          <div className="w-full md:w-1/2">
            <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-[#e5ded4] bg-gradient-to-br from-[#ffffff] via-[#e7f0e8] to-[#ffffff] shadow-[0_14px_45px_rgba(20,30,25,0.12)] sm:h-96">
              <div
                className="absolute inset-4 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero-placeholder.jpg')" }}
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <p className="text-sm uppercase tracking-[0.14em] text-[#5b554f]">
              A small museum at home
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              집 안에 열리는 작은 미술관, 플로뮤제
            </h1>
            <p className="whitespace-pre-line text-base leading-7 text-[#5b554f]">
              매달 한 번, 꽃과 오브제가 함께 도착해
              {"\n"}
              우리 집 한 켠이 작은 전시장이 됩니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-[#1f3a32] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#13261f]">
                첫 전시 구독 신청하기
              </button>
              <button className="rounded-full border border-[#d1c8bb] bg-white px-6 py-3 text-sm font-semibold text-[#1f3a32] transition-colors hover:border-[#1f3a32] hover:text-[#1f3a32]">
                플로뮤제 전시 미리보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Intro */}
      <section className="border-t border-[#e5ded4] bg-[#f3eee6]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm uppercase tracking-[0.14em] text-[#5b554f]">플로뮤제</p>
            <h2 className="text-3xl font-semibold">플로뮤제는 이런 서비스예요</h2>
            <p className="whitespace-pre-line text-base leading-7 text-[#5b554f]">
              꽃만 보내지 않아요.
              {"\n"}
              플로뮤제는 꽃, 화병, 오브제, 아트 엽서를 함께 큐레이션해
              {"\n"}
              집 안에 작은 미술관 한 장면을 만들어 드립니다.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "큐레이션된 계절 꽃",
                desc: "플로리스트가 계절에 맞게 고른 꽃을\n집에서 쉽게 완성할 수 있는 구성으로 보내드려요.",
              },
              {
                title: "작가 콜라보 오브제",
                desc: "국내외 아티스트와 협업한 엽서와 소품이 함께 들어 있어\n꽃과 함께 하나의 작품 같은 장면을 완성할 수 있어요.",
              },
              {
                title: "월 1회 정기 배송",
                desc: "한 달에 한 번, 번거로운 예약 없이\n정해진 날에 집 앞으로 전시 박스가 도착합니다.",
              },
              {
                title: "홈 갤러리 스타일링 가이드",
                desc: "박스마다 공간 배치 팁과 사진 예시를 담은\n작은 스타일링 가이드를 함께 보내드려요.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-[#e5ded4] bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7f0e8] text-sm font-semibold text-[#1f3a32]">
                  ●
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="whitespace-pre-line text-sm leading-6 text-[#5b554f]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Flow */}
      <section className="bg-[#f8f3ec]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.14em] text-[#5b554f]">플로우</p>
            <h2 className="text-3xl font-semibold">어떻게 이용하나요?</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "1. 테마 선택", desc: "마음에 드는 전시 테마와\n구독 옵션을 선택합니다." },
              { title: "2. 구독 신청", desc: "배송지와 날짜를 입력하고 결제하면\n준비는 여기까지예요." },
              { title: "3. 전시 박스 도착", desc: "약속된 날, 플로뮤제 박스가\n집 앞으로 안전하게 배송됩니다." },
              { title: "4. 우리 집 전시 셋업", desc: "동봉된 가이드 카드대로 꽃을 꽂고\n오브제를 배치하면 오늘의 전시가 완성돼요." },
            ].map((step, idx) => (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-2xl border border-[#e5ded4] bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f0e8] text-sm font-semibold text-[#1f3a32]">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
                <p className="whitespace-pre-line text-sm leading-6 text-[#5b554f]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist & Theme */}
      <section className="border-t border-[#e5ded4] bg-[#f3eee6]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm uppercase tracking-[0.14em] text-[#5b554f]">아티스트</p>
            <h2 className="text-3xl font-semibold">이번 달 전시 & 아티스트</h2>
            <p className="whitespace-pre-line text-base leading-7 text-[#5b554f]">
              플로뮤제는 매달 하나의 테마와
              {"\n"}
              한 명(또는 한 팀)의 아티스트와 함께합니다.
              {"\n"}
              계절의 온도와 작가의 시선이 만나
              {"\n"}
              당신의 집 안에 작은 전시를 열어 드려요.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e5ded4] bg-white shadow-sm"
              >
                <div
                  className="h-44 w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/artist-placeholder.jpg')" }}
                />
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#1f3a32]">
                    <span className="rounded-full bg-[#e7f0e8] px-3 py-1">이번 달 테마</span>
                    <span className="rounded-full bg-[#e7f0e8] px-3 py-1">아티스트</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#5b554f]">전시 소개</p>
                    <p className="text-sm leading-6 text-[#5b554f]">
                      전시 테마, 작가 이름, 소개 문구를 여기에 입력합니다. 실제 데이터로 교체 예정.
                    </p>
                  </div>
                  <button className="self-start rounded-full border border-[#1f3a32] px-4 py-2 text-xs font-semibold text-[#1f3a32] transition-colors hover:bg-[#1f3a32] hover:text-white">
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8f3ec]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.14em] text-[#5b554f]">FAQ</p>
            <h2 className="text-3xl font-semibold">자주 묻는 질문</h2>
          </div>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "꽃은 어느 정도까지 신선하게 오나요?",
                a: "발송 당일 입고된 꽃으로 포장해 보내드리며,\n일반적인 실내 환경 기준으로 도착 후 3~5일 정도는\n충분히 감상하실 수 있도록 구성합니다.\n계절과 온도, 관리 상태에 따라 차이가 있을 수 있어요.",
              },
              {
                q: "꽃을 한 번도 다뤄본 적이 없어도 괜찮을까요?",
                a: "네. 박스마다 단계별 사진이 담긴\n스타일링 가이드 카드를 함께 넣어드립니다.\n처음이더라도 카드대로 천천히 따라 하면\n어렵지 않게 전시를 완성할 수 있어요.",
              },
              {
                q: "배송 주기를 바꾸거나 건너뛰는 것도 가능한가요?",
                a: "정기 구독 이후에는 일정 변경이나 건너뛰기가\n필요할 수 있다는 점을 알고 있어요.\n초기에는 고객센터를 통해 조율을 도와드리고,\n이후 마이페이지에서 직접 스킵/일시정지할 수 있도록\n기능을 확장할 예정입니다.",
              },
              {
                q: "어떤 지역까지 배송되나요?",
                a: "현재는 택배로 안전하게 배송 가능한 지역 위주로 운영합니다.\n상세 배송 가능 지역은 신청 페이지에서\n최신 정보로 안내드릴 예정이에요.",
              },
              {
                q: "작가 콜라보 굿즈만 따로 구매할 수도 있나요?",
                a: "지금은 전시 박스 안에서만 만나보실 수 있고,\n반응이 좋았던 굿즈는\n추후 단독 판매도 검토하고 있습니다.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#e5ded4] bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-[#1f1a17]">{item.q}</h3>
                <p className="whitespace-pre-line pt-2 text-sm leading-6 text-[#5b554f]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
