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
    title: `GALLERYNOOK | ${plan.name} 플랜 상세`,
    description: `${plan.tagline ?? plan.cycle} · ${plan.price}`,
    openGraph: {
      title: `GALLERYNOOK | ${plan.name}`,
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
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-[4/3] w-full">
                <Image src={plan.heroImage} alt={`${plan.name} hero`} fill className="object-cover" priority />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-h2">{plan.name}</h1>
                  <p className="text-sm text-muted">{plan.cycle}</p>
                </div>
                <p className="text-3xl font-semibold text-ink">{plan.price}</p>
                <p className="text-sm text-muted">{plan.priceNote}</p>
                <div className="grid gap-2 text-sm text-muted">
                  {plan.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link href="/contact" className="lux-link text-sm font-semibold">
                    이 플랜으로 시작하기
                  </Link>
                  <Link href="/subscribe" className="lux-link text-sm font-semibold">
                    플랜 비교 보기
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          <div className="flex flex-col gap-10">
            <SectionTitle eyebrow="DETAIL" title={`${plan.name} 플랜을 선택하면`} subtitle={plan.heroCaption} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="p-5">
                <h3 className="text-h4">포함 구성</h3>
                <ul className="mt-3 flex list-disc flex-col gap-2 pl-4 text-sm text-muted">
                  {plan.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
              <Card className="p-5">
                <h3 className="text-h4">추천 대상</h3>
                <ul className="mt-3 flex list-disc flex-col gap-2 pl-4 text-sm text-muted">
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
                    <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                      <Image src={src} alt={`${plan.name} look`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="flex h-full flex-col gap-3 p-5">
                <h3 className="text-h4">배송 · 케어</h3>
                <ul className="flex list-disc flex-col gap-2 pl-4 text-sm text-muted">
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
                  <div key={policy.title} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="text-sm font-semibold text-ink">{policy.title}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{policy.description}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-5">
              <h3 className="text-h4">자주 묻는 질문</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {plan.faq.map((qa) => (
                  <div key={qa.question} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="text-sm font-semibold text-ink">{qa.question}</p>
                    <p className="mt-2 text-sm leading-6 text-muted">{qa.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
            <SectionTitle eyebrow="RELATED" title="다른 플랜도 살펴보기" />
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Card key={item.name} className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="text-sm text-muted">{item.cycle}</p>
                    <h4 className="text-h4">{item.name}</h4>
                    <p className="text-sm text-muted">{item.tagline}</p>
                  </div>
                  <Link href={item.slug ? `/subscribe/${item.slug}` : "/subscribe"} className="lux-link text-sm font-semibold">
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
