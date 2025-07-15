import { Search, MessageSquare, CheckCircle, Heart } from "lucide-react";
import womanUsingApp from "@/assets/woman-using-app.jpg";

const steps = [
  {
    icon: Search,
    title: "Encontre o Profissional",
    description: "Busque por categoria ou localização e compare perfis verificados."
  },
  {
    icon: MessageSquare,
    title: "Solicite Orçamento",
    description: "Descreva seu projeto e receba propostas personalizadas."
  },
  {
    icon: CheckCircle,
    title: "Escolha e Pague",
    description: "Compare propostas, escolha a melhor e efetue o pagamento seguro."
  },
  {
    icon: Heart,
    title: "Avalie a Experiência",
    description: "Após a conclusão, avalie o profissional e compartilhe sua experiência."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
            Como funciona?
          </h2>
          <p className="text-lg sm:text-xl text-brand-gray max-w-3xl mx-auto">
            Em apenas 4 passos simples, você resolve suas necessidades domésticas com total segurança.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="flex gap-4 sm:gap-6 items-start group animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-2xl font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-brand-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img 
                src={womanUsingApp} 
                alt="Mulher usando o app Hush com satisfação" 
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card border border-border rounded-2xl p-4 sm:p-6 shadow-lg animate-float">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-brand-dark">Serviço Concluído</div>
                  <div className="text-xs sm:text-sm text-brand-gray">Avaliação: ⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}