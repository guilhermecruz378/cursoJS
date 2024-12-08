// return 
// Retorna um valor 
// Termina a função

// function soma(a, b) {
//     return a + b;
// }

// function pessoa(nome, sobrenome) {
//     return {nome, sobrenome}
// }
// const p1 = pessoa('Guilherme', 'Cruz');
// const p2 = {nome: 'Evelin', sobrenome: 'Nobre'};

// console.log(typeof p1)
// console.log(typeof p2)

// function falaFrase(comeco) { // recebe o primeiro paametro
//     function falaResto(resto) { // recebe o segundo parametro
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Olá,'); // primeiro parametro
// const resto = fala('Mundo!') // segundo parametro
// console.log(resto);

function criaMultiplicador(multiplicador) { // recebe o primeiro paametro
    return function(n) { // recebe o segundo parametro
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2); // primeiro parametro
const triplica = criaMultiplicador(3); // primeiro parametro
const quadruplica = criaMultiplicador(4);// primeiro parametro

console.log(duplica(10)); // segundo parametro
console.log(triplica(10)); // segundo parametro
console.log(quadruplica(10)); // segundo parametro