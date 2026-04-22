console.log("Olá Mundo");

//Criação de elemento do tipo objeto para armazenar as tags do html
const elemento = {
    button: document.querySelector("button"),
    paragrafo: document.querySelector("p"),
};

console.log(elemento.button, elemento.paragrafo);

elemento.button.addEventListener("mouseout", (evento) => {
    elemento.paragrafo.innerText = "";
});

elemento.button.addEventListener("mouseover", (evento) => {
    inserirResultado();
});

function inserirResultado() {
    elemento.paragrafo.innerText = "Mouse Capturado";
}