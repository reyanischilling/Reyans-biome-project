import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import botanicalImage from '@assets/generated_images/Cherry_blossom_botanical_detail_e0127856.png';
import { Leaf, TreePine, FlowerIcon } from 'lucide-react';

const cherrySpecies = [
  {
    scientific: 'Prunus × yedoensis',
    common: 'Yoshino Cherry',
    characteristics: 'Fast-growing, white to pale pink flowers, most common in parks',
    adaptation: 'Tolerates urban pollution, shallow root system',
    blooming: 'Early April',
    distribution: 'Tokyo, Kyoto, nationwide'
  },
  {
    scientific: 'Prunus serrulata',
    common: 'Japanese Cherry',
    characteristics: 'Deep pink flowers, serrated leaves, ornamental bark',
    adaptation: 'Cold-hardy, prefers well-drained soil',
    blooming: 'Mid to late April',
    distribution: 'Northern regions, mountainous areas'
  },
  {
    scientific: 'Prunus speciosa',
    common: 'Oshima Cherry',
    characteristics: 'Large white flowers, early bloomer, fragrant leaves',
    adaptation: 'Salt-tolerant, coastal adaptation',
    blooming: 'Early to mid March',
    distribution: 'Izu Peninsula, coastal regions'
  },
  {
    scientific: 'Prunus sargentii',
    common: 'Sargent Cherry',
    characteristics: 'Single pink flowers, brilliant autumn color',
    adaptation: 'Mountain species, cold-resistant',
    blooming: 'Late April to May',
    distribution: 'Hokkaido, northern Honshu'
  }
];

const adaptations = [
  {
    title: 'Root System',
    description: 'Shallow, spreading roots maximize nutrient uptake in forest floor',
    icon: TreePine
  },
  {
    title: 'Flower Timing',
    description: 'Blooms before leaves emerge to maximize pollinator visibility',
    icon: FlowerIcon
  },
  {
    title: 'Deciduous Strategy',
    description: 'Seasonal leaf drop conserves energy during harsh winters',
    icon: Leaf
  }
];

export default function PlantLifeSection() {
  return (
    <section id="plant-life" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Dominant Plant Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cherry blossom trees represent one of Japan's most iconic plant communities, 
            with over 200 varieties showing remarkable adaptations to diverse environments.
          </p>
        </div>

        {/* Botanical Detail Image */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-0">
                <img 
                  src={botanicalImage} 
                  alt="Cherry blossom botanical detail showing flowers, buds, and leaves"
                  className="w-full h-full object-cover min-h-[300px]"
                />
              </div>
              <div className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-serif">Botanical Characteristics</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-1">Flowers</h4>
                      <p className="text-sm">5-petaled, white to deep pink, arranged in clusters of 2-5 blooms</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-1">Leaves</h4>
                      <p className="text-sm">Alternate, serrated edges, emerge after flowering</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-1">Bark</h4>
                      <p className="text-sm">Smooth, reddish-brown with distinctive horizontal lenticels</p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>

        {/* Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cherrySpecies.map((species, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">{species.blooming}</Badge>
                  <Badge variant="secondary" className="text-xs">Native</Badge>
                </div>
                <CardTitle className="text-xl">{species.common}</CardTitle>
                <CardDescription className="italic text-sm">
                  {species.scientific}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1">Characteristics</h4>
                  <p className="text-sm text-muted-foreground">{species.characteristics}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Adaptation</h4>
                  <p className="text-sm text-muted-foreground">{species.adaptation}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">Distribution</h4>
                  <p className="text-sm text-muted-foreground">{species.distribution}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Adaptations */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Special Adaptations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adaptations.map((adaptation, index) => {
              const IconComponent = adaptation.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-3">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{adaptation.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {adaptation.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}