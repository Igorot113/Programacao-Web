// AULA 5 utilizando o require e organizando as rotas /routes e /controllers
const express = require('express');
const app = express();

const usuariosRoutes = require('../Estudos/routes/usuariosRoutes');

// Associa o prefixo '/usuarios' as rotas definidas em usuariosRoutes.js;
app.use('/usuarios', usuariosRoutes);
app.use('/usuariosBuscar', usuariosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na portar 3000');
});