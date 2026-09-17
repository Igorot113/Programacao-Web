const http = require('http');

const servidor = http.createServer((req,res) => {
    if(req.url === '/api') {
        res.setHeader('Content-Type','application/json');
        const dados = {
            nome: 'Carlos',
            idade: 28
        };
        res.end(JSON.stringify(dados));
    }else{
        res.end('Rota invalida');
    }
});

fetch('http://localhost:3000/api')
.then(res => res.json())
.then(dados => console.log(dados));

servidor.listen(3000);