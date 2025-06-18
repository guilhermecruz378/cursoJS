const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever')

const pessoas = [
    {nome: 'Guilherme',idade: 24},
    {nome: 'Evelin',idade: 22},
    {nome: 'Matteo',idade: 1},
    {nome: 'Maya',idade: 2},
];

const json = JSON.stringify(pessoas,'',2);
escreve(caminhoArquivo, json)