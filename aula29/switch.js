const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0: // caso diaSemana === 0 faça o código abaixo
        diaSemanaTexto = 'domingo';
        break; // break é necessario para sair
    case 1: 
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2: 
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3: 
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4: 
        diaSemanaTexto = 'quinta-feira';
        break;
    case 5: 
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6: 
        diaSemanaTexto = 'Sábado';
        break; 
    default:
        diaSemanaTexto = '';
}

/*
if (diaSemana === 0) {
    diaSemanaTexto = 'domingo';
} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda-feira';
}  else if (diaSemana === 2){
    diaSemanaTexto = 'Terça-feira';
}  else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta-feira';
}  else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta-feira';
}  else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta-feira';
}  else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
} 
*/

console.log(diaSemanaTexto);