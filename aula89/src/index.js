//import {nome, sobrenome as mudeiSobrenome, idade, soma} from './modulo1';
// usar 'as' na importação para alterar o nome que foi importado
// import {nome, sobrenome, idade} from './modulo1';
// import somando from './modulo1'
import Pessoa, {nome, sobrenome, idade} from './modulo1'

// const nome = 'Evelin';

console.log(nome);
const p1 = new Pessoa('gui', 'cruz')
console.log(p1)
//console.log(soma(10, 5));