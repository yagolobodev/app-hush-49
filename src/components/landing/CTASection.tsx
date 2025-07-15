import { Button } from "@/components/ui/button";
import { Download, Smartphone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-float-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/15 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-1400"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Pronto para começar?
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
            Junte-se a milhares de usuários que já encontraram a solução perfeita para suas necessidades domésticas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <div className="text-center group">
              <Button variant="outline" size="xl" className="gap-3 bg-white text-brand-dark hover:bg-white/95 border-white hover:shadow-glow transition-all duration-300 hover:scale-105">
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                Para Clientes
              </Button>
              <p className="text-white/80 text-sm mt-2 group-hover:text-white transition-colors">Encontre profissionais qualificados</p>
            </div>
            
            <div className="text-white/60 text-lg hidden sm:block animate-pulse">ou</div>
            
            <div className="text-center group">
              <Button variant="outline" size="xl" className="gap-3 bg-white text-brand-dark hover:bg-white/95 border-white hover:shadow-glow transition-all duration-300 hover:scale-105">
                <Smartphone className="w-6 h-6 group-hover:animate-bounce" />
                Para Prestadores
              </Button>
              <p className="text-white/80 text-sm mt-2 group-hover:text-white transition-colors">Ofereça seus serviços</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-6">
            <span className="text-white/80">Disponível para</span>
            <div className="flex gap-4">
              <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-2xl">📱</span>
                <span className="text-white font-medium">iOS</span>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <span className="text-white font-medium">Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-float delay-500"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
    </section>
  );
}