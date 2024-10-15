let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
//const temp = undefined 
/*
temp = varA
varA = varB
varB = varC
varC = temp
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

/** 1ª maneira
 * Criei uma variavel temporaria para salvar
 * o valor de varA
 * 
 * 2ª maneira 
 * é criar uma lista e inverter os valores contidos nela
 * [varA, varB, varC] = [varB, varC, varA]
 * 
 */