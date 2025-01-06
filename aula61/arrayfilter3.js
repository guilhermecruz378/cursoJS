// como o filter+callback com todos os indicies funcionam
// Filter => sempre retornar um array, com a mesma quantidade de elementos ou menos.
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const numerosFiltrados = numeros.filter(function(valor, indicie, array) { 
    console.log(valor, indicie, array)
    return valor > 10;
});
console.log(numerosFiltrados);