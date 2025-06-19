# Iglu_III

Aplicativo de gerenciamento de agendamentos para manicures, desenvolvido pela ASCII.

## Índice
- [Descrição](#descrição)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Execução](#execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Descrição
O **Iglu_III** é um sistema para controle de agendamentos de clientes, voltado para profissionais de manicure. O projeto é dividido em backend (Node.js) e frontend (React), permitindo o cadastro, visualização e gerenciamento de compromissos.

## Requisitos
- Node.js (v16 ou superior)
- npm (v8 ou superior)

## Instalação
1. Clone este repositório:
   ```bash
   git clone <https://github.com/LeandroJerse/Iglu_III.git>
   cd Iglu_III
   ```
2. Instale as dependências do backend:
   ```bash
   cd backend
   npm install
   ```
3. Instale as dependências do frontend:
   ```bash
   cd ../frontend
   npm install
   ```

## Execução
### Backend
1. No diretório `backend`, execute:
   ```bash
   node server.js
   ```
   O backend será iniciado na porta configurada (por padrão, 3000).

### Frontend
1. No diretório `frontend`, execute:
   ```bash
   npm start
   ```
   O frontend será iniciado e poderá ser acessado via navegador.

## Estrutura do Projeto
```
Iglu_III/
  backend/           # API e lógica de negócios (Node.js)
    agendamentos.json  # Base de dados local (JSON)
    server.js          # Servidor Express
    package.json       # Dependências do backend
  frontend/          # Aplicação web/mobile (React)
    app/               # Componentes e páginas React
    assets/            # Imagens e fontes
    package.json       # Dependências do frontend
  README.md          # Documentação do projeto
```

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m 'Minha contribuição'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request

## Licença
Este projeto é de uso interno da ASCII. Para outros usos, consulte os responsáveis.
