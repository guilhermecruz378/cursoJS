// --------- adicionando e removendo ou só adicionando ---------
//                -5     -4      -3          -2        -1
//                0      1       2           3         4 
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel','Julia']

const removidosNomesAdd = nomes.splice(3, 2, 'Gui')
//console.log(removidosNomesAdd);
console.log(nomes);

const removidosAdd = nomes.splice(3, 0, 'Guilherme')
//console.log(removidosAdd);
console.log(nomes);
