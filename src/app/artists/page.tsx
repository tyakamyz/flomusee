import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { artistDetails } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "GALLERYNOOK | 작가",
  description: "갤러리눅이 큐레이션하는 작가와 작품, 향 페어링을 소개합니다.",
};

export default function ArtistsPage() {
  return (
    <Section>
      <SectionTitle
        eyebrow="ARTISTS"
        title="함께하는 작가들"
        subtitle="세라믹, 프린트, 텍스타일, 향 등 다양한 매체의 작가와 콜라보합니다."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artistDetails.map((artist) => (
          <Card key={artist.slug} className="flex h-full flex-col overflow-hidden p-0">
            <div className="relative aspect-[4/3] overflow-hidden border-b border-border-subtle/70">
              <Image src={artist.imageUrl} alt={`${artist.name} 프리뷰`} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="text-h4">{artist.name}</h3>
                  <p className="text-caption text-text-muted">{artist.theme}</p>
                </div>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">Collab</span>
              </div>
              <p className="text-sm text-text-muted">{artist.tagline}</p>
              <Link
                href={`/artists/${artist.slug}`}
                className="text-sm font-semibold text-primary underline-offset-4 transition hover:underline"
              >
                자세히 보기 →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
