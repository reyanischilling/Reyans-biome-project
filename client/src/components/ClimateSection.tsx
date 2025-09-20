import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Thermometer, CloudRain, Sun, Wind } from 'lucide-react';

const climateData = [
  {
    season: 'Spring',
    temperature: '10-20°C',
    rainfall: '100-150mm',
    description: 'Peak blooming period with mild temperatures and moderate rainfall',
    icon: Thermometer,
    color: 'bg-green-100 text-green-700'
  },
  {
    season: 'Summer',
    temperature: '25-30°C',
    rainfall: '200-300mm',
    description: 'Hot and humid with heavy rainfall supporting leaf development',
    icon: Sun,
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    season: 'Autumn',
    temperature: '15-25°C',
    rainfall: '150-200mm',
    description: 'Cooler temperatures trigger dormancy preparation',
    icon: Wind,
    color: 'bg-orange-100 text-orange-700'
  },
  {
    season: 'Winter',
    temperature: '0-10°C',
    rainfall: '50-100mm',
    description: 'Cold period essential for breaking dormancy and bud formation',
    icon: CloudRain,
    color: 'bg-blue-100 text-blue-700'
  }
];

export default function ClimateSection() {
  return (
    <section id="climate" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Climate & Weather Patterns
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Japan's temperate climate with distinct seasons creates ideal conditions for cherry blossom ecosystems, 
            with specific temperature and precipitation requirements for optimal growth and flowering.
          </p>
        </div>

        {/* Key Climate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center p-6 bg-background rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">15.4°C</div>
            <div className="text-sm text-muted-foreground">Average Annual Temperature</div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">1,600mm</div>
            <div className="text-sm text-muted-foreground">Annual Precipitation</div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">7.2°C</div>
            <div className="text-sm text-muted-foreground">Chilling Requirement</div>
          </div>
          <div className="text-center p-6 bg-background rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">4-6</div>
            <div className="text-sm text-muted-foreground">Blooming Weeks</div>
          </div>
        </div>

        {/* Seasonal Patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {climateData.map((season, index) => {
            const IconComponent = season.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-md ${season.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">{season.season}</Badge>
                  </div>
                  <CardTitle className="text-xl">{season.season} Climate</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Temperature:</span>
                    <span className="font-semibold">{season.temperature}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Rainfall:</span>
                    <span className="font-semibold">{season.rainfall}</span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {season.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Climate Impact */}
        <Card className="bg-accent/50">
          <CardHeader>
            <CardTitle className="text-2xl font-serif">Climate Impact on Blooming</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Cherry blossoms require a specific sequence of climate conditions to bloom successfully. The trees need 
              a cold winter period (below 7.2°C for 800-1200 hours) to break dormancy, followed by gradually warming 
              spring temperatures to trigger flowering.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Winter Chilling</h4>
                <p className="text-sm text-muted-foreground">Essential cold period breaks bud dormancy</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Spring Warming</h4>
                <p className="text-sm text-muted-foreground">Rising temperatures trigger flower development</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Precipitation</h4>
                <p className="text-sm text-muted-foreground">Adequate moisture supports healthy growth</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}