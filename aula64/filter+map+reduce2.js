// ====> com funções encadeadas
// retorne a soma do dobro de todos os pares
// => filtrar pares
// => dobrar os valors
// => reduzir em uma soma todos os valores

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const filtro = numeros
    .filter(pares => pares % 2 === 0)
    .map(dobra => dobra * 2)
    .reduce((acumulador, valor) => acumulador += valor);

console.log(filtro)
