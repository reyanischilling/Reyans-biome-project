import heroImage from '@assets/generated_images/Cherry_blossom_landscape_hero_7112c7f6.png';
import animeHeroImage from '@assets/generated_images/Anime_cherry_blossom_garden_80d6a014.png';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToResearch = () => {
    document.getElementById('research-overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Anime Hero Background with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${animeHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          Cherry Blossom Biome
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light">
          Exploring Japan's magnificent sakura ecosystems - their ecology, cultural significance, and conservation needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToResearch}
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-explore-research"
          >
            Explore Research
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg"
            className="bg-primary border-primary-border text-primary-foreground"
            onClick={() => document.getElementById('tourism')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-visit-locations"
          >
            Visit Locations
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
}