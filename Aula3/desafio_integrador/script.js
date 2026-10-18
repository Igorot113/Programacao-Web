const titulo = document.querySelector("#titulo");
const nome = document.querySelector("#nome");
const atualizar = document.querySelector("#atualizar");
const contadorTexto = document.querySelector("#contador");
const descricaoBotao = document.querySelector("#descricaoBotao");
const descricao = document.querySelector("#descricao");
const tema = document.querySelector("#tema");
let contador = 0;

atualizar.addEventListener("click", function() {
  titulo.textContent = nome.value;
  contador = contador + 1;
  contadorTexto.textContent = contador;
});

descricaoBotao.addEventListener("click", function() {
  if (descricao.style.display === "none") {
    descricao.style.display = "block";
  } else {
    descricao.style.display = "none";
  }
});

tema.addEventListener("click", function() {
  document.body.classList.toggle("escuro");
});
