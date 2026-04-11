// for (let contador = 10; contador >= 0; contador--) {
//     console.log(contador)
// }
// for (let contador = 0; contador >= 10; contador++) {
//     console.log(contador)
// }

const frutas = ["banana", "melâo", "abacaxi", "pera", "uva"];

// console.log(frutas.length);

const cache = frutas.length;

// for (let contador = 0; contador <= cache; contador++) {
//     console.log(frutas[contador]);
// }

// for (const fruta of frutas) {
//     console.log(fruta);
// }

// for (let contador = 0; contador < cache; contador++) {
//     if (contador % 2 == 0) {
//         console.log(frutas[contador]);
//     }
// }
// const clientes = {
//     nome: "João",
//     idade: 30,
//     cidade: "Bahia"
// };

// for (const dados in clientes) {
//     // console.log(dados);
//     // console.log(clientes[dados]);
//     console.log(`${dados}: ${clientes[dados]}`)
// }


// let entradaDeUser = +prompt("Digite um número");

// console.log(entradaDeUser);


// while (entradaDeUser !== 2 || entradaDeUser != Number) {
//     console.log((+prompt("Digite outro número")));

let saldo = 100;

let saque = +prompt("Digite o valor que deseja sacar:");

while (saldo >= saque) {
    console.log(`Saque de ${saque} realizado com sucesso.`);
    console.log(`Saldo atual ${saldo}`);
}

console.log("Saldo Insuficiente");
// }
// let contador = 10

// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// }