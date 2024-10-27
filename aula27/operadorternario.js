// Operador ternário é: ?(interrogação) ou :(Dois pontos).
// Operação ternária => pode substituir o if e else 
// (condição) '?'  para valor verdadeiro e ':' para valor falso;

const pontuacaoUsuario = 1000;
const niveUsuario = pontuacaoUsuario >= 1000 ? 'usuario VIP' : 'Usúario normal'; // foi colocado uma operação condicional em uma linha e em uma variavel, é igua a: 
/*
if (pontuacaoUsuario >= 1000) {
    console.log('usuario VIP');
} else {
    console.log('Usúario normal');
}
*/

const corUsuario = 'Branco'; // cor que o usuario vai escolher
const corPadrao = corUsuario || 'Preta'; // se o usuario não escolher a cor sera preta => operação ternária na variavel

console.log(niveUsuario, corPadrao); // vai mostrar o resultado das operações ternárias.