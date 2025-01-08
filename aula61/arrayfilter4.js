// retorne as pessoas que tem o nome com 5 letras ou mais

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const cincoLetras = pessoas.filter(obj => obj.nome.length>= 5);
console.log(cincoLetras);
// const maiorQue50 = pessoas.filter(obj => obj.idade > 50);
// console.log(maiorQue50);
// const terminaA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
// console.log(terminaA);
