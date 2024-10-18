// é como se fosse coleçoes é uma lista de coisas
// para criar uma array utilizamos [] separados por virgulas
// const alunos = ['luiz', 'guilherme', 'python'];
//                  0           1           2
// array é considerado um objeto indexado

const alunos = ['luiz', 'guilherme', 'python'];

alunos.push('Eduardo');
alunos.push('João');
console.log(alunos.slice(0, 4))//=> fatiamento

//delete alunos[1]; //=> Ele remove mas considera o espaço vazio

//alunos.shift(); // => remove o primeiro 
//const removido = alunos.shift(); // => remove o primeiro e guarda na variavel 


// alunos.pop(); // => remover o ultimo incicie do array
// const removido = alunos.pop(); => guarda em uma variavel o indicie removido

//alunos.unshift('Maraiza') // adicona no inicio do array
//alunos.unshift('Silvio')


//alunos.push('Cruz'); // => adiciona um elemento no fim do array
//alunos.push('Silva');// => adiciona um elemento no fim do array

//console.log(alunos.length);// => saber o tamanho do array
//alunos[alunos.length] = 'Luiza'; //=> adicionando no fim do array
//alunos[alunos.length] = 'Pica-pau'; //=> adicionando no fim do array

/*alunos[0] = 'Evelin' // trocando/altera de strings no array
alunos[3] = 'Antonieta' // adicionando no indicie array
console.log(alunos);*/

//console.log(alunos)
//console.log(alunos[2]) // => para mostrar apenas o indicie
//console.log(alunos[1])