//Isso pode 
/*
Mesmo que o array seje constante ele pode ter seu indices
alterados, acrescentados e excluidos. Bem diferente de uma
constante comum:

*/
const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
// Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.
