import { ArtistHighlightSection } from "@/components/home/ArtistHighlightSection";
import { ContactSection } from "@/components/home/ContactSection";
import { FAQSection } from "@/components/home/FAQSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { IncludedSection } from "@/components/home/IncludedSection";
import { LookbookSection } from "@/components/home/LookbookSection";
import { PlanTeaserSection } from "@/components/home/PlanTeaserSection";
import { ProductStorySection } from "@/components/home/ProductStorySection";
import { TrustPolicySection } from "@/components/home/TrustPolicySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductStorySection />
      <LookbookSection />
      <IncludedSection />
      <HowItWorksSection />
      <PlanTeaserSection />
      <TrustPolicySection />
      <ArtistHighlightSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
