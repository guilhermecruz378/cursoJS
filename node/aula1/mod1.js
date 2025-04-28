// o node nos da objetos que podemos colocar coisas e exportar para outra pasta
// use o console.log(module) => para ver oque tem nesse objeto

const nome = 'Guilherme';
const idade = 24;
const soma = (x, b) =>  x + b;
const falaNome = () => nome + ' ' + idade;


// module.exports.nome = nome;
// module.exports.idade = idade;
// module.exports.soma = soma
// console.log(module.exports)

// atalho 

exports.nome = nome;
exports.idade = idade;
exports.soma = soma;
exports.falaNome = falaNome;
this.subtracao = (x,b) => x - b;

//console.log(exports.subtracao(19, 1))