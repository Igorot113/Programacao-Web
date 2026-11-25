// AULA 4 INTRODUÇÃO AO EXPRESS
const express = require('express');
const app = express();

// app.get() (Resumo)-> define uma rota que sera executada, quando o servidor receber uma   requisição HTTP do tipo GET no caminho '/';
// app.get() -> registra uma rota que aceita o metodo GET;
// '/' -> representa o caminho raiz do servidor;
// req -> contem as informações da requisição enviada pelo cliente;
// res -> representa a resposta que o servidor vai enviar;
// res.send() -> Envia a resposta para o cliente;
app.get('/', (req, res) => {
    res.send("Meu primeiro servidor express.");
});

// a variavel const id esta pegando as requisições que o cliente trouxe que no caso seria o '/:id';
// O valor recebido sempre uma String;
// req.params.id -> parametro de rota
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Cliente do ID: ${id}.`);
});

// req.query.nome -> parametro de consulta
// geralmente estamos esperando esse tipo de URL: localhost:3000/buscar?nome=Victor;
// o que o query.nome faz é pegar tudo depois do '?';
// se voce colocar qualquer coisa mas que nao seja nome vai rodar mas vai dar como underfined logo isso é omitido no JSON;
app.get('/buscar', (req, res) => {
    const nome = req.query.nome;
    res.json({
        resultado: nome
    });
});

// Nesse caso estamos esperando duas requisições: o Genero e Plataforma
// A URL fica assim: http://localhost:3000/jogos?genero=RPG&plataforma=PC
// Nesse caso o '&' -> Ele é um separador de parametros na query string.
app.get('/jogos', (req, res) => {
    const genero = req.query.genero;
    const plataforma = req.query.plataforma;
    res.json({
        genero: genero,
        plataforma: plataforma
    });
});
// A URL disso é: http://localhost:3000/jogos/id?nome="Nome"&genero="Genero"
// http://localhost:3000/jogos/9?nome=Terraria&genero=Sobrevivencia
// Se voce nao escrever nome ou genero: ele vai entregar um JSON so com o ID.
app.get('/jogos/:id', (req, res) => {
    const id = Number(req.params.id);
    const nome = req.query.nome;
    const genero = req.query.genero;
    res.json({
        id: id,
        nome: nome,
        genero: genero
    });
});
// app.listen(3000) (Resumo)-> Inicializa o servidor na porta 3000;
// app.liste(3000) -> Inicia o servidor na porta 3000;
// console.log() -> Mostra uma mensagem no terminal;
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// Para o parametro na URL entender bem os espaços é assim: %20 ou +;