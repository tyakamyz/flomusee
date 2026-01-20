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

export default function FlomuseeLandingPage() {
  return (
    <>
      <HeroSection />
      <ProductStorySection />
      <IncludedSection />
      <LookbookSection />
      <HowItWorksSection />
      <PlanTeaserSection />
      <TrustPolicySection />
      <ArtistHighlightSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
