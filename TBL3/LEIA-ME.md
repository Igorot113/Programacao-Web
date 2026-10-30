# Atividade prática — CORS

Há uma pasta para cada exercício, com `server.js`, `index.html`, `package.json` e instruções.

**Como executar:** entre na pasta do exercício, rode `npm install` e `npm start`. Abra o HTML usando Live Server na porta 5500. Não execute dois servidores na porta 3000 ao mesmo tempo.

**Exercício 2:** CORS está desativado globalmente e não aparece em nenhuma rota. Faça o teste pelo frontend (origem diferente), veja o erro no Console e depois descomente `app.use(cors())` no `server.js` e reinicie.

**Exercícios 3–5:** a origem autorizada é `http://localhost:5500`. Se o Live Server abrir `http://127.0.0.1:5500`, troque o host na barra de endereço por `localhost`.

**Exercício 5:** limitar `methods` no CORS não é um controle de acesso completo; as rotas e a autenticação também precisam ser protegidas.
