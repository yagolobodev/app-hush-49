import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/628b32c4-1928-418e-9f30-774da53aaa69.png" 
              alt="Hush Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-brand-gray hover:text-brand-dark transition-colors">
              Início
            </a>
            <a href="#como-funciona" className="text-brand-gray hover:text-brand-dark transition-colors">
              Como Funciona
            </a>
            <a href="#recursos" className="text-brand-gray hover:text-brand-dark transition-colors">
              Recursos
            </a>
            <a href="#contato" className="text-brand-gray hover:text-brand-dark transition-colors">
              Contato
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary">
              Baixar App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="minimal" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-brand-gray hover:text-brand-dark transition-colors py-2">
                Início
              </a>
              <a href="#como-funciona" className="text-brand-gray hover:text-brand-dark transition-colors py-2">
                Como Funciona
              </a>
              <a href="#recursos" className="text-brand-gray hover:text-brand-dark transition-colors py-2">
                Recursos
              </a>
              <a href="#contato" className="text-brand-gray hover:text-brand-dark transition-colors py-2">
                Contato
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="primary">
                  Baixar App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}