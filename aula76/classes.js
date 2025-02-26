// classe funciona da mesma maneira de função construtora 
class Pessoa{
    constructor(nome, sobrenome) {// serve para passar parametros para a classe
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
        falar() {
            console.log(`${this.nome} está falando`)
        }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}

const p1 = new Pessoa('Guilherme', 'Cruz');
const p2 = new Pessoa2('Guilherme', 'Cruz');
console.log(p1)
console.log(p2)
