// let umaString = 'Um "\ texto\" '; == Um " texto" 


/*strings contem indices e eles começam a contar a partir do zero, para achar uma string em determinada posição usamos os []

*let umaString = 'Um texto ';
                  01234567 -> cada numero está em um indice/posição

console.log(umaString[4]); [-1]== undefined

Também podemos usar a função .charAt()
console.log(umaString.charAt(6));

console.log(umaString.concat()) -> concatenção
console.log(umaString.concat(' ', 'em', ' ', 'dia'));


console.log(umaString.indexOf('texto')); -> para localizar o indice onde a palavra começa

console.log(umaString.lastIndexOf('o')); -> similar a anterior porem do ultimo para tras
*/



/*
console.log(umaString.match(/[a-z]/g)); == expressão reglar > vai retornar todas as letras minusculas.

console.log(umaString.search(/[a-z]/)); == ai mostrar o indice de onde foi encntrado a primeira letra miuscula

console.log(umaString.replace('Um', 'Outra')); == expressão regular opcional -> essa função troca uma coisa por outra ou uma palavra por outra.

console.log(umaString.replace(/Um/, 'Outra')); == troca a primeira letra ou palavra encontrada.
console.log(umaString.replace(/Um/g, 'Outra')); == troca todas as letras ou palavras encontradas. 


*/



/*
console.log(umaString.length) == para saber o tamanho da string em caracteres desconsidera o valor 0


*/
let umaString = 'Um texto';
console.log(umaString.length)