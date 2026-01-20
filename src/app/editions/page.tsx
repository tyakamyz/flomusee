import { Card } from "@/components/common/Card";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { editions, artistDetails } from "@/data/site";
import Link from "next/link";

export const metadata = {
  title: "GALLERYNOOK | 월호",
  description: "이달의 작가의 향 월호를 확인하세요.",
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
                <PlaceholderImage label={edition.title} />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
                    {edition.monthLabel}
                  </span>
                  <span className="text-xs font-semibold text-text-muted">{artist?.name}</span>
                </div>
                <h3 className="text-h4">{edition.title}</h3>
                <p className="text-sm text-text-muted">{edition.story}</p>
                <Link
                  href={`/editions/${edition.slug}`}
                  className="text-sm font-semibold text-primary underline-offset-4 transition hover:underline"
                >
                  자세히 보기 →
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
