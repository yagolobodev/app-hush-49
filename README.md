# Hush - Plataforma de Serviços

## Sobre o Projeto

Hush é uma plataforma moderna para gerenciamento de serviços, construída com React, TypeScript e Vite.

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/yagolobodev/app-hush-49.git
   cd app-hush-49
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:8080](http://localhost:8080) no seu navegador.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Como fazer deploy

### Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Isso criará uma pasta `dist` com os arquivos prontos para produção.

### GitHub Pages

Para publicar no GitHub Pages:

1. Certifique-se de que todas as alterações foram commitadas
2. Execute:
   ```bash
   npm run deploy
   ```

O site estará disponível em: https://yagolobodev.github.io/app-hush-49

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI

## Estrutura do Projeto

- `/src` - Código-fonte do projeto
- `/public` - Arquivos estáticos
- `/dist` - Build de produção (gerado automaticamente)

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/4f897643-880e-4917-8aa5-4dfa7e92a27b) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
