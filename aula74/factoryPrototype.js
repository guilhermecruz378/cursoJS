function criaPessoa(nome,sobrenome) {
     const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando!`)
        },
        comendo() {
            console.log(`${this.nome} está comendo!`)
        },
        bebendo() {
            console.log(`${this.nome} está  bebendo!`)
        },
     }
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome,
            writable: true,
            enumerable: true,
            configurable: true,
        },
        sobrenome: {
            value: sobrenome,
            writable: true,
            enumerable: true,
            configurable: true,
        }
    });
}
/*criaPessoa.prototype.falar = function() {
    console.log(`${this.nome} está falando!`)
};
criaPessoa.prototype.comendo = function() {
    console.log(`${this.nome} está comendo!`)
};
criaPessoa.prototype.bebendo = function() {
    console.log(`${this.nome} está  bebendo!`)
};
*/

const p1 = criaPessoa('guilherme', 'cruz')
const p2 = criaPessoa('Evelins', 'cruz')
console.log(p1)
console.log(p2)