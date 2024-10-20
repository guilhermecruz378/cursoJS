/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutáveis) - array, object, function - passado por referência.
*/

const a = {
    nome: 'Guilherme',
    sobrenome: 'Cruz'
};

//const b = {}; => assim está pontando para o mesmo local da memoria
const b = {...a}; // => ... == spreed/espalhamento para criar uma copia independente

b.nome = 'joão';
console.log(a);
console.log(b);