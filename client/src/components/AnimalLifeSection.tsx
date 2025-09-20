import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import birdImage from '@assets/generated_images/Bird_cherry_blossom_ecosystem_22358532.png';
import { Bird, Bug, Squirrel } from 'lucide-react';

const animalSpecies = [
  {
    scientific: 'Zosterops japonicus',
    common: 'Japanese White-eye',
    role: 'Primary pollinator',
    adaptation: 'Specialized curved beak for nectar feeding, travels in flocks during blooming season',
    tolerance: 'Temperature: 0-35°C, Elevation: 0-2000m',
    icon: Bird,
    status: 'Common'
  },
  {
    scientific: 'Parus minor',
    common: 'Japanese Tit',
    role: 'Seed disperser',
    adaptation: 'Caches seeds in bark crevices, strong beak for breaking open cherry pits',
    tolerance: 'Temperature: -15-30°C, Forest density: 40-80% canopy cover',
    icon: Bird,
    status: 'Stable'
  },
  {
    scientific: 'Apis cerana japonica',
    common: 'Japanese Honeybee',
    role: 'Pollinator',
    adaptation: 'Active at cooler temperatures, efficient pollen collection from cherry flowers',
    tolerance: 'Temperature: 8-30°C, Humidity: 50-80%',
    icon: Bug,
    status: 'Declining'
  },
  {
    scientific: 'Sciurus lis',
    common: 'Japanese Squirrel',
    role: 'Seed disperser',
    adaptation: 'Hoards cherry seeds, contributes to forest regeneration',
    tolerance: 'Temperature: -10-25°C, Requires 60%+ forest cover',
    icon: Squirrel,
    status: 'Near Threatened'
  }
];

const ecologicalConnections = [
  {
    title: 'Pollination Network',
    description: 'Birds, bees, and butterflies form complex pollination relationships with different cherry species'
  },
  {
    title: 'Seed Dispersal',
    description: 'Mammals and birds transport seeds to new locations, enabling forest expansion'
  },
  {
    title: 'Seasonal Migration',
    description: 'Many species time their migration to coincide with peak cherry blossom season'
  }
];

export default function AnimalLifeSection() {
  return (
    <section id="animal-life" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Animal Life & Adaptations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cherry blossom ecosystems support diverse wildlife communities, with many species showing 
            specialized adaptations for exploiting the brief but abundant flowering period.
          </p>
        </div>

        {/* Featured Species Image */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-0">
                <img 
                  src={birdImage} 
                  alt="Japanese White-eye bird feeding on cherry blossom nectar"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-serif">Japanese White-eye</CardTitle>
                  <CardDescription className="italic">Zosterops japonicus</CardDescription>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <Badge variant="secondary">Primary Pollinator</Badge>
                  <p className="text-muted-foreground leading-relaxed">
                    The Japanese White-eye is crucial to cherry blossom ecosystems, with its curved beak 
                    perfectly adapted for reaching deep into flowers for nectar. These social birds move 
                    in flocks of 10-20, efficiently transferring pollen between trees.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">Range of Tolerance:</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      • Temperature: 0-35°C<br />
                      • Elevation: Sea level to 2,000m<br />
                      • Habitat: Mixed forests with 40-90% canopy cover
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {animalSpecies.map((species, index) => {
            const IconComponent = species.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">{species.role}</Badge>
                      <Badge 
                        variant={species.status === 'Common' ? 'default' : species.status === 'Stable' ? 'secondary' : 'destructive'} 
                        className="text-xs"
                      >
                        {species.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{species.common}</CardTitle>
                  <CardDescription className="italic text-sm">
                    {species.scientific}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Adaptations</h4>
                    <p className="text-sm text-muted-foreground">{species.adaptation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Range of Tolerance</h4>
                    <p className="text-sm text-muted-foreground">{species.tolerance}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Ecological Connections */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Ecological Relationships</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ecologicalConnections.map((connection, index) => (
              <Card key={index} className="text-center bg-accent/30">
                <CardHeader>
                  <CardTitle className="text-lg">{connection.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {connection.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conservation Note */}
        <Card className="mt-12 bg-destructive/5 border-destructive/20">
          <CardHeader>
            <CardTitle className="text-xl font-serif flex items-center">
              <Bug className="h-5 w-5 mr-2 text-destructive" />
              Conservation Concern
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Several key species in cherry blossom ecosystems face declining populations due to habitat 
              fragmentation, pesticide use, and climate change. The Japanese Honeybee, in particular, 
              has experienced significant population declines, affecting pollination services critical 
              to both wild and cultivated cherry trees.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}