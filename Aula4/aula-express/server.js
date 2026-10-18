const express = require('express');
const app = express();

// Exercício 1 — Rotas básicas
app.get('/', (req, res) => res.send('Bem-vindo ao sistema!'));
app.get('/sobre', (req, res) => res.send('Sistema desenvolvido com Express.js'));
app.get('/contato', (req, res) => res.send('Contato: contato@exemplo.com'));

// Exercício 2 — API simples
app.get('/api/produto', (req, res) => {
  res.json({ nome: 'Notebook', preco: 3500 });
});

// Exercício 3 — Parâmetro de rota
app.get('/produto/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id: id, mensagem: 'Produto encontrado' });
});

// Exercício 4 — Query string
app.get('/busca', (req, res) => {
  const nome = req.query.nome;
  res.json({ resultado: nome });
});

// Exercício 5 — Lista de dados
app.get('/api/alunos', (req, res) => {
  const alunos = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Carlos' },
    { id: 3, nome: 'Maria' }
  ];
  res.json(alunos);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
