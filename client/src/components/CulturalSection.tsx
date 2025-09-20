import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import cultureImage from '@assets/generated_images/Hanami_festival_cultural_scene_5e36df3a.png';
import urbanImage from '@assets/generated_images/Urban_cherry_blossom_challenges_c5a61c78.png';
import animeFestivalImage from '@assets/generated_images/Cherry_blossom_festival_scene_64a41e7e.png';
import animeUrbanImage from '@assets/generated_images/Urban_sakura_street_scene_37f88e60.png';
import abstractSakuraPattern from '@assets/generated_images/Abstract_sakura_pattern_design_4cbc47a1.png';
import { Calendar, TrendingUp, Users, AlertTriangle } from 'lucide-react';

const culturalAspects = [
  {
    period: 'Nara Period (710-794)',
    significance: 'Cherry blossoms first celebrated in imperial poetry and court ceremonies',
    impact: 'Established cultural foundation for sakura appreciation'
  },
  {
    period: 'Heian Period (794-1185)',
    significance: 'Hanami tradition formalized among aristocracy, featured in literature',
    impact: 'Created aesthetic and spiritual connection to seasonal cycles'
  },
  {
    period: 'Edo Period (1603-1867)',
    significance: 'Commoners adopted hanami, public parks established for viewing',
    impact: 'Democratized cherry blossom culture across social classes'
  },
  {
    period: 'Modern Era (1868-present)',
    significance: 'National symbol, tourism industry, international cultural export',
    impact: 'Economic value exceeds ¥600 billion annually'
  }
];

const economicImpacts = [
  { metric: '¥600+ Billion', description: 'Annual tourism revenue during sakura season' },
  { metric: '60 Million', description: 'Domestic tourists during peak bloom period' },
  { metric: '2.5 Million', description: 'International visitors for hanami festivals' },
  { metric: '200,000+', description: 'Jobs directly supported by sakura tourism' }
];

const currentIssues = [
  {
    title: 'Urban Development',
    description: 'Construction and urbanization threaten traditional viewing sites',
    severity: 'high'
  },
  {
    title: 'Climate Change',
    description: 'Shifting bloom times disrupt tourism schedules and cultural events',
    severity: 'high'
  },
  {
    title: 'Overtourism',
    description: 'Popular locations suffer from overcrowding and environmental damage',
    severity: 'medium'
  },
  {
    title: 'Aging Trees',
    description: 'Many historic cherry trees require replacement and maintenance',
    severity: 'medium'
  }
];

export default function CulturalSection() {
  return (
    <section id="cultural-impact" className="py-16 bg-background relative overflow-hidden">
      {/* Subtle anime pattern background */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${abstractSakuraPattern})` }}
      ></div>
      <div className="relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Cultural Impact & Human Interaction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cherry blossoms are deeply woven into Japanese culture, economics, and identity, 
            representing both natural beauty and the ephemeral nature of life.
          </p>
        </div>

        {/* Cultural Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden">
            <div className="p-0">
              <img 
                src={animeFestivalImage} 
                alt="Anime-style cherry blossom festival scene with traditional celebrations"
                className="w-full h-64 object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-serif">Hanami Tradition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                The centuries-old tradition of hanami (flower viewing) brings communities together 
                to appreciate the fleeting beauty of cherry blossoms, symbolizing the Buddhist 
                concept of mono no aware—the bittersweet awareness of impermanence.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="p-0">
              <img 
                src={animeUrbanImage} 
                alt="Anime-style urban cherry blossom street scene in modern Japan"
                className="w-full h-64 object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-serif">Urban Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Modern urban development creates stress for cherry trees through limited root space, 
                pollution, and soil compaction, while the growing popularity of hanami brings 
                both economic benefits and environmental pressures.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Historical Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Historical Development</h3>
          <div className="space-y-6">
            {culturalAspects.map((aspect, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-serif">{aspect.period}</CardTitle>
                    <Badge variant="outline">
                      <Calendar className="h-3 w-3 mr-1" />
                      Historical
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Cultural Significance</h4>
                    <p className="text-sm text-muted-foreground">{aspect.significance}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Impact</h4>
                    <p className="text-sm text-muted-foreground">{aspect.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Economic Impact */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Economic Importance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {economicImpacts.map((impact, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">{impact.metric}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs leading-tight">
                    {impact.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-accent/30">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground leading-relaxed">
                The cherry blossom season drives one of Japan's most significant seasonal tourism booms, 
                supporting everything from hotels and restaurants to specialized tour operators and 
                traditional crafts related to sakura culture.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Current Issues */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Current Issues & Controversies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentIssues.map((issue, index) => (
              <Card key={index} className={`border-l-4 ${
                issue.severity === 'high' ? 'border-l-destructive' : 'border-l-yellow-500'
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center">
                      <AlertTriangle className={`h-5 w-5 mr-2 ${
                        issue.severity === 'high' ? 'text-destructive' : 'text-yellow-500'
                      }`} />
                      {issue.title}
                    </CardTitle>
                    <Badge variant={issue.severity === 'high' ? 'destructive' : 'secondary'}>
                      {issue.severity === 'high' ? 'Critical' : 'Moderate'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {issue.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}