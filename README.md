# Organizador IA 🚀

O **Organizador IA** é um ecossistema inteligente de produtividade projetado para unificar a gestão de tarefas entre uma interface Web moderna e aplicativos de mensagens (WhatsApp/Telegram). Através do poder da IA (GPT-4o), você pode gerenciar projetos, tarefas e prazos usando linguagem natural.

---

## 📸 Visão Geral
- **Dashboard Web**: Interface Kanban fluida, responsiva e com animações premium.
- **Agente Inteligente**: Assistente virtual no WhatsApp que entende o que você precisa e atualiza seu quadro em tempo real.
- **Identidade Única**: Seu número de telefone é vinculado à sua conta web, garantindo sincronização total.

---

## 🛠️ Tecnologias

### **Frontend** (Pasta `/client`)
- **React 19** + **Vite**
- **Tailwind CSS** (Estilização)
- **Framer Motion** (Animações premium)
- **TanStack Query** (Sincronização de dados)
- **Lucide React** (Ícones)
- **Dnd Kit** (Drag & Drop para Kanban)

### **Backend** (Pasta `/server`)
- **Node.js** + **Express**
- **Supabase** (Banco de Dados, Auth e Realtime)
- **OpenAI SDK** (Processamento de linguagem natural no servidor)
- **Multer** (Gestão de uploads/anexos)

### **Agente IA** (Pasta `/agent`)
- **Python 3.11+**
- **OpenAI GPT-4o** (Cérebro do agente)
- **FastAPI / Flask** (Gerenciamento de webhooks)
- **WazAPI** (Integração com WhatsApp)

---

## ✨ Funcionalidades Principais

| Recurso | Descrição |
| :--- | :--- |
| **Kanban Dinâmico** | Arraste tarefas entre colunas e veja as mudanças em tempo real. |
| **Comandos de Voz/Texto** | "Crie uma tarefa de reunião para amanhã às 15h" direto no WhatsApp. |
| **Gestão de Projetos** | Organize tarefas em diferentes projetos e atribua membros. |
| **Filtros Inteligentes** | Filtre por etiquetas, responsáveis ou prazos. |
| **Prazos e Alarmes** | Notificações e alertas de tarefas próximas do vencimento. |

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js v18+
- Python 3.11+
- Conta no [Supabase](https://supabase.com/)
- Chave de API da [OpenAI](https://platform.openai.com/)

### Configuração Rápida (Windows)
O projeto inclui scripts automatizados para facilitar o desenvolvimento:

1. Clone o repositório.
2. Configure os arquivos `.env` nas pastas `server/`, `client/` e `agent/` seguindo os modelos `.env.example`.
3. Execute o script de inicialização:
```bash
./iniciar_tudo.bat
```
*Este script abrirá três terminais: Backend, Frontend e Agente IA.*

### Configuração Manual

#### 1. Servidor (Backend)
```bash
cd server
npm install
npm run dev
```

#### 2. Cliente (Frontend)
```bash
cd client
npm install
npm run dev
```

#### 3. Agente IA (Python)
```bash
cd agent
pip install -r requirements.txt
python main.py
```

---

## 📂 Estrutura do Projeto

```text
organize-ia/
├── client/          # Aplicação React (Dashboard)
├── server/          # API Node.js e orquestração de ferramentas
├── agent/           # Script Python do agente WhatsApp
├── database/        # Scripts SQL e Migrações
├── mobile/          # (Opcional) App mobile
└── ecosystem.config.js # Configuração PM2 para produção
```

---

## 🌐 Deploy (Produção)

O projeto está configurado para rodar via **PM2**. Para subir em um servidor (VPS):

```bash
pm2 start ecosystem.config.js
```

As atualizações podem ser feitas via:
```bash
./deploy.sh
```

---

## 📝 Notas de Versão
As últimas mudanças técnicas e melhorias de segurança podem ser encontradas no arquivo [atualizacao.md](./atualizacao.md).

---
Desenvolvido com ❤️ para transformar a produtividade pessoal e de equipes.
