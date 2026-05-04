# Blog Pessoal

Uma aplicação web moderna e interativa para gerenciar um blog pessoal com sistema de autenticação, gerenciamento de postagens e temas.

## 🌐 Acesso ao Projeto

A aplicação está deployed e disponível em: 
**[https://blogpessoal-react-g00x4sy0c-ramonbrxs-projects.vercel.app/](https://blogpessoal-react-g00x4sy0c-ramonbrxs-projects.vercel.app/)**

## 🚀 Funcionalidades

- **Autenticação de Usuários**: Sistema de login e cadastro seguro
- **Perfil de Usuário**: Visualizar e atualizar informações do perfil
- **Gerenciamento de Postagens**: Criar, editar, visualizar e deletar postagens
- **Gerenciamento de Temas**: Categorizar postagens com temas personalizados
- **Interface Responsiva**: Design moderno e adaptável a diferentes dispositivos
- **Navegação Intuitiva**: Menu de navegação e rodapé presentes em todas as páginas

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool rápido e moderno
- **React Router** - Roteamento de páginas
- **Tailwind CSS** - Framework CSS utilitário
- **React Toastify** - Notificações de usuário
- **Context API** - Gerenciamento de estado global (Autenticação)

## 📁 Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
│   ├── footer/       # Rodapé
│   ├── navbar/       # Barra de navegação
│   ├── postagem/     # Componentes de postagens
│   │   ├── cardpostagem/
│   │   ├── deletarpostagem/
│   │   ├── formpostagem/
│   │   ├── listapostagens/
│   │   └── modalpostagem/
│   └── tema/         # Componentes de temas
│       ├── cardtema/
│       ├── deletartema/
│       ├── formtema/
│       └── listatemas/
├── contexts/         # Context API para estado global
├── models/           # Interfaces e tipos TypeScript
├── pages/            # Páginas da aplicação
│   ├── cadastro/
│   ├── home/
│   ├── login/
│   └── perfil/
├── services/         # Chamadas à API
└── utils/            # Utilitários
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositório>

# Acesse o diretório
cd blogpessoal

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Crie a build otimizada
npm run build

# Pré-visualize a build
npm run preview
```

## 📝 Páginas Principais

- **Login** (`/`) - Página inicial com formulário de login
- **Cadastro** (`/cadastro`) - Registro de novos usuários
- **Home** (`/home`) - Página principal com postagens
- **Temas** (`/temas`) - Gerenciamento de temas
- **Postagens** (`/postagens`) - Gerenciamento de postagens
- **Perfil** (`/perfil`) - Visualizar perfil do usuário
- **Atualizar Perfil** (`/atualizarusuario`) - Editar informações do perfil

## 🔐 Autenticação

O projeto utiliza Context API para gerenciar o estado de autenticação globalmente. O token do usuário é armazenado e utilizado para fazer requisições autenticadas à API.

## 📦 Dependências Principais

Veja o arquivo `package.json` para a lista completa de dependências.
