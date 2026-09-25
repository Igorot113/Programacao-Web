const http = require('http');

const servidor = http.createServer(async(req, res) => {
    if (req.url === '/teste') {
        return req.method === 'GET'? res.end("method GET") : res.end("Outro metodo")
    }
    else {
        res.end('Rota não permitida');
    }});
servidor.listen(3000, () => {
console.log('Servidor rodando em http://localhost:3000');
});