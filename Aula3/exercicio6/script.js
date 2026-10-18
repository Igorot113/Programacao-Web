const botao = document.querySelector("#botao");
let escuro = false;
botao.addEventListener("click", function() {
  if (escuro === false) {
    document.body.style.backgroundColor = "#111827";
    document.body.style.color = "white";
    escuro = true;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    escuro = false;
  }
});
