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
const {/*nome: teste*/ nome, sobrenome, idade} = pessoa;
// para MUDAR o nome da variavel eu escrevo a variavel: novo nome (nome: novoNome) o valor continua o mesmo como em cima
console.log(teste, sobrenome, idade);