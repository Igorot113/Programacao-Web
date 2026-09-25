const http = require('http');
const servidor = http.createServer((req, res) => {
if (req.url === '/') { http://localhost:3000/
res.end('Página inicial');
} else if (req.url === '/sobre') { // http://localhost:3000/sobre
    res.end('Página sobre');
} else if (req.url === '/contato') { http://localhost:3000/contato
    res.end('Página de contato');
} else {
    res.end('Página não encontrada');
}});
servidor.listen(3000);