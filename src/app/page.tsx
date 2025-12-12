import { ArtistHighlightSection } from "@/components/home/ArtistHighlightSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PlanSection } from "@/components/home/PlanSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <PlanSection />
      <ArtistHighlightSection />
      <FAQSection />
    </>
  );
}
