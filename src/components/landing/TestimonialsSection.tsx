import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente Satisfeita",
    content: "Encontrei um eletricista incrível através do Hush! O serviço foi rápido, profissional e o preço justo. Recomendo muito!",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "João Santos",
    role: "Prestador de Serviços",
    content: "Como encanador, o Hush me conectou com dezenas de novos clientes. A plataforma é segura e os pagamentos sempre chegam em dia.",
    rating: 5,
    avatar: "JS"
  },
  {
    name: "Ana Costa",
    role: "Cliente Satisfeita", 
    content: "Precisava de um pintor urgente e encontrei no Hush. O profissional chegou no mesmo dia e fez um trabalho excepcional!",
    rating: 5,
    avatar: "AC"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-12 sm:mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark">
            O que nossos usuários
            <span className="text-primary"> dizem</span>
          </h2>
          <p className="text-lg sm:text-xl text-brand-gray max-w-3xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com o Hush. Veja alguns depoimentos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="group relative p-6 sm:p-8 rounded-3xl bg-card border border-border hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in-scale"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-brand-gray leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-bold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                  <div className="text-sm text-brand-gray">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-border">
          <div className="text-center animate-bounce-subtle">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm sm:text-base text-brand-gray">Satisfação</div>
          </div>
          <div className="text-center animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm sm:text-base text-brand-gray">Tempo Médio</div>
          </div>
          <div className="text-center animate-bounce-subtle" style={{ animationDelay: '1s' }}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">+50k</div>
            <div className="text-sm sm:text-base text-brand-gray">Serviços</div>
          </div>
          <div className="text-center animate-bounce-subtle" style={{ animationDelay: '1.5s' }}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-sm sm:text-base text-brand-gray">Avaliação</div>
          </div>
        </div>
      </div>
    </section>
  );
}