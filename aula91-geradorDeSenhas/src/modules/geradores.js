//vamos usar uma função que usa a tabela ascii

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48, 57));
//const simbolos = ',.;:/?°!@#$%¨&*()_-=+§'
const simbolos = '.;:/?°!@#$%¨&*()_-=+§'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const array = [];
    qtd = Number(qtd);

    for(let i =0; i<qtd; i++){
        maiusculas && array.push(geraMaiuscula());
        minusculas && array.push(geraMinuscula());
        numeros && array.push(geraNumero());
        simbolos && array.push(geraSimbolo());
    }
    return array.join('').slice(0,qtd);
}

geraSenha(5, true, true, true, true)