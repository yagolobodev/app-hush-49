import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            Termos de Uso
          </h1>
          <p className="text-gray-600">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="mb-4">
              Ao usar o Hush, você concorda com estes termos de uso. Se não concordar, não use nossos serviços. Estes termos se aplicam a todos os usuários da plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              2. Descrição do Serviço
            </h2>
            <p className="mb-4">
              O Hush é uma plataforma digital que conecta clientes com prestadores de serviços qualificados. Oferecemos:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Busca e contratação de serviços profissionais</li>
              <li>Sistema de avaliações e recomendações</li>
              <li>Processamento de pagamentos</li>
              <li>Suporte ao cliente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              3. Cadastro e Conta do Usuário
            </h2>
            <p className="mb-4">
              Para usar nossos serviços, você deve:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Manter a segurança de sua conta e senha</li>
              <li>Notificar-nos sobre uso não autorizado da sua conta</li>
              <li>Ser responsável por todas as atividades em sua conta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              4. Responsabilidades dos Usuários
            </h2>
            
            <h3 className="text-xl font-semibold text-brand-dark mb-3">
              4.1 Clientes
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fornecer informações precisas sobre o serviço solicitado</li>
              <li>Pagar pelos serviços contratados conforme acordado</li>
              <li>Tratar prestadores com respeito e profissionalismo</li>
              <li>Avaliar serviços de forma honesta e construtiva</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-dark mb-3">
              4.2 Prestadores de Serviços
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Possuir qualificações necessárias para os serviços oferecidos</li>
              <li>Executar serviços com qualidade e profissionalismo</li>
              <li>Cumprir prazos acordados com clientes</li>
              <li>Manter documentação e licenças atualizadas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              5. Pagamentos e Taxas
            </h2>
            <p className="mb-4">
              Nosso sistema de pagamentos funciona da seguinte forma:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Pagamentos são processados através de parceiros seguros</li>
              <li>O Hush cobra uma taxa de serviço sobre transações</li>
              <li>Preços devem ser acordados entre cliente e prestador</li>
              <li>Reembolsos seguem nossa política específica</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              6. Política de Cancelamento
            </h2>
            <p className="mb-4">
              Cancelamentos devem seguir estas diretrizes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Clientes podem cancelar até 24h antes do serviço</li>
              <li>Cancelamentos tardios podem resultar em cobrança parcial</li>
              <li>Prestadores devem notificar cancelamentos com antecedência</li>
              <li>Casos excepcionais serão analisados individualmente</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              7. Conduta Proibida
            </h2>
            <p className="mb-4">
              É proibido na plataforma:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Usar a plataforma para atividades ilegais</li>
              <li>Fornecer informações falsas ou enganosas</li>
              <li>Assediar, ameaçar ou discriminar outros usuários</li>
              <li>Contornar sistemas de pagamento da plataforma</li>
              <li>Criar contas falsas ou múltiplas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              8. Propriedade Intelectual
            </h2>
            <p className="mb-4">
              O Hush e seus parceiros mantêm direitos sobre:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Design, layout e funcionalidades da plataforma</li>
              <li>Marca, logo e elementos visuais</li>
              <li>Algoritmos e tecnologias proprietárias</li>
              <li>Conteúdo criado pela empresa</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              9. Limitação de Responsabilidade
            </h2>
            <p className="mb-4">
              O Hush atua como intermediário entre clientes e prestadores. Não nos responsabilizamos por:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Qualidade dos serviços prestados</li>
              <li>Danos decorrentes da execução de serviços</li>
              <li>Disputas entre usuários</li>
              <li>Perdas indiretas ou consequenciais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              10. Resolução de Disputas
            </h2>
            <p className="mb-4">
              Para resolver conflitos:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Entre em contato com nosso suporte primeiro</li>
              <li>Tentaremos mediar soluções amigáveis</li>
              <li>Casos não resolvidos podem ir para arbitragem</li>
              <li>Foro competente: São Paulo, SP</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              11. Alterações nos Termos
            </h2>
            <p className="mb-4">
              Podemos modificar estes termos ocasionalmente. Mudanças significativas serão comunicadas com 30 dias de antecedência através da plataforma ou por e-mail.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              12. Encerramento
            </h2>
            <p className="mb-4">
              Podemos encerrar contas que violem estes termos. Usuários podem encerrar suas contas a qualquer momento através das configurações da plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              13. Contato
            </h2>
            <p className="mb-4">
              Para dúvidas sobre estes termos:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>E-mail: juridico@hush.com.br</li>
              <li>WhatsApp: +55 (11) 99999-9999</li>
              <li>Endereço: São Paulo, SP - Brasil</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;