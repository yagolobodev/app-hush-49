import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            Política de Privacidade
          </h1>
          <p className="text-gray-600">
            Última atualização: Janeiro de 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              1. Informações que Coletamos
            </h2>
            <p className="mb-4">
              No Hush, coletamos as seguintes informações para fornecer nossos serviços:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Informações pessoais: nome, e-mail, telefone e endereço</li>
              <li>Informações profissionais: área de atuação, experiência e certificações</li>
              <li>Dados de localização para conectar você com prestadores próximos</li>
              <li>Informações de uso da plataforma para melhorar nossos serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              2. Como Usamos suas Informações
            </h2>
            <p className="mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Conectar clientes com prestadores de serviços qualificados</li>
              <li>Processar pagamentos e transações</li>
              <li>Enviar notificações sobre serviços e atualizações</li>
              <li>Melhorar a segurança e qualidade da plataforma</li>
              <li>Cumprir obrigações legais e regulamentares</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              3. Compartilhamento de Dados
            </h2>
            <p className="mb-4">
              Compartilhamos suas informações apenas quando necessário:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Com prestadores de serviços para execução de trabalhos contratados</li>
              <li>Com processadores de pagamento para transações financeiras</li>
              <li>Com autoridades legais quando exigido por lei</li>
              <li>Nunca vendemos suas informações pessoais para terceiros</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              4. Segurança dos Dados
            </h2>
            <p className="mb-4">
              Implementamos medidas técnicas e organizacionais para proteger suas informações:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Treinamento regular da equipe em proteção de dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              5. Seus Direitos
            </h2>
            <p className="mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Acessar e revisar suas informações pessoais</li>
              <li>Corrigir dados incorretos ou desatualizados</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Portabilidade dos seus dados</li>
              <li>Retirar consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              6. Cookies e Tecnologias Similares
            </h2>
            <p className="mb-4">
              Utilizamos cookies para melhorar sua experiência na plataforma, personalizar conteúdo e analisar o uso do aplicativo. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              7. Retenção de Dados
            </h2>
            <p className="mb-4">
              Mantemos suas informações pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Dados de transações podem ser mantidos por períodos mais longos conforme exigências fiscais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              8. Alterações nesta Política
            </h2>
            <p className="mb-4">
              Podemos atualizar esta política ocasionalmente. Notificaremos sobre mudanças significativas através do aplicativo ou por e-mail.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              9. Contato
            </h2>
            <p className="mb-4">
              Para dúvidas sobre esta política de privacidade, entre em contato:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>E-mail: privacidade@hush.com.br</li>
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

export default PrivacyPolicy;