const http = require('http'); 
const pool = require('./db'); 
const servidor = http.createServer(async (req, res) => { 
    if (req.url === '/usuarios') { 
        try {
            const resultado = await pool.query( 'SELECT * FROM usuarios' ); 
            res.setHeader('Content-Type', 'application/json'); 
            res.end(JSON.stringify(resultado.rows));
         } catch (erro) { 
            res.statusCode = 500; 
            res.end(JSON.stringify({ 
                mensagem: 'Erro ao buscar usuários' 
            })); 
        } 
    } else { 
        res.end('Rota inválida'); 
    } 
}); 
servidor.listen(3000, () => { 
    console.log('Servidor rodando em http://localhost:3000'); 
});