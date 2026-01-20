import { Card } from "@/components/common/Card";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { editions, artistDetails } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "GALLERYNOOK | 월호",
  description: "이달의 작가의 향 월호를 확인하세요.",
  openGraph: {
    title: "GALLERYNOOK | 월호",
    description: "이달의 작가의 향 월호를 확인하세요.",
    images: [{ url: "/images/gn/hero/hero-2.svg" }],
  },
};

export default function EditionsPage() {
  return (
    <Section>
      <SectionTitle
        eyebrow="EDITIONS"
        title="이달의 작가의 향"
        subtitle="월별로 큐레이션된 작품과 향 페어링, 설치 가이드와 함께 전달됩니다."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {editions.map((edition) => {
          const artist = artistDetails.find((a) => a.slug === edition.artistSlug);
          return (
            <Card key={edition.slug} className="flex h-full flex-col overflow-hidden p-0">
              <div className="relative aspect-[4/3] w-full">
                <Image src={edition.coverImage} alt={edition.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-caption text-muted">{edition.monthLabel}</span>
                  <span className="text-xs font-semibold text-muted">{artist?.name}</span>
                </div>
                <h3 className="text-h4">{edition.title}</h3>
                <p className="text-sm text-muted">{edition.story}</p>
                <Link href={`/editions/${edition.slug}`} className="lux-link text-sm font-semibold">
                  자세히 보기
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
