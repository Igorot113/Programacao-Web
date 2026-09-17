const somar = require("./meu-backend/soma");

const resultado = somar(3,5);

console.log(resultado);

console.log("Inicio");

setTimeout(function(){
    console.log("Executou depois");
}, 2000);


console.log("Fim");