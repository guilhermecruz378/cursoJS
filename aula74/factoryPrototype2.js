const falar = {
    falar() {console.log(`${this.nome} está falando!`)}
 };
const comendo = {
    comendo () {
    console.log(`${this.nome} está comendo!`)
    }
};
const bebendo = { bebendo() {
    console.log(`${this.nome} está  bebendo!`)}
};
//const pessoaPrototype = Object.assign({}, falar, bebendo, comendo);
const pessoaPrototype = {...bebendo, ...comendo, ...falar};
function criaPessoa(nome,sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome,}
    });
}

const p1 = criaPessoa('guilherme', 'cruz')
const p2 = criaPessoa('Evelins', 'cruz')
console.log(p1)
console.log(p2)