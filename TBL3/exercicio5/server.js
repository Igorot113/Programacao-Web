const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:5500', methods: ['GET'] }));

app.get('/usuarios', (req, res) => {
  res.json([{ id: 1, nome: 'Ana' }, { id: 2, nome: 'Carlos' }]);
});

app.listen(3000, () => console.log('API: http://localhost:3000/usuarios'));

/*
O objetivo de limitar os métodos permitidos no CORS é controlar quais tipos de requisições HTTP o navegador pode realizar entre origens diferentes, de acordo com a política definida pelo servidor.

Por exemplo, ao configurar methods: ['GET'], o servidor informa que apenas o método GET está autorizado pela política CORS, permitindo a consulta de dados, mas não autorizando outros métodos, como POST, PUT e DELETE, nas verificações de CORS.
*/