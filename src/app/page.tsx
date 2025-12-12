import { ArtistHighlightSection } from "@/components/home/ArtistHighlightSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PlanSection } from "@/components/home/PlanSection";
import { ServiceIntroSection } from "@/components/home/ServiceIntroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceIntroSection />
      <HowItWorksSection />
      <PlanSection />
      <ArtistHighlightSection />
      <FAQSection />
    </>
  );
}
