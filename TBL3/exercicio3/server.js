const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:5500' }));

app.get('/usuarios', (req, res) => {
  res.json([{ id: 1, nome: 'Ana' }, { id: 2, nome: 'Carlos' }]);
});

app.listen(3000, () => console.log('API: http://localhost:3000/usuarios'));


/*
Explique o que deve acontecer quando a página é executada por uma origem diferente.

O codigo que tentar executar uma requisição vai ficar bloqueado pois o cors esta definido o origin como http://localhost:5500.
Logo se tentar executar com o origin diferente do definido vai da erro cors.
*/