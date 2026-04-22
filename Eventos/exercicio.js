const elemento = {
    input: document.querySelector("#text"),
    container: document.querySelector("#container"),
};

console.log(elemento);

elemento.input.addEventListener("keydowm", (evento) => {
    console.log(evento.key);
)};
//     elemento.container.innerText = evento.currentTarget.value;
// });



