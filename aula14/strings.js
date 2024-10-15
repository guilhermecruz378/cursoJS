// let umaString = 'Um "\ texto\" '; == Um " texto" 


/* ----------- =========== -------------- 

strings contem indices e eles começam a contar a partir do zero, para achar uma string em determinada posição usamos os []

*let umaString = 'Um texto ';
                  01234567 -> cada numero está em um indice/posição

console.log(umaString[4]); [-1]== undefined

Também podemos usar a função .charAt()
console.log(umaString.charAt(6));

console.log(umaString.concat()) -> concatenção
console.log(umaString.concat(' ', 'em', ' ', 'dia'));


=> console.log(umaString.indexOf('texto')); -> para localizar o indice onde a palavra começa

=> console.log(umaString.lastIndexOf('o')); -> similar a anterior porem do ultimo para tras
*/



/* ------------- ============= ---------------
=> console.log(umaString.match(/[a-z]/g)); == expressão reglar > vai retornar todas as letras minusculas.

=> console.log(umaString.search(/[a-z]/)); == ai mostrar o indice de onde foi encntrado a primeira letra miuscula

=> console.log(umaString.replace('Um', 'Outra')); == expressão regular opcional -> essa função troca uma coisa por outra ou uma palavra por outra.

console.log(umaString.replace(/Um/, 'Outra')); == troca a primeira letra ou palavra encontrada.
console.log(umaString.replace(/Um/g, 'Outra')); == troca todas as letras ou palavras encontradas. 


*/



/* --------------- ============= ----------------

=> console.log(umaString.length) == para saber o tamanho da string em caracteres desconsidera o valor 0


*/

/* --------------- ================= ----------------
=> console.log(umaString.slice(2, 5)); == fatiamento / são necessario dois parâmetros o incio e o fim, o ultimo indice não é contado.

=> console.log(umaString.slice(-5)); == o fatiamento está sendo contado com o total de caracteres menos -5

'Um texto'
 01234567
   -5

console.log(umaString.slice(-5, umaString.length -1));
*/

/* ----------- =========== -------------
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); == faz a mesma coisa que o código acima

*/

/* ----------- =========== -------------
console.log(umaString.split(' ')) == dividindo uma string, precisa-se colocar uma letra ou espaço, etc.. dentro das aspas. Os valores pedidos não aparece.

console.log(umaString.split(' ', 2)) == podemos pedir quantidade de fatiamento
*/

/* ----------- =========== -------------
console.log(umaString.toUpperCase()) == tudo em maiusculas
console.log(umaString.toLowerCase()) == tudo em minusculas 
*/

let umaString = 'Um texto';
console.log(umaString.split('t')) 