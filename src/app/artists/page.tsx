import { Section } from "@/components/common/Section";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ArtistCard } from "@/components/domain/ArtistCard";
import { artists } from "@/data/site";

export default function ArtistsPage() {
  return (
    <Section>
      <SectionTitle
        title="협업 작가 소개"
        subtitle="플로뮤제가 함께하는 아티스트들의 작품 세계를 만나보세요."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artists.map((artist) => (
          <ArtistCard key={artist.name} artist={artist} />
        ))}
      </div>
    </Section>
  );
}
