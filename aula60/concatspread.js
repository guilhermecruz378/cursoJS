// Podemos fazer a concatenação usando o spread 
// ... rest => ... spread
//const concatenar = a1.concat(a2, [7, 8, 9], 'Guilherme');

const a1 = [1,2,3];
const a2 = [4,5,6];
const a3 = [...a1,'Gui',...a2,...[7, 8, 9]];


// Nesse caso podemos dizer que ele está fazendo um espalhamento no array
// o rest.a1 === ...a1 esta pegando oque eu tenho no a1 e espalhando no meu array atual

console.log(a3);