const pessoa = { // objeto
    nome: 'guilherme',
    sobrenome: 'cruz',
    idade: 23,
    endereco: { // objeto dentro de objeto
        rua: 'av Brasil',
        numero: 600
    }
};

// Atribuição via desestruturação
const {nome = '', sobrenome, idade} = pessoa;

console.log(nome, sobrenome, idade);