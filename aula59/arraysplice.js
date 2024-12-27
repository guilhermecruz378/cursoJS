// metodo splice

//                -5     -4      -3          -2        -1
//                0      1       2           3         4 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel','Julia']
// nomes.splice(indicie atual, delete, elem1, elem2)
const numeros = [1, 2, 3, 4, 5]
const removidosNuns = numeros.splice(3, 2)
// ele ira iniciar o *primeiro* parametro indica aonde a contagem vai terminar, o * segundo * sao quantos serão removidos no termino da contagem, quando terminar ele ira começar a excluir aonde a contagem parou
console.log(numeros);
console.log(removidosNuns);

//const removidosNomes = nomes.splice(-2, Number.MAX_VALUE)
const removidosNomes = nomes.splice(-2, 0)
console.log(nomes);
console.log(removidosNomes);




