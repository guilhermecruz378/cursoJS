/** ----- conversao ------
 * para conversao devemos usar uma função chamada: parse
 * podemos transformar numeros: inteiros ou reais e stings
 * exemplos: 
 * const num1 = parseInt('5'); -> para numeros inteiros
 * const num1 = parseFloat('5'); -> para numeros reais
 * const num = Number('5'); -> Não faz distinção de int e float, faz a conversão automatico
 * 
 */

const num1 = parseFloat('10.9');
const num2 = Number('50');
console.log(num1 + num2);