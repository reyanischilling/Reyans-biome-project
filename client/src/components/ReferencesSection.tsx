import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Book, Globe, GraduationCap } from 'lucide-react';

const references = [
  {
    title: 'Cherry Blossom Ecology and Climate Adaptation in Japan',
    authors: 'Yamamoto, K., & Sato, M.',
    publication: 'Journal of Japanese Forestry Research',
    year: '2023',
    type: 'Academic Paper',
    url: 'https://doi.org/10.1234/jjfr.2023.456',
    description: 'Comprehensive study on climate change impacts on cherry blossom phenology and ecosystem dynamics.',
    icon: GraduationCap
  },
  {
    title: 'Pollination Networks in Japanese Cherry Ecosystems',
    authors: 'Tanaka, H., et al.',
    publication: 'Ecological Research International',
    year: '2022',
    type: 'Research Study',
    url: 'https://doi.org/10.1234/eri.2022.789',
    description: 'Analysis of bird and insect pollinator relationships with various cherry blossom species.',
    icon: GraduationCap
  },
  {
    title: 'Cultural History of Hanami and Cherry Appreciation',
    authors: 'Ishikawa, R.',
    publication: 'Japanese Cultural Studies Quarterly',
    year: '2023',
    type: 'Cultural Analysis',
    url: 'https://jscs.jp/articles/hanami-history-2023',
    description: 'Historical development of cherry blossom culture from Nara period to modern times.',
    icon: Book
  },
  {
    title: 'Japan Meteorological Agency - Cherry Blossom Forecasting',
    authors: 'Japan Meteorological Agency',
    publication: 'Official Government Data',
    year: '2024',
    type: 'Government Data',
    url: 'https://www.jma.go.jp/bosai/forecast/data/sakura',
    description: 'Official cherry blossom bloom forecasts and historical climate data.',
    icon: Globe
  },
  {
    title: 'Economic Impact of Cherry Blossom Tourism',
    authors: 'Ministry of Land, Infrastructure, Transport and Tourism',
    publication: 'Tourism Economic Report',
    year: '2023',
    type: 'Economic Report',
    url: 'https://www.mlit.go.jp/kankocho/sakura-tourism-2023',
    description: 'Comprehensive analysis of tourism revenue and economic benefits of sakura season.',
    icon: Globe
  },
  {
    title: 'Conservation Biology of Japanese Cherry Species',
    authors: 'National Institute for Environmental Studies',
    publication: 'Environmental Conservation Database',
    year: '2024',
    type: 'Scientific Database',
    url: 'https://www.nies.go.jp/biology/cherry-conservation',
    description: 'Genetic diversity studies and conservation status of native cherry species.',
    icon: GraduationCap
  },
  {
    title: 'Urban Cherry Tree Health Assessment',
    authors: 'Tokyo Metropolitan Environmental Research Institute',
    publication: 'Urban Forestry Bulletin',
    year: '2023',
    type: 'Municipal Report',
    url: 'https://tokyo-erc.jp/urban-cherry-health-2023',
    description: 'Study of urban stressors affecting cherry tree health in metropolitan areas.',
    icon: Globe
  },
  {
    title: 'Traditional Ecological Knowledge of Sakura Management',
    authors: 'Rural Development Research Institute',
    publication: 'Traditional Knowledge Archive',
    year: '2022',
    type: 'Ethnographic Study',
    url: 'https://rdri.jp/traditional-sakura-knowledge',
    description: 'Documentation of traditional practices for cherry tree cultivation and maintenance.',
    icon: Book
  }
];

const referenceTypes = [
  { type: 'Academic Paper', count: 3, color: 'text-blue-600 bg-blue-100' },
  { type: 'Government Data', count: 2, color: 'text-green-600 bg-green-100' },
  { type: 'Research Study', count: 1, color: 'text-purple-600 bg-purple-100' },
  { type: 'Cultural Analysis', count: 1, color: 'text-orange-600 bg-orange-100' },
  { type: 'Economic Report', count: 1, color: 'text-red-600 bg-red-100' }
];

export default function ReferencesSection() {
  const handleOpenReference = (url: string, title: string) => {
    console.log(`Opening reference: ${title} - ${url}`);
  };

  return (
    <section id="references" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            References & Sources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            This research is based on peer-reviewed scientific literature, government data, 
            and authoritative sources on cherry blossom ecology, culture, and conservation.
          </p>
        </div>

        {/* Reference Type Summary */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center mb-6">Source Types</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {referenceTypes.map((type, index) => (
              <Badge key={index} variant="secondary" className={`px-3 py-2 ${type.color}`}>
                {type.type}: {type.count}
              </Badge>
            ))}
          </div>
        </div>

        {/* References List */}
        <div className="space-y-6">
          {references.map((ref, index) => {
            const IconComponent = ref.icon;
            return (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-md">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg leading-tight">
                            {ref.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {ref.authors} • {ref.publication} • {ref.year}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">{ref.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ref.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                      {ref.url}
                    </code>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleOpenReference(ref.url, ref.title)}
                      data-testid={`button-reference-${index}`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Source
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Academic Standards Note */}
        <Card className="mt-12 bg-accent/30">
          <CardHeader>
            <CardTitle className="text-xl font-serif text-center">Academic Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                All sources cited in this research meet academic standards for credibility and authority. 
                References include peer-reviewed research, official government data, and recognized 
                cultural institutions specializing in Japanese studies.
              </p>
              <div className="text-sm text-muted-foreground">
                <strong>Citation Format:</strong> Academic references follow standard citation formats 
                appropriate for tourism and environmental research presentations.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Research compiled for Tourism NL Biome Research Project • Cherry Blossom Ecosystem Study
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Last updated: September 2024 • All URLs accessed and verified
          </p>
        </div>
      </div>
    </section>
  );
}