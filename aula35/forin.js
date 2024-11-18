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

// se eu quisesse acessar o nome do objeto pessoa eu uso pessoa.algumacoisa == pessoa.nome
// console.log(pessoa.nome)
// console.log(pessoa['nome']) // acessando o mesmo valor de maneira diferente
//const chave = 'nome';
//console.log(pessoa[chave]) // o código desse jeito vai puxar o meu array e o objeto dentro do array, por causa da variavel que condiz exatamente com a chave do array
//console.log(chave)


for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}
