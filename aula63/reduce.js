// reduce reduz o array a um único elemento
//
//

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// const total = numeros.reduce(function (acumulador, valor, indicie, array){
//     acumulador += valor;
//     return acumulador
// }, 0) // => esse zero é o valor inicial do meu acumulador

const total = numeros.reduce(function (acumulador, valor, indicie, array){
    //if(valor % 2 === 0) acumulador.push(valor)
    acumulador.push(valor * 2)
    //acumulador += valor;
    return acumulador
}, []) // => esse array é meu acumulador
console.log(total);