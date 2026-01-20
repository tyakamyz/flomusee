import Link from "next/link";
import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ArtistCard } from "@/components/domain/ArtistCard";
import { artists } from "@/data/site";

const bullets = ["작품 중심 큐레이션", "감정과 향의 연결", "월호와 함께 소개"];

export function ArtistHighlightSection() {
  return (
    <Section id="artists" variant="muted">
      <SectionTitle
        eyebrow="ARTISTS"
        title="이번 달 작가 프리뷰"
        subtitle="작품의 결이 맞는 작가를 엄선해 소개합니다."
      />
      <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3">
        {bullets.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-px w-8 bg-accent-gold/60" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.slice(0, 3).map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
      <div className="flex justify-end">
        <Link href="/artists" className="lux-link text-sm font-semibold">
          작가 더 보기
        </Link>
      </div>
    </Section>
  );
}
