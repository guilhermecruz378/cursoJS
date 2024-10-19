// para criar um objeto eu uso {}
/*
const pessoa01 = {
    nome: 'Guilherme',
    sobrenome: 'Cruz',
    idade: 23
};
*/

function criaPessoa(nome, sobrenome,idade) {
    return {
        //nomes iguais pode se usar apenas um
        nome,// nome: nome,
        sobrenome,// sobrenome: sobrenome,
        idade// idade: idade
    };
}

const pessoa01 = criaPessoa('Guilherme', 'Cruz', 23);
const pessoa02 = criaPessoa('Evelin', 'Nobre', 22);
const pessoa03 = criaPessoa('Gerson', 'Adalberto', 53);
const pessoa04 = criaPessoa('Cesar', 'Sorio', 47);
console.log(pessoa01.nome, pessoa02.nome, pessoa03.nome, pessoa04.nome);
