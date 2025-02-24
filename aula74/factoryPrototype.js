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
    return {
        nome,
        sobrenome,
    };
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
console.log(p1)