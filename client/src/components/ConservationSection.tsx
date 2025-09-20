import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Leaf, Users, Target, ArrowRight } from 'lucide-react';

const threats = [
  {
    title: 'Climate Change',
    description: 'Rising temperatures alter blooming patterns and threaten cold-adapted species',
    severity: 'Critical',
    status: 'Ongoing'
  },
  {
    title: 'Urban Development',
    description: 'Construction and infrastructure development fragments natural habitats',
    severity: 'High',
    status: 'Increasing'
  },
  {
    title: 'Invasive Species',
    description: 'Non-native plants and pests compete with native cherry ecosystems',
    severity: 'Moderate',
    status: 'Monitored'
  },
  {
    title: 'Pollution',
    description: 'Air and soil pollution stress urban cherry populations',
    severity: 'Moderate',
    status: 'Ongoing'
  }
];

const preservationEfforts = [
  {
    initiative: 'National Cherry Preservation Program',
    description: 'Government-funded protection of historic and culturally significant cherry groves',
    funding: '¥2.5 billion annually',
    scope: 'Nationwide',
    icon: Shield
  },
  {
    initiative: 'Community Planting Projects',
    description: 'Local groups plant and maintain cherry trees in urban and suburban areas',
    funding: 'Crowdfunded + Municipal',
    scope: '500+ communities',
    icon: Users
  },
  {
    initiative: 'Research & Monitoring',
    description: 'Scientific studies on climate adaptation and genetic diversity preservation',
    funding: 'University partnerships',
    scope: '15 research institutions',
    icon: Target
  },
  {
    initiative: 'Sustainable Tourism',
    description: 'Guidelines and infrastructure to minimize visitor impact on cherry ecosystems',
    funding: 'Tourism industry',
    scope: 'Major viewing sites',
    icon: Leaf
  }
];

const futureSteps = [
  'Develop climate-resilient cherry varieties through selective breeding programs',
  'Create wildlife corridors connecting fragmented cherry habitats',
  'Implement smart irrigation systems in urban cherry plantings',
  'Establish seed banks for genetic diversity preservation',
  'Educate tourists and locals about sustainable hanami practices',
  'Monitor and control invasive species in cherry ecosystems'
];

export default function ConservationSection() {
  const handleLearnMore = () => {
    console.log('Learn more about conservation clicked');
  };

  return (
    <section id="conservation" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Conservation & Preservation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protecting Japan's cherry blossom ecosystems requires coordinated efforts addressing 
            climate change, habitat preservation, and sustainable tourism practices.
          </p>
        </div>

        {/* Current Threats */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Current Threats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => (
              <Card key={index} className={`border-l-4 ${
                threat.severity === 'Critical' ? 'border-l-destructive' : 
                threat.severity === 'High' ? 'border-l-orange-500' : 'border-l-yellow-500'
              }`}>
                <CardHeader>
                  <CardTitle className="text-lg">{threat.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge variant={
                      threat.severity === 'Critical' ? 'destructive' : 
                      threat.severity === 'High' ? 'secondary' : 'outline'
                    }>
                      {threat.severity}
                    </Badge>
                    <Badge variant="outline">{threat.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {threat.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Preservation Efforts */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Current Preservation Efforts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {preservationEfforts.map((effort, index) => {
              const IconComponent = effort.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{effort.scope}</Badge>
                    </div>
                    <CardTitle className="text-xl">{effort.initiative}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="leading-relaxed">
                      {effort.description}
                    </CardDescription>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Funding:</span>
                      <span className="font-semibold">{effort.funding}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Future Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Future Conservation Steps</h3>
          <Card className="bg-accent/30">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Recommended Actions</CardTitle>
              <CardDescription>
                Priority initiatives for long-term cherry blossom ecosystem preservation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {futureSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                      {index + 1}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif flex items-center justify-center">
              <Shield className="h-6 w-6 mr-2 text-primary" />
              Why Preservation Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cherry blossom ecosystems represent irreplaceable natural and cultural heritage. 
              Their preservation ensures future generations can experience both the ecological 
              benefits and cultural traditions that have shaped Japanese society for over a millennium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                onClick={handleLearnMore}
                data-testid="button-learn-conservation"
              >
                Learn More About Conservation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => console.log('Support efforts clicked')}
                data-testid="button-support-efforts"
              >
                Support Preservation Efforts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}