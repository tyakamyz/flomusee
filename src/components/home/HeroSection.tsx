import { Button } from "@/components/common/Button";
import { Section } from "@/components/common/Section";
import { hero } from "@/data/site";
import Image from "next/image";

export function HeroSection() {
  const [hero01, hero02, hero03] = hero.heroImages;

  return (
    <Section className="pt-10 sm:pt-16" variant="default">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex max-w-2xl flex-col gap-6">
          <h1 className="text-h1 text-balance">{hero.headline}</h1>
          <p className="max-w-xl text-body text-muted text-balance">{hero.subheadline}</p>
          <ul className="grid gap-2 text-sm text-muted">
            {hero.bullets.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1 w-8 bg-accent-gold/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            {hero.ctas.map((cta) => (
              <Button key={cta.href} as="a" href={cta.href} variant={cta.href.includes("editions") ? "secondary" : "primary"}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-[0_12px_30px_rgba(20,18,15,0.12)]">
            <Image src={hero01} alt="Hero artwork 01" fill className="object-cover" priority />
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border shadow-[0_12px_30px_rgba(20,18,15,0.12)]">
              <Image src={hero02} alt="Hero artwork 02" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-[0_12px_30px_rgba(20,18,15,0.12)]">
              <Image src={hero03} alt="Hero artwork 03" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
