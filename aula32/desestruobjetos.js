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
//const {/*nome: teste*/ nome, sobrenome, endereco} = pessoa;
// para MUDAR o nome da variavel eu escrevo a variavel: novo nome (nome: novoNome) o valor continua o mesmo como em cima
// console.og(nome, sobrenome, idade)
const {
     endereco: {rua: r = 123, numero}, 
     endereco , ...resto
    } = pessoa
console.log(r, endereco, resto);