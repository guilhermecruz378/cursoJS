// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A
// const letras = [b, c, a]; // desestruturando a 
// [a, b, c] = letras; // atribuindo
// console.log(a, b, c);

// -------====------------

// const numeros = [1, 2, 3, 4, 5, 6];
// ...rest /...spread
//const [primeiroNumero, segundoNumero, ...resto] = numeros;
// console.log(primeiroNumero);
// console.log(segundoNumero);
// console.log(resto);

// -------------================

// const numeros = [800, 500, 700, 900, 200, 400, 600];
// const [um, , tres, , , seis] = numeros;// pulando indicies, para isso colocamos valores vazios
// console.log(um, tres, seis)

// -----------=================

const numeros = [
    [1,2,3], [4,5,6], [7,8,9]
];

console.log(numeros[1][2]);
const [,[,,seis]] = numeros;
console.log(seis)

const [lista1, lista2, lista3] = numeros;
console.log(lista1, lista2, lista3);
console.log(lista2[2])