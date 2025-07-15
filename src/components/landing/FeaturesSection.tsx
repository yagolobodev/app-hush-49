import { Shield, Star, MessageCircle, CreditCard, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "Profissionais Verificados",
    description: "Todos os prestadores passam por verificação rigorosa de identidade e qualificações."
  },
  {
    icon: Star,
    title: "Sistema de Avaliações",
    description: "Avalie e seja avaliado. Mantenha a qualidade alta com feedback real dos usuários."
  },
  {
    icon: MessageCircle,
    title: "Chat Integrado",
    description: "Converse diretamente com prestadores após confirmação do pagamento."
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "Pagamentos protegidos com múltiplas opções: cartão, PIX e muito mais."
  },
  {
    icon: Clock,
    title: "Agendamento Flexível",
    description: "Agende serviços no horário que funciona para você, incluindo urgências."
  },
  {
    icon: MapPin,
    title: "Cobertura Local",
    description: "Encontre profissionais na sua região com precisão de localização."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
            Por que escolher o
            <span className="text-primary"> Hush</span>?
          </h2>
          <p className="text-lg sm:text-xl text-brand-gray max-w-3xl mx-auto">
            Oferecemos a plataforma mais completa e segura para conectar clientes e prestadores de serviços.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-shimmer-gradient bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 group-hover:shadow-glow">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-brand-dark transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-3 group-hover:text-brand-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="primary" size="xl" className="gap-3">
            Começar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}