import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { PlanProgressBar } from "@/components/subscribe/PlanProgressBar";
import { planDetails, plans } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return planDetails.map((plan) => ({ slug: plan.slug }));
}

export function generateMetadata({ params }: Props) {
  const plan = planDetails.find((item) => item.slug === params.slug);
  if (!plan) return {};
  return {
    title: `FLOMUSÉE | ${plan.name} 플랜 상세`,
    description: `${plan.tagline ?? plan.cycle} · ${plan.price}`,
    openGraph: {
      title: `FLOMUSÉE | ${plan.name}`,
      description: plan.tagline ?? plan.cycle,
      images: [{ url: plan.heroImage }],
    },
  };
}

export default function PlanDetailPage({ params }: Props) {
  const plan = planDetails.find((item) => item.slug === params.slug);
  if (!plan) notFound();
  const related = plans.filter((p) => plan.relatedPlans.includes(p.slug ?? ""));

  return (
    <div className="relative">
      <PlanProgressBar />
      <Section className="pb-12 pt-14 sm:pt-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="relative w-full overflow-hidden rounded-3xl border border-border-subtle bg-white shadow-[0_24px_60px_rgba(20,30,25,0.14)] lg:sticky lg:top-28 lg:w-1/2">
            <Image
              src={plan.heroImage}
              alt={`${plan.name} hero`}
              width={900}
              height={640}
              className="h-80 w-full object-cover"
              priority
            />
            <div className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <h1 className="text-h2">{plan.name}</h1>
                  <p className="text-sm text-text-muted">{plan.cycle}</p>
                </div>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">Plan</span>
              </div>
              <p className="text-3xl font-bold text-text-main">{plan.price}</p>
              <p className="text-sm text-text-muted">{plan.priceNote}</p>
              <div className="grid gap-2 text-sm text-text-muted">
                {plan.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  이 플랜으로 시작하기
                </Link>
                <Link
                  href="/subscribe"
                  className="rounded-full border border-border-subtle px-5 py-3 text-sm font-semibold text-text-main transition hover:border-primary hover:text-primary"
                >
                  플랜 비교 보기
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-10">
            <SectionTitle
              eyebrow="DETAIL"
              title={`${plan.name} 플랜을 선택하면`}
              subtitle={plan.heroCaption}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="p-5">
                <h3 className="text-h4">포함 구성</h3>
                <ul className="mt-3 flex list-disc flex-col gap-2 pl-4 text-sm text-text-muted">
                  {plan.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-5">
                <h3 className="text-h4">추천 대상</h3>
                <ul className="mt-3 flex list-disc flex-col gap-2 pl-4 text-sm text-text-muted">
                  {plan.who.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
              <Card className="p-0">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {plan.gallery.map((src) => (
                    <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border-subtle/70">
                      <Image src={src} alt={`${plan.name} look`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="flex h-full flex-col gap-3 p-5">
                <h3 className="text-h4">배송 · 케어</h3>
                <ul className="flex list-disc flex-col gap-2 pl-4 text-sm text-text-muted">
                  {plan.delivery.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            </div>
            <Card className="p-5">
              <h3 className="text-h4">운영 정책</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {plan.policies.map((policy) => (
                  <div key={policy.title} className="rounded-2xl border border-border-subtle/70 bg-white/80 p-4">
                    <p className="text-sm font-semibold text-text-main">{policy.title}</p>
                    <p className="mt-2 text-sm leading-6 text-text-muted">{policy.description}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-5">
              <h3 className="text-h4">자주 묻는 질문</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {plan.faq.map((qa) => (
                  <div key={qa.question} className="rounded-2xl border border-border-subtle/70 bg-white/80 p-4">
                    <p className="text-sm font-semibold text-text-main">{qa.question}</p>
                    <p className="mt-2 text-sm leading-6 text-text-muted">{qa.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
            <SectionTitle eyebrow="RELATED" title="다른 플랜도 살펴보기" />
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Card key={item.name} className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-sm text-text-muted">{item.cycle}</p>
                    <h4 className="text-h4">{item.name}</h4>
                    <p className="text-sm text-text-muted">{item.tagline}</p>
                  </div>
                  <Link
                    href={item.slug ? `/subscribe/${item.slug}` : "/subscribe"}
                    className="rounded-full border border-border-subtle px-4 py-2 text-sm font-semibold text-text-main transition hover:border-primary hover:text-primary"
                  >
                    보기
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
