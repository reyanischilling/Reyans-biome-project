import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ResearchOverview from '@/components/ResearchOverview';
import ClimateSection from '@/components/ClimateSection';
import GeographySection from '@/components/GeographySection';
import PlantLifeSection from '@/components/PlantLifeSection';
import AnimalLifeSection from '@/components/AnimalLifeSection';
import AbioticFactorsSection from '@/components/AbioticFactorsSection';
import CulturalSection from '@/components/CulturalSection';
import ConservationSection from '@/components/ConservationSection';
import TourismSection from '@/components/TourismSection';
import ReferencesSection from '@/components/ReferencesSection';
import ThemeToggle from '@/components/ThemeToggle';

export default function CherryBlossomResearch() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
      </div>
      
      <main>
        <HeroSection />
        <ResearchOverview />
        <ClimateSection />
        <GeographySection />
        <PlantLifeSection />
        <AnimalLifeSection />
        <AbioticFactorsSection />
        <CulturalSection />
        <ConservationSection />
        <TourismSection />
        <ReferencesSection />
      </main>
      
    </div>
  );
}