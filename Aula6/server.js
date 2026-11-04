const express = require('express');
const cors = require('cors');
const app = express();

//Middleware para interpretar JSON
app.use(express.json());
app.use(cors());

//Middleware de log
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
let produtos = []
app.use((req, res, next) => {
    console.log('Passou pelo middleware');
    next();
});
//POST - Criar produtos
app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;

    //Validação
    if (!nome || typeof preco !== 'number' || preco < 0) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Nome e preco são obrigatorios e preco nao pode ser negativo.'
        });
    }

    const produto = {
        id: produtos.length + 1,
        nome,
        preco
    };
    produtos.push(produto);
    return res.status(201).json({
        sucesso: true,
        dados: produto
    });
});
//READ - Listar produtos (GET)
app.get('/produtos', (req, res) => {
    res.json({
        sucesso: true,
        dados: produtos
    });
});
//READ - Buscar produtos por ID
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const produto = produtos.find(u => u.id === id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            sucesso: false,
            erro: 'ID inválido'
        });
    }
    if (!produto) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto nao encontrado'
        });
    }
    res.json({
        sucesso: true,
        dados: produto
    });
});
//UPDATE - Atualizar produto (PUT)
app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { nome, preco } = req.body;

    const produto = produtos.find(u => u.id === id);

    if (!produto) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto nao encontrado'
        });
    }
    if (!nome || preco === undefined) {
        return res.status(400).json({
            sucesso: false,
            erro: 'Dados invalidos'
        });
    }
    produto.nome = nome;
    produto.preco = preco;
    res.json({
        sucesso: true,
        dados: produto
    });
});
//DELETE - Remover produto
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = produtos.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({
            sucesso: false,
            erro: 'Produto nao encontrado'
        });
    }
    produtos.splice(index, 1);
    res.json({
        sucesso: true,
        dados: { mensagem: 'Produto removido' }
    });
});
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

/*function meuMiddleware(req, res, next) {
    console.log('Executando middleware');
    next();
}*/