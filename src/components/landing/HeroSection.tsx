import { Button } from "@/components/ui/button";
import { Download, Play, Smartphone, Users } from "lucide-react";
import phoneMockup from "@/assets/phone-mockup.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-mesh overflow-hidden pt-20 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-background/90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-dark leading-[1.1] pb-2">
                Contrate os
                <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text pt-1">
                  melhores profissionais de Sinop e região
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-brand-gray max-w-2xl mx-auto lg:mx-0">
                Encontre prestadores de serviços qualificados ou ofereça seus serviços de forma segura e prática.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="xl" className="gap-3">
                <Download className="w-6 h-6" />
                Baixar App
              </Button>
              <Button variant="black" size="xl" className="gap-3">
                <Play className="w-6 h-6" />
                Ver Demo
              </Button>
            </div>

          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 pb-8 lg:pb-0">
            <div className="relative animate-float group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/lovable-uploads/2d396f59-dde5-4d8c-b817-abe6210e10ae.png" 
                alt="Hush App - Interface do Cliente e Prestador" 
                className="relative w-[79vw] sm:w-[48vw] lg:w-[31vw] max-w-none h-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 lg:-ml-[100px]"
              />
              {/* Enhanced floating elements */}
              <div className="absolute -top-8 lg:top-16 -left-8 lg:-left-60 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-glow animate-pulse backdrop-blur-sm bg-primary/90">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span className="font-semibold">Fácil de usar</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-12 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-glow animate-pulse delay-300 backdrop-blur-sm bg-secondary/90">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="font-semibold">Profissionais verificados</span>
                </div>
              </div>
              {/* New floating elements */}
              <div className="absolute top-1 right-12 lg:top-1/3 lg:-right-12 bg-card border border-primary/20 px-3 py-2 rounded-xl shadow-card animate-bounce-subtle backdrop-blur-sm">
                <div className="text-xs font-medium text-primary">⭐ 4.9/5</div>
              </div>
              <div className="absolute bottom-8 lg:bottom-1/3 -left-7 lg:-left-44 bg-card border border-secondary/20 px-3 py-2 rounded-xl shadow-card animate-bounce-subtle delay-700 backdrop-blur-sm">
                <div className="text-xs font-medium text-secondary">💬 Chat seguro</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 lg:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-brand-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-gray rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}