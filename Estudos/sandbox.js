const express = require('express');
const app = express();

const router = require('./sandboxRouters/sandboxRouter');

app.use('/produtos', router);

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
    console.log("http://localhost:3000");
});