const http = require('http'); 
const pool = require('./db'); 
const servidor = http.createServer(async (req, res) => { 
    if (req.url.startsWith('/usuarios/')) { 
       const id = req.url.split('/')[2];
       if (isNaN(id)) { 
        res.statusCode = 400; 
        res.end(JSON.stringify({ 
            mensagem: 'ID inválido' 
        })); 
        return; 
    } try {
        const resultado = await pool.query( 
            'SELECT * FROM usuarios WHERE id = $1', [id] ); 
            res.setHeader('Content-Type', 'application/json'); 
            if (resultado.rows.length > 0) { 
                res.end(JSON.stringify(resultado.rows[0])); 
            } else { 
                res.statusCode = 404; 
                res.end(JSON.stringify({ 
                    mensagem: 'Usuário não encontrado' 
                })); 
            } 
        } catch (erro) { 
            res.statusCode = 500; 
            res.end(JSON.stringify({ 
                mensagem: 'Erro ao buscar usuário' 
            })); 
        } 
    } else { 
        res.end('Rota inválida'); 
    } 
}); 

servidor.listen(3000, () => { 
    console.log('Servidor rodando em http://localhost:3000'); 
});