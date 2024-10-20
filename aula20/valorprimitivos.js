/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor

Referência (mutáveis) - array, object, function - passado por referência.
*/
let a = [1,2,3];
let b = [...a]; // crio uma cópia autentica e independente de a
let c = b; // crio um array apontando pro mesmo lugar do b ambos lincados, oque eu fizer em um fara no outro.

console.log(a,b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a,b);

a.push('Guilherme');
console.log(a, c)