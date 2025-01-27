// app/page.tsx
import HeroSection from "@/app/components/HeroSection";
import CommunitySection from "@/app/components/CommunitySection";
import ExperimentSection from "@/app/components/ExperimentSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperimentSection />
      <CommunitySection />
    </div>
  );
}
