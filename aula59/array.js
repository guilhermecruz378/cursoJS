// elementos indexados
// //             0            1        2
//const nomes = ['Guilherme', 'Evelin', 'Davi']; // => array literal
const nomes = new Array('Guilherme', 'Evelin', 'Davi') // => array consrutor
nomes[2] = 'João';
delete nomes[2];
console.log(nomes)