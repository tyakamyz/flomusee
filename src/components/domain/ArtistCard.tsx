import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";

export type Artist = {
  name: string;
  tagline: string;
  imageUrl?: string;
  theme?: string;
};

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-h4">{artist.name}</h3>
          <p className="text-caption text-text-muted">{artist.theme}</p>
        </div>
        {artist.theme ? <Badge label={artist.theme} /> : null}
      </div>
      <p className="text-sm text-text-muted">{artist.tagline}</p>
      {artist.imageUrl ? (
        <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-r from-primary-soft via-bg-subtle to-bg-surface">
          <span className="sr-only">{artist.name}</span>
        </div>
      ) : null}
    </Card>
  );
}
