// app/page.tsx
import HeroSection from "@/app/components/HeroSection";
import CommunitySection from "@/app/components/CommunitySection";
import ExperimentSection from "@/app/components/ExperimentSection";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperimentSection />
      <CommunitySection />
      <ContactSection />
    </div>
  );
}
