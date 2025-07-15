import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img 
              src="/lovable-uploads/55037222-4e9b-4806-8459-522f5cf7f0f5.png" 
              alt="Hush Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Description */}
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            A plataforma que conecta você aos melhores profissionais da sua região de forma rápida e confiável.
          </p>

          {/* CTA Button */}
          <Button className="bg-primary text-brand-dark hover:bg-primary/90 hover:text-brand-dark font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-button">
            <MessageCircle className="w-5 h-5 mr-2" />
            Suporte WhatsApp
          </Button>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-white/70">
            <a href="#" className="hover:text-primary transition-colors duration-300 hover:scale-105">Sobre Nós</a>
            <a href="#" className="hover:text-primary transition-colors duration-300 hover:scale-105">Contato</a>
            <a href="/privacidade" className="hover:text-primary transition-colors duration-300 hover:scale-105">Privacidade</a>
            <a href="/termos" className="hover:text-primary transition-colors duration-300 hover:scale-105">Termos</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/50">
              © 2025 Hush. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-white/50">
              <a href="/privacidade" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}