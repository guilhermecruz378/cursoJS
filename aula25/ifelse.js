// Estruturas condicionais
// if => pode ser usado sozinho
// else => sempre que for utilizado é necessario um if antes 
/*
const horario = 25;

if (horario < 12 && horario >= 0){ // vai verificar se a variavel é menor do que o valor 'se' for menor vai executar o código.
    console.log('Bom dia!');

} else if (horario >= 12 && horario < 18) {
    console.log('Boa tarde');

} else if (horario >= 18 && horario <= 24 ) {
    console.log('Boa noite!');

} else {
    console.log(':D');
}
    */

const tenhoGrana = false;

if ( tenhoGrana){
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa')
}