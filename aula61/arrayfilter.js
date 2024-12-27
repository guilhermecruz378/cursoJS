// filter === filtrar
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

// const maiorQueDez = [];
// for(let valor of numeros) {
//     if(valor > 10) {
//         maiorQueDez.push(valor)
//     }
// }


// console.log(maiorQueDez)
// function callBackFiltter(valor, indice, array) {
//     if(valor > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

function callBackFiltter(valor) {
    return valor > 10;
}
const numerosFiltrados = numeros.filter(callBackFiltter);
console.log(numerosFiltrados);