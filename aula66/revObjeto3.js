// moldes para criar objetos são:
// factory functions
// constructor functions
// classes

// // factory functions
// function criaPessoa(nome,sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// };

// const pessoa = criaPessoa('Evelin', 'Nobre');
// console.log(pessoa.nomeCompleto)


// ----------------------------------------------

// constructor functions
// constructor vai criar automaticamente um objeto e atrelar o this e retornar automaticamente:
// {} <- this -> return this


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this)// trava tudo oque estou mandando, ou seja: é imposivel modificação
};
const p1 = new Pessoa('Guilherme', 'Cruz');
//Object.freeze(p1)
const p2 = new Pessoa('Evelin', 'Cruz');
console.log(p1, p2)