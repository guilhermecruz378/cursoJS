// Operador ternário é: ?(interrogação) ou :(Dois pontos).
// Operação ternária => pode substituir o if else 

const pontuacaoUsuario = 1000;
const niveUsuario = pontuacaoUsuario >= 1000 ? 'usuario VIP' : 'Usúario normal'; // foi colocado uma operação condicional em uma linha e em uma variavel, é igua a: 
/*
if (pontuacaoUsuario >= 1000) {
    console.log('usuario VIP');
} else {
    console.log('Usúario normal');
}
*/

console.log(niveUsuario);