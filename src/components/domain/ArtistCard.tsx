import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import Image from "next/image";

export type Artist = {
  name: string;
  tagline: string;
  imageUrl?: string;
  theme?: string;
};

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card className="flex flex-col overflow-hidden p-0">
      <div className="relative h-40 w-full overflow-hidden bg-primary-soft/50">
        <Image
          src={artist.imageUrl || "/images/artist-generic.svg"}
          alt={`${artist.name} 작품 프리뷰`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-h4">{artist.name}</h3>
            <p className="text-caption text-text-muted">{artist.theme}</p>
          </div>
          {artist.theme ? <Badge label={artist.theme} /> : null}
        </div>
        <p className="text-sm text-text-muted">{artist.tagline}</p>
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
          테마 큐레이션
          <span aria-hidden>·</span>
          <span className="text-text-muted">FLOMUSÉE</span>
        </div>
      </div>
    </Card>
  );
}
