import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

const navItems = [
  { label: 'Overview', href: 'research-overview' },
  { label: 'Climate', href: 'climate' },
  { label: 'Geography', href: 'geography' },
  { label: 'Plant Life', href: 'plant-life' },
  { label: 'Animal Life', href: 'animal-life' },
  { label: 'Cultural Impact', href: 'cultural-impact' },
  { label: 'Conservation', href: 'conservation' },
  { label: 'Tourism', href: 'tourism' },
  { label: 'References', href: 'references' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Flower2 className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
              <span className={`text-xl font-serif font-semibold ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                Sakura Research
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`${isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'}`}
                  data-testid={`nav-${item.href}`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(item.href)}
                className="text-xl"
                data-testid={`mobile-nav-${item.href}`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}