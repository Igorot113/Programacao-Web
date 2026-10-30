const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // É aqui que o cors é habilitado.

app.get('/usuarios', (req, res) => {
  res.json([{ id: 1, nome: 'Ana' }, { id: 2, nome: 'Carlos' }]);
});

app.listen(3000, () => console.log('API: http://localhost:3000/usuarios'));
