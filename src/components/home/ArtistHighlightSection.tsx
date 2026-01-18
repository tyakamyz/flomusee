import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ArtistCard } from "@/components/domain/ArtistCard";
import { artists } from "@/data/site";

export function ArtistHighlightSection() {
  return (
    <Section id="artists" variant="muted">
      <SectionTitle
        eyebrow="ARTISTS"
        title="함께하는 아티스트"
        subtitle="플로뮤제가 큐레이션한 작가들의 시그니처 오브제와 함께 꽃을 즐겨보세요."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.slice(0, 3).map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </Section>
  );
}
