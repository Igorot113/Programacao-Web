// AULA 5 SEPARAÇÃO DE RESPONSABILIDADES
// Controller
const listarUsuarios = (req, res) => {
    res.json([
        { id: 1, nome: 'Ana' },
        { id: 2, nome: 'Carlos' }
    ]);
};

const buscarUsuarios = (req, res) => {
    const id = req.params.id;
    res.send(`O ID é: ${id}`);
}

// Permite que outros arquivos importem e utilizem a função listarUsuarios.
// Se voce esquecer de colocar alguma função aqui e o router utilizar ela. Vai retornar um undefined.
module.exports = {
    listarUsuarios,
    buscarUsuarios,
};