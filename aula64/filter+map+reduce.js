// retorne a soma do dobro de todos os pares
// => filtrar pares
// => dobrar os valors
// => reduzir em uma soma todos os valores

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

const filtro = numeros.filter(valor => valor % 2 === 0);

const dobrarFiltro = filtro.map((valor) => {return valor * 2;});

const somaTudo = dobrarFiltro.reduce(function(acumulador, valor) {
    return acumulador += valor
}, 0);


console.log(filtro)
console.log(dobrarFiltro)
console.log(somaTudo)