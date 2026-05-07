# MedEquipFlow — Gestão Inteligente de Equipamentos

Este é o projeto MedEquipFlow, uma plataforma para gestão inteligente de ativos médicos.

## Como rodar localmente (Localhost)

Para rodar este projeto na sua máquina, siga os passos abaixo:

### Pré-requisitos

1. **Node.js** (v20 ou superior recomendado)
2. **pnpm** (recomendado) ou **npm**

### Instalação

Abra o terminal na pasta do projeto e execute:

```bash
pnpm install
```

Ou, se estiver usando npm:

```bash
npm install --legacy-peer-deps
```

### Rodando o Servidor de Desenvolvimento

Para iniciar o site com Hot Module Replacement (HMR):

```bash
pnpm run dev
```

O site estará disponível em `http://localhost:3000`.

### Construção para Produção

Se você quiser testar a versão final do projeto:

1. **Build do frontend e servidor:**
   ```bash
   pnpm run build
   ```

2. **Inicie o servidor de produção:**
   ```bash
   pnpm run start
   ```

## Configuração (Opcional)

Se você desejar usar as funcionalidades de Mapa ou Analytics, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_FRONTEND_FORGE_API_KEY=sua_chave_aqui
VITE_ANALYTICS_ENDPOINT=seu_endpoint_aqui
VITE_ANALYTICS_WEBSITE_ID=seu_id_aqui
```

## Estrutura do Projeto

- `client/`: Código fonte do frontend (React + Vite)
- `server/`: Servidor Express para servir os arquivos estáticos em produção
- `shared/`: Código compartilhado entre cliente e servidor
- `dist/`: Pasta gerada após o build
