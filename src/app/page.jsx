import {
  AnalyticsSection,
  ClientsProjectsSection,
  EarningsShowcaseSection,
  FAQSection,
  FeaturesSection,
  FinalCTASection,
  HeroSection,
  HowItWorksSection,
  PricingSection,
  ProblemSection,
  ProductShowcaseSection,
  SocialProofSection,
  TimerShowcaseSection,
} from "../components/marketing/sections";
import { Footer, Navbar } from "../components/marketing/shared";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <FeaturesSection />
        <ProductShowcaseSection />
        <TimerShowcaseSection />
        <EarningsShowcaseSection />
        <ClientsProjectsSection />
        <HowItWorksSection />
        <AnalyticsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
