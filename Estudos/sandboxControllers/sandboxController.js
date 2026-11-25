const produtos = [
    { id: 1, nome: 'Banana', valor: 10 },
    { id: 2, nome: 'Maçã', valor: 15 },
    { id: 3, nome: 'Romã', valor: 20 }
];

function listarProduto(req, res) {
    res.json({
        messagem: 'Sucesso',
        produtos
    });
};

function acharPorID(req, res) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 0) {
        res.status(400).json({
            erro: 'Id nao pode ser letras ou negativo'
        });
    }
    const produto = produtos.find(x => x.id == id);
    res.json({
        produto
    });
};

function filtrarPorID(req, res) {
    const id = Number(req.params.id);
    const produto = produtos.filter(x => x.id < 3);
    res.json({
        produto
    });
};

function totalProdutos(req, res) {
    const total = produtos.length;
    res.json({
        total: total
    });
};

module.exports = {
    listarProduto,
    acharPorID,
    filtrarPorID,
    totalProdutos
}