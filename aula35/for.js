// fro in lê os indices
const frutas = ['Pêra', 'Maça', 'Uva']; // vetor => é um array de uma unica dimensão

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

// for (let indice in frutas) { // Nesse for ele está lendo os indices não o contador 
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Cruz',
    idade: 23
};
for (let index in pessoa) {
    console.log(pessoa[index])
}