import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CloudRain, Mountain, Flower, Bird, Globe, History, Shield, MapPin } from 'lucide-react';

const researchAreas = [
  {
    icon: CloudRain,
    title: 'Climate Analysis',
    description: 'Japan\'s temperate climate patterns and seasonal variations affecting cherry blossom blooming cycles',
    href: 'climate',
    badge: 'Environmental'
  },
  {
    icon: Mountain,
    title: 'Physical Geography',
    description: 'Island topography, elevation zones, and geographic distribution of sakura species across Japan',
    href: 'geography',
    badge: 'Geographic'
  },
  {
    icon: Flower,
    title: 'Plant Life',
    description: 'Dominant cherry blossom species, their adaptations, and ecological relationships',
    href: 'plant-life',
    badge: 'Botanical'
  },
  {
    icon: Bird,
    title: 'Animal Life',
    description: 'Wildlife species dependent on cherry blossom ecosystems and their behavioral adaptations',
    href: 'animal-life',
    badge: 'Zoological'
  },
  {
    icon: Globe,
    title: 'Abiotic Factors',
    description: 'Soil conditions, temperature ranges, precipitation, and sunlight requirements',
    href: 'abiotic-factors',
    badge: 'Scientific'
  },
  {
    icon: History,
    title: 'Cultural Impact',
    description: 'Historical significance, hanami traditions, and economic importance in Japanese society',
    href: 'cultural-impact',
    badge: 'Cultural'
  },
  {
    icon: Shield,
    title: 'Conservation',
    description: 'Current threats, preservation efforts, and future sustainability challenges',
    href: 'conservation',
    badge: 'Environmental'
  },
  {
    icon: MapPin,
    title: 'Tourism Opportunities',
    description: 'Major viewing locations, seasonal tours, and sustainable tourism practices',
    href: 'tourism',
    badge: 'Tourism'
  }
];

export default function ResearchOverview() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="research-overview" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Comprehensive Biome Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our research covers all essential aspects of Japan's cherry blossom ecosystem, from ecological foundations 
            to cultural significance and conservation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate cursor-pointer transition-all duration-200 h-full"
                onClick={() => scrollToSection(area.href)}
                data-testid={`card-research-${area.href}`}
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-md bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {area.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {area.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full"
                    data-testid={`button-explore-${area.href}`}
                  >
                    Explore Research
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}