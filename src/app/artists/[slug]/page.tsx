import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { artistDetails, planDetails } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return artistDetails.map((artist) => ({ slug: artist.slug }));
}

export function generateMetadata({ params }: Props) {
  const artist = artistDetails.find((item) => item.slug === params.slug);
  if (!artist) return {};
  return {
    title: `GALLERYNOOK | ${artist.name}`,
    description: artist.tagline,
    openGraph: {
      title: `GALLERYNOOK | ${artist.name}`,
      description: artist.tagline,
      images: [{ url: artist.imageUrl ?? "/images/gn/artists/artist-01.svg" }],
    },
  };
}

export default function ArtistDetailPage({ params }: Props) {
  const artist = artistDetails.find((item) => item.slug === params.slug);
  if (!artist) notFound();

  const related = planDetails.filter((plan) => artist.relatedPlanSlugs.includes(plan.slug));

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-[0_10px_26px_rgba(20,18,15,0.08)]">
            <Image src={artist.imageUrl ?? "/images/gn/artists/artist-01.svg"} alt={artist.name} fill className="object-cover" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {artist.gallery.map((src, idx) => (
              <div key={src + idx} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
                <Image src={src} alt={`${artist.name} 작업 ${idx + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <SectionTitle eyebrow="ARTIST" title={artist.name} subtitle={artist.tagline} />
          <Card className="p-5">
            <h3 className="text-h4">소개</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{artist.bio}</p>
            <p className="mt-3 text-sm text-muted">향 페어링 노트: {artist.pairingNote}</p>
          </Card>
          <Card className="p-5">
            <h3 className="text-h4">함께하는 플랜</h3>
            <div className="mt-3 flex flex-col gap-3">
              {related.map((plan) => (
                <div key={plan.slug} className="flex items-center justify-between rounded-2xl border border-border bg-surface p-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-muted">{plan.cycle}</span>
                    <span className="text-base font-semibold text-ink">{plan.name}</span>
                  </div>
                  <Link href={`/subscribe/${plan.slug}`} className="lux-link text-sm font-semibold">
                    보기
                  </Link>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
