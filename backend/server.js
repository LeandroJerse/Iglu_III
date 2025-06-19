const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3001;
const FILE = './agendamentos.json';

app.use(cors());
app.use(express.json());

// Carregar agendamentos
function lerAgendamentos() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}
// Salvar agendamentos
function salvarAgendamentos(agendamentos) {
  fs.writeFileSync(FILE, JSON.stringify(agendamentos, null, 2));
}

// Listar todos os agendamentos
app.get('/agendamentos', (req, res) => {
  res.json(lerAgendamentos());
});

// Criar novo agendamento
app.post('/agendamentos', (req, res) => {
  const novo = req.body;
  const agendamentos = lerAgendamentos();
  agendamentos.push(novo);
  salvarAgendamentos(agendamentos);
  res.status(201).json(novo);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 