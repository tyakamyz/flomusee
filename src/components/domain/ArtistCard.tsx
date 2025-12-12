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
        <h3 className="text-lg font-semibold">{artist.name}</h3>
        {artist.theme ? <Badge label={artist.theme} /> : null}
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{artist.tagline}</p>
      {artist.imageUrl ? (
        <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700">
          <span className="sr-only">{artist.name}</span>
        </div>
      ) : null}
    </Card>
  );
}
