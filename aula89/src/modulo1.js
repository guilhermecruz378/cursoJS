// Podemos exportar de forma direta na constante
//só podemos ter um defalut por modulo
export const nome = 'Guilherme';
export const sobrenome = 'Cruz';
export const idade = 24;

// const nome = 'Guilherme';
// const sobrenome = 'Cruz';
// const idade = 24;

// export default function soma(x,y) {
//     return x + y;
// }
export function soma(x,y) {
    return x + y;
}

export default class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
// export default (x,y) => {return x * y}
// tambem podemos usar o defalut dessa maneira
// export {soma /*as default*/,nome, sobrenome, idade };

// para exportar algo para fora desse arquivo para outro arquivo eu uso o export, e para capturatr eu uso import

//export {nome as mudeiAqui, sobrenome, idade, soma};

