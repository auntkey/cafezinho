const BotaoMudarTema = document.getElementById("botaozinho");
const body = document.querySelector("body");

BotaoMudarTema.addEventListener("click", () =>{
body.classlist.add("modoescuro");})
}
