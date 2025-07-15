import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Como funciona o pagamento no Hush?",
    answer: "O pagamento é processado de forma segura através da plataforma. O valor fica retido até a conclusão do serviço, garantindo segurança tanto para clientes quanto para prestadores."
  },
  {
    question: "Como os prestadores são verificados?",
    answer: "Todos os prestadores passam por um rigoroso processo de verificação que inclui validação de documentos, referências profissionais e histórico de trabalho."
  },
  {
    question: "Posso cancelar um serviço?",
    answer: "Sim! Você pode cancelar um serviço através do app. Os prestadores têm uma tolerância de 30 minutos para desistência sem penalidades."
  },
  {
    question: "O app é gratuito?",
    answer: "O download e uso básico do app são totalmente gratuitos. Cobramos apenas uma pequena taxa de serviço sobre as transações realizadas."
  },
  {
    question: "Em quais cidades o Hush está disponível?",
    answer: "Estamos expandindo rapidamente! Atualmente atendemos as principais capitais e regiões metropolitanas do Brasil. Consulte a disponibilidade na sua cidade no app."
  },
  {
    question: "Como faço para me tornar um prestador?",
    answer: "Baixe o app, crie sua conta como prestador, complete o processo de verificação e comece a receber solicitações de serviços na sua região!"
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark">
            Perguntas
            <span className="text-primary"> Frequentes</span>
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Tire suas dúvidas sobre o Hush. Se não encontrar a resposta, entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group rounded-2xl border border-border bg-background/50 hover:bg-background transition-all duration-300 hover:shadow-card animate-fade-in-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:text-primary transition-colors"
              >
                <span className="text-lg font-semibold text-brand-dark group-hover:text-primary">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary transition-transform duration-200" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-gray group-hover:text-primary transition-colors duration-200" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6 text-brand-gray leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-card border border-border">
            <div className="text-left">
              <h3 className="font-semibold text-brand-dark mb-1">Ainda tem dúvidas?</h3>
              <p className="text-brand-gray text-sm">Nossa equipe está aqui para ajudar você!</p>
            </div>
            <Button variant="primary" className="gap-2">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}