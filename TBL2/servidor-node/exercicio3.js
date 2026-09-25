const http = require('http');

const servidor = http.createServer(async (req, res) => {
const produtos = [
    {
        id: 1,
        nome: 'Maçã',
        preco: 28.00
    },
    {
        id: 2,
        nome: 'Banana',
        preco: 12.50
    },
    {
        id: 3,
        nome: 'Laranja',
        preco: 8.00
    },
    {
        id: 4,
        nome: 'Morango',
        preco: 15.00
    }
];
    if (req.url === '/api/produtos') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(produtos));
    }
    else if (req.url.startsWith('/api/produtos/')) { 
        const id = req.url.split('/')[3]; 
        const produto = produtos.find(produto => produto.id === Number(id)); 
        res.setHeader('Content-Type', 'application/json'); 
        if (produto) { 
            res.end(JSON.stringify(produto)); 
        } 
    }

    else {
        res.end('Rota inválida');
    }
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});