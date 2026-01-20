import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { editions, planDetails, artistDetails } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return editions.map((edition) => ({ slug: edition.slug }));
}

export function generateMetadata({ params }: Props) {
  const edition = editions.find((item) => item.slug === params.slug);
  if (!edition) return {};
  const artist = artistDetails.find((a) => a.slug === edition.artistSlug);
  return {
    title: `GALLERYNOOK | ${edition.monthLabel} ${edition.title}`,
    description: edition.story,
    openGraph: {
      title: `GALLERYNOOK | ${edition.title}`,
      description: edition.story,
      images: [{ url: edition.coverImage }],
    },
    alternates: { canonical: `/editions/${edition.slug}` },
    keywords: ["갤러리눅", "작가의 향", edition.title, artist?.name].filter(Boolean),
  };
}

export default function EditionDetailPage({ params }: Props) {
  const edition = editions.find((item) => item.slug === params.slug);
  if (!edition) notFound();
  const artist = artistDetails.find((a) => a.slug === edition.artistSlug);
  const relatedPlans = planDetails.filter((plan) => edition.relatedPlanSlugs.includes(plan.slug));

  return (
    <Section>
      <SectionTitle
        eyebrow={edition.monthLabel}
        title={`${edition.title} — ${artist?.name ?? ""}`}
        subtitle={edition.story}
      />
      <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3">
        {["작품 중심 큐레이션", "향 노트 페어링", "설치 가이드 포함"].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Card className="overflow-hidden p-0">
        <div className="relative aspect-[16/9] w-full">
          <Image src={edition.coverImage} alt={`${edition.title} cover`} fill className="object-cover" priority />
        </div>
        <div className="flex flex-wrap items-center gap-2 p-5">
          <Badge label="ISSUE" />
          <Badge label={edition.scentTitle} variant="accent" />
        </div>
      </Card>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden p-0">
          <div className="relative aspect-[4/3] w-full">
            <Image src={edition.artworkImage} alt={`${edition.title} artwork`} fill className="object-cover" />
          </div>
          <div className="p-5">
            <p className="text-sm text-muted">작품</p>
          </div>
        </Card>
        <Card className="overflow-hidden p-0">
          <div className="relative aspect-[4/3] w-full">
            <Image src={edition.scentImage} alt={`${edition.title} scent`} fill className="object-cover" />
          </div>
          <div className="p-5">
            <p className="text-sm text-muted">향</p>
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="flex flex-col gap-3 p-5">
          <h3 className="text-h4">포함 구성</h3>
          <ul className="list-disc space-y-2 pl-4 text-sm text-muted">
            {edition.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="text-h4">설치 가이드</h3>
          <ul className="list-disc space-y-2 pl-4 text-sm text-muted">
            {edition.installationTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-5">
          <h3 className="text-h4">갤러리</h3>
          <div className="mt-3 grid gap-3">
            {edition.gallery.map((src, idx) => (
              <div key={src + idx} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image src={src} alt={`${edition.title} 갤러리`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6 p-5">
        <h3 className="text-h4">이 월호를 만나려면</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {relatedPlans.map((plan) => (
            <div key={plan.slug} className="rounded-2xl border border-border bg-surface p-4">
              <p className="text-sm text-muted">{plan.cycle}</p>
              <p className="text-base font-semibold text-ink">{plan.name}</p>
              <p className="text-sm text-muted">{plan.tagline}</p>
              <Link href={`/subscribe/${plan.slug}`} className="lux-link mt-2 inline-flex text-sm font-semibold">
                플랜 자세히 보기
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
