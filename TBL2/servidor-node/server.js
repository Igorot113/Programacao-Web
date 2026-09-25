const http = require('http');
const pool = require('./db');
const servidor = http.createServer(async(req, res) => {
    if (req.url === '/usuario') {
        try {
            const resultado = await pool.query('SELECT * FROM usuarios');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(resultado.rows));
        } catch (erro) {
            res.statusCode = 500;
            res.end('Erro ao buscar dados');
        }
    }
    else if (req.url ==='/usuario/2') {
    try {
        const resultado = await pool.query('SELECT * FROM usuarios WHERE id = 2');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(resultado.rows[0]));
    } catch (erro) {
        res.statusCode = 500;
        res.end('Erro');
    }
    }
    else {
        res.end('Rota inválida');
    }});
servidor.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});