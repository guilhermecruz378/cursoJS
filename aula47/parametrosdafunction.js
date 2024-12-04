// arguments é uma palavra-chave especial usada dentro de funções. Ela é como uma "bolsa mágica" que contém todos os valores passados para uma função, mesmo que você não tenha definido nomes para eles nos parâmetros. 


// Imagine que uma função é como uma máquina que recebe ingredientes. arguments é a forma de acessar todos os ingredientes entregues, independentemente de como você os rotulou.

function argumentos(a = 0, b = 2, c = 20) {
    //let nuns = 0;

    /*for (let arg of arguments) { // arg esta armazenando os valores que estão dentro de arguments
        nuns += arg;
    }*/

    console.log( a,b,c);
}

argumentos(1,7);
argumentos(1,undefined, 10); // fazendo dessa forma eu estou pedindo para que o js assuma o valor padrão que já esta na função

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=')
function funcao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Guilherme', sobrenome: 'Cruz', idade:23};
console.log(obj)
funcao({nome: 'Guilherme', sobrenome: 'Cruz', idade:23});