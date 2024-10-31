const verdadeira = true;

// let tem escopo de bloco { ... bloco= tudo oque estiver aqui dentro}
// var só tem escopo de função

// let nome = 'gui';// criando 
// var nome2 = 'cruz';

// if (verdadeira) {
//     let nome = 'Guilherme'; // aqui eu não estou redeclarando eu estou criando dentro do bloco
//     var nome2 = 'Silva'; // redeclarando
//     console.log(nome, nome2)

//     if (verdadeira) {
//         let nome = 'Outra coisa'; // criando
//         var nome2 = 'Nobre'; // redeclarando
//         console.log(nome2, nome)
//     }
// }

// console.log(nome, nome2)

// A maior diferença é que o let fica dentro de bloco e não pode ser redeclarada
// o var pode ser redeclarada e não fica no escopo de bloco fica no escopo de função

// function falaOi () {
//     if (verdadeira) {
//         let nome = 'Luiz';
//         var sobrenome = 'Miranda'; // não respeita o escopo
//     }
//     console.log(sobrenome);
// }
// falaOi();

// elevação == rosth

console.log(sobrenome); // oque deveria acontecer é um erro mas por causa do rosth vai me retornar undefined

var sobrenome = 'cruz';