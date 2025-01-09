const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];


const nomePessoa = pessoas.map(function(obj) {
    return obj.nome;
})

//const removeNome = pessoas.map( obj => obj.idade);
// const removeNome = pessoas.map( function(obj) {
//     delete obj.nome
//     return obj
// });
// const removeNome = pessoas.map( function(obj) {
//     return {idade: obj.idade}
// }); // essa forma daria errado em eronfunction, sera necessario passa-lá para uma expressão
const removeNome = pessoas.map(obj => ({idade: obj.idade}))

const id = pessoas.map(function(obj, indice) {
    //obj.id = indice // ele esta iterando no meu objeto original
    //é neceessario fazer uma cópia para não alterar o original
    const novObj = {...obj};
    novObj.id = indice + 1;
    return novObj
})


// console.log(nomePessoa)
// console.log(removeNome)
console.log(id)
console.log('-=-=-=-=-=-=-=-=-=-=');
console.log(pessoas)