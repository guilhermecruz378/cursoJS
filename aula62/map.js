//funciona como filtrar porem devolve os valores alterados
// Dobre os números
//

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosDobrados = numeros.map( valor => valor * 2)
const nomeTras = numeros.map( valor => `Gui ${valor}`)
const triplicaImpar = numeros.map(function(valor) {
    if(valor % 2 === 1) {
        return valor * 3
    } else {
        return '**'
    }
})

console.log(numeros)
console.log(nomeTras)
console.log(numerosDobrados)
console.log(triplicaImpar)



// const pessoas = [
//     {nome: 'Luiz', idade: 62},
//     {nome: 'Maria', idade: 23},
//     {nome: 'Eduardo', idade:55},
//     {nome: 'Leticia', idade: 19},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ];
