const http = require('http');
const pool = require('./db');
const servidor = http.createServer(async(req, res) => {

    if (req.url === '/usuarios') {
        try {
            const resultado = await pool.query('SELECT * FROM usuarios');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(resultado.rows));
        } catch (erro) {
            res.statusCode = 500;
            res.end('Erro ao buscar dados');
        }
    }
    else if (req.url.startsWith('/usuario/')) {
        try {
            const id = req.url.split('/')[2];

            const resultado = await pool.query('SELECT * FROM usuarios WHERE id = $1',[id]);
            res.setHeader('Content-Type', 'application/json');

            if(resultado.rows.length > 0){
                res.end(JSON.stringify(resultado.rows[0]));
            }
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