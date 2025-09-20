import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mountain, Map, Compass, Waves } from 'lucide-react';

const geographicRegions = [
  {
    region: 'Honshu Island',
    area: '230,510 km²',
    elevation: 'Sea level to 3,776m (Mt. Fuji)',
    climate: 'Temperate, four distinct seasons',
    cherrySpecies: 'Somei Yoshino, Yamazakura, Shidarezakura',
    peakBloom: 'Late March to Early May',
    characteristics: 'Largest island with diverse elevation zones supporting multiple cherry species',
    icon: Mountain
  },
  {
    region: 'Kyushu Island',
    area: '36,782 km²',
    elevation: 'Sea level to 1,791m',
    climate: 'Subtropical to temperate',
    cherrySpecies: 'Kawazu-zakura, Oshima-zakura',
    peakBloom: 'February to April',
    characteristics: 'Southernmost region with earliest blooming and heat-adapted varieties',
    icon: Compass
  },
  {
    region: 'Shikoku Island',
    area: '18,297 km²',
    elevation: 'Sea level to 1,982m',
    climate: 'Temperate maritime',
    cherrySpecies: 'Yoshino Cherry, Mountain Cherry',
    peakBloom: 'Late March to Mid April',
    characteristics: 'Mountainous terrain with diverse microclimates for cherry adaptation',
    icon: Mountain
  },
  {
    region: 'Hokkaido Island',
    area: '83,424 km²',
    elevation: 'Sea level to 2,291m',
    climate: 'Cool temperate to subarctic',
    cherrySpecies: 'Chishima-zakura, Ezo-yamazakura',
    peakBloom: 'Late April to June',
    characteristics: 'Northern region with cold-adapted species and extended blooming season',
    icon: Waves
  }
];

const elevationZones = [
  {
    zone: 'Coastal (0-100m)',
    characteristics: 'Mild winters, early blooming, urban varieties',
    species: 'Somei Yoshino, Oshima-zakura',
    challenges: 'Salt spray, urban pollution'
  },
  {
    zone: 'Lowlands (100-500m)',
    characteristics: 'Optimal growing conditions, diverse species',
    species: 'Most cultivated varieties',
    challenges: 'Human development pressure'
  },
  {
    zone: 'Foothills (500-1000m)',
    characteristics: 'Cooler temperatures, later blooming',
    species: 'Mountain cherry, wild varieties',
    challenges: 'Frost risk, shorter growing season'
  },
  {
    zone: 'Mountains (1000m+)',
    characteristics: 'Cold-adapted species, specialized habitats',
    species: 'Alpine cherry varieties',
    challenges: 'Extreme weather, limited accessibility'
  }
];

const distributionPatterns = [
  {
    pattern: 'Latitudinal Gradient',
    description: 'Cherry species diversity decreases from south to north, with blooming times shifting later'
  },
  {
    pattern: 'Elevational Zonation',
    description: 'Different species occupy distinct elevation bands based on temperature tolerance'
  },
  {
    pattern: 'Island Biogeography',
    description: 'Each major island has endemic varieties adapted to local conditions'
  },
  {
    pattern: 'Urban Distribution',
    description: 'Cultivated varieties concentrated in cities and parks, often non-native to the region'
  }
];

export default function GeographySection() {
  return (
    <section id="geography" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Physical Geography
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Japan's archipelago geography creates diverse environments supporting distinct 
            cherry blossom communities across islands, elevations, and climate zones.
          </p>
        </div>

        {/* Geographic Overview */}
        <div className="mb-12">
          <Card className="bg-accent/20">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">6,852</div>
                  <div className="text-sm text-muted-foreground">Total Islands</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">377,975</div>
                  <div className="text-sm text-muted-foreground">Total Area (km²)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Cherry Varieties</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">3,776m</div>
                  <div className="text-sm text-muted-foreground">Highest Point</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Major Islands */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Major Island Regions</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {geographicRegions.map((region, index) => {
              const IconComponent = region.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{region.peakBloom}</Badge>
                    </div>
                    <CardTitle className="text-xl">{region.region}</CardTitle>
                    <CardDescription className="text-sm">
                      Area: {region.area} • Elevation: {region.elevation}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Climate</h4>
                      <p className="text-sm text-muted-foreground">{region.climate}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Cherry Species</h4>
                      <p className="text-sm text-muted-foreground">{region.cherrySpecies}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Characteristics</h4>
                      <p className="text-sm text-muted-foreground">{region.characteristics}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Elevation Zones */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Elevational Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elevationZones.map((zone, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{zone.zone}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Characteristics</h4>
                    <p className="text-sm text-muted-foreground">{zone.characteristics}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Typical Species</h4>
                    <p className="text-sm text-muted-foreground">{zone.species}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Challenges</h4>
                    <p className="text-sm text-muted-foreground">{zone.challenges}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Distribution Patterns */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Distribution Patterns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {distributionPatterns.map((pattern, index) => (
              <Card key={index} className="bg-card border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Map className="h-5 w-5 mr-2 text-primary" />
                    {pattern.pattern}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {pattern.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Geographic Summary */}
        <Card className="mt-12 bg-accent/30">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">Geographic Influence on Cherry Ecosystems</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Japan's diverse geography - from subtropical Kyushu to subarctic Hokkaido, from coastal plains 
              to alpine peaks - creates a natural laboratory for cherry species evolution and adaptation. 
              This geographic diversity supports the world's richest cherry blossom ecosystems and cultural traditions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}