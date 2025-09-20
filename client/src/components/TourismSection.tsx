import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Calendar, Phone, Globe, Camera } from 'lucide-react';
import animeNightImage from '@assets/generated_images/Magical_sakura_night_scene_09056e22.png';

const touristOperators = [
  {
    company: 'Sakura Adventure Tours',
    specialization: 'Premium hanami experiences with cultural immersion',
    locations: ['Tokyo', 'Kyoto', 'Nara'],
    rating: 4.8,
    priceRange: '¥15,000-¥35,000',
    contact: '+81-3-5555-0123',
    website: 'sakura-tours.jp',
    features: ['Expert guides', 'Small groups', 'Photography workshops']
  },
  {
    company: 'Cherry Blossom Expeditions',
    specialization: 'Multi-region cherry viewing with botanical focus',
    locations: ['Hokkaido', 'Honshu', 'Kyushu'],
    rating: 4.6,
    priceRange: '¥25,000-¥50,000',
    contact: '+81-6-4444-0456',
    website: 'cb-expeditions.com',
    features: ['Botanical experts', 'Educational focus', '2-week packages']
  },
  {
    company: 'Urban Sakura Walks',
    specialization: 'City-based cherry blossom tours and night illuminations',
    locations: ['Tokyo', 'Osaka'],
    rating: 4.4,
    priceRange: '¥3,000-¥8,000',
    contact: '+81-3-6666-0789',
    website: 'urban-sakura.co.jp',
    features: ['Evening tours', 'Local insights', 'Budget-friendly']
  },
  {
    company: 'Countryside Cherry Tours',
    specialization: 'Rural cherry groves and traditional villages',
    locations: ['Shirakawa-go', 'Takayama', 'Rural Nara'],
    rating: 4.9,
    priceRange: '¥12,000-¥28,000',
    contact: '+81-577-33-1234',
    website: 'countryside-sakura.jp',
    features: ['Traditional ryokan', 'Local culture', 'Off-the-beaten-path']
  }
];

const viewingLocations = [
  {
    name: 'Ueno Park',
    location: 'Tokyo',
    peakSeason: 'Early April',
    treeCount: '1,200+',
    varieties: 'Somei Yoshino, Yamazakura',
    amenities: ['Food stalls', 'Museums', 'Restrooms', 'Parking']
  },
  {
    name: 'Maruyama Park',
    location: 'Kyoto',
    peakSeason: 'Early April',
    treeCount: '800+',
    varieties: 'Shidarezakura, Somei Yoshino',
    amenities: ['Traditional tea houses', 'Shrine', 'Night illumination']
  },
  {
    name: 'Hitachi Seaside Park',
    location: 'Ibaraki',
    peakSeason: 'Late April',
    treeCount: '300+',
    varieties: 'Nemophila & Sakura combo',
    amenities: ['Cycling paths', 'Flower fields', 'Visitor center']
  },
  {
    name: 'Mount Fuji Area',
    location: 'Shizuoka/Yamanashi',
    peakSeason: 'Mid to Late April',
    treeCount: '2,000+',
    varieties: 'Mixed species',
    amenities: ['Mountain views', 'Hot springs', 'Traditional inns']
  }
];

export default function TourismSection() {
  const handleContactOperator = (phone: string) => {
    console.log(`Contacting operator: ${phone}`);
  };

  const handleVisitWebsite = (website: string) => {
    console.log(`Visiting website: ${website}`);
  };

  return (
    <section id="tourism" className="py-16 bg-background relative overflow-hidden">
      {/* Anime night scene background for tourism section */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${animeNightImage})` }}
      ></div>
      <div className="relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Tourism Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience Japan's cherry blossom ecosystems through specialized tours and visits to 
            premier viewing locations, supporting both local economies and conservation efforts.
          </p>
        </div>

        {/* Tourism Operators */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Specialized Tour Operators</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {touristOperators.map((operator, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{operator.company}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{operator.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {operator.specialization}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {operator.locations.map((location, locIndex) => (
                      <Badge key={locIndex} variant="secondary" className="text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {location}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price Range:</span>
                      <span className="font-semibold">{operator.priceRange}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="font-mono text-xs">{operator.contact}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {operator.features.map((feature, featIndex) => (
                      <Badge key={featIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleContactOperator(operator.contact)}
                      data-testid={`button-contact-${index}`}
                    >
                      <Phone className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => handleVisitWebsite(operator.website)}
                      data-testid={`button-website-${index}`}
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      Website
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Viewing Locations */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">Premier Viewing Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {viewingLocations.map((location, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{location.name}</CardTitle>
                    <Badge variant="outline">
                      <MapPin className="h-3 w-3 mr-1" />
                      {location.location}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {location.peakSeason}
                    </div>
                    <div>
                      {location.treeCount} trees
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Cherry Varieties</h4>
                    <p className="text-sm text-muted-foreground">{location.varieties}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.amenities.map((amenity, amenityIndex) => (
                        <Badge key={amenityIndex} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full"
                    onClick={() => console.log(`View details for ${location.name}`)}
                    data-testid={`button-location-${index}`}
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    View Photo Gallery
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainable Tourism */}
        <Card className="bg-accent/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-serif">Sustainable Tourism Guidelines</CardTitle>
            <CardDescription>
              Responsible practices for enjoying cherry blossom ecosystems
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Respect Nature</h4>
                <p className="text-sm text-muted-foreground">Do not climb trees or pick flowers. Stay on designated paths.</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Minimize Impact</h4>
                <p className="text-sm text-muted-foreground">Pack out all trash. Use public transportation when possible.</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Support Conservation</h4>
                <p className="text-sm text-muted-foreground">Choose eco-certified operators. Contribute to preservation funds.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  );
}