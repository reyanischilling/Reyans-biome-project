import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Thermometer, CloudRain, Sun, TreePine, Beaker, Mountain } from 'lucide-react';

const abioticFactors = [
  {
    factor: 'Temperature',
    optimalRange: '10-25°C growing season, 0-7°C dormancy period',
    importance: 'Critical for blooming timing and bud break',
    tolerance: 'Hardy to -20°C, stressed above 35°C',
    icon: Thermometer,
    color: 'bg-red-100 text-red-700'
  },
  {
    factor: 'Precipitation',
    optimalRange: '1,200-1,800mm annually, well-distributed',
    importance: 'Essential for growth and flower development',
    tolerance: 'Drought-tolerant once established, flooding sensitive',
    icon: CloudRain,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    factor: 'Soil pH',
    optimalRange: '6.0-7.0 (slightly acidic to neutral)',
    importance: 'Affects nutrient availability and root health',
    tolerance: 'pH 5.5-7.5 acceptable, sensitive below 5.0',
    icon: Beaker,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    factor: 'Sunlight',
    optimalRange: '6-8 hours direct sunlight daily',
    importance: 'Required for photosynthesis and flowering',
    tolerance: 'Partial shade tolerant, poor flowering in deep shade',
    icon: Sun,
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    factor: 'Soil Drainage',
    optimalRange: 'Well-draining, moist but not waterlogged',
    importance: 'Prevents root rot and fungal diseases',
    tolerance: 'Intolerant of standing water for >24 hours',
    icon: TreePine,
    color: 'bg-green-100 text-green-700'
  },
  {
    factor: 'Elevation',
    optimalRange: 'Sea level to 1,500m elevation',
    importance: 'Affects temperature and growing conditions',
    tolerance: 'Some species adapted to 2,000m+ elevations',
    icon: Mountain,
    color: 'bg-gray-100 text-gray-700'
  }
];

const soilRequirements = [
  {
    nutrient: 'Nitrogen (N)',
    requirement: 'Moderate',
    function: 'Leaf and stem growth',
    deficiencySymptoms: 'Yellowing leaves, stunted growth'
  },
  {
    nutrient: 'Phosphorus (P)',
    requirement: 'Low to Moderate',
    function: 'Root development, flowering',
    deficiencySymptoms: 'Poor flower production, purplish leaves'
  },
  {
    nutrient: 'Potassium (K)',
    requirement: 'Moderate',
    function: 'Disease resistance, winter hardiness',
    deficiencySymptoms: 'Brown leaf edges, weak branches'
  },
  {
    nutrient: 'Calcium (Ca)',
    requirement: 'High',
    function: 'Cell wall structure, pH buffering',
    deficiencySymptoms: 'Leaf distortion, poor root growth'
  }
];

export default function AbioticFactorsSection() {
  return (
    <section id="abiotic-factors" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Abiotic Factors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cherry blossom ecosystems depend on specific non-living environmental conditions 
            including temperature, precipitation, soil chemistry, and light availability.
          </p>
        </div>

        {/* Environmental Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {abioticFactors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg ${factor.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary">Essential</Badge>
                  </div>
                  <CardTitle className="text-xl">{factor.factor}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Optimal Range</h4>
                    <p className="text-sm text-muted-foreground">{factor.optimalRange}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Importance</h4>
                    <p className="text-sm text-muted-foreground">{factor.importance}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Tolerance Range</h4>
                    <p className="text-sm text-muted-foreground">{factor.tolerance}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soil Chemistry */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Soil Nutrient Requirements</h3>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Essential Soil Nutrients</CardTitle>
              <CardDescription>
                Macronutrient requirements for healthy cherry blossom growth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {soilRequirements.map((nutrient, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{nutrient.nutrient}</h4>
                      <Badge variant={
                        nutrient.requirement === 'High' ? 'destructive' : 
                        nutrient.requirement === 'Moderate' ? 'secondary' : 'outline'
                      }>
                        {nutrient.requirement}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{nutrient.function}</p>
                    <div className="text-xs text-muted-foreground">
                      <strong>Deficiency:</strong> {nutrient.deficiencySymptoms}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environmental Interactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-accent/30">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Seasonal Adaptations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Winter Dormancy</h4>
                  <p className="text-sm text-muted-foreground">
                    Requires 800-1200 chilling hours below 7°C to break bud dormancy
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Spring Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Responds to accumulated heat units (Growing Degree Days) for bloom timing
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Summer Growth</h4>
                  <p className="text-sm text-muted-foreground">
                    Peak photosynthesis requires adequate soil moisture and nutrients
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Stress Factors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Urban Stressors</h4>
                  <p className="text-sm text-muted-foreground">
                    Air pollution, soil compaction, limited root space, heat island effect
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Climate Extremes</h4>
                  <p className="text-sm text-muted-foreground">
                    Late frost damage, extended drought, extreme heat events
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Soil Issues</h4>
                  <p className="text-sm text-muted-foreground">
                    Poor drainage, salt contamination, nutrient depletion
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}