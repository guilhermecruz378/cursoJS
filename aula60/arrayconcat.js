// concatenação dos arrays 
// método => concat()

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// se eu utilizar a ideia de strings a1 + a2 ele vai juntar o meu array mas, ultimo valor do a1 vai fazer junção com o primeiro do a2 e transformar em uma string

const a3 = a1 + a2;
console.log(a3);


// para rsolver esse problema usamos a função concat() = concatenar

//const concatenar = a1.concat(a2);
const concatenar = a1.concat(a2, [7, 8, 9], 'Guilherme');
console.log(concatenar)

