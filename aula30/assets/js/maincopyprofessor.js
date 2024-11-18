const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = 'Só pra você ver';

function diaSemanaTexto(num) {
    const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 
       'Quita-feira','Sexta-feira','Sábado' ]
    return diaSemana[num]
    
//     let diaSemana;
//     switch (num){
//     case 0: 
//         return diaSemana = 'Domingo'
//     case 1: 
//         return diaSemana = 'Segunda-feira'
//     case 2: 
//         return diaSemana = 'Terça-feira'
//     case 3: 
//         return diaSemana = 'Quarta-feira'
//     case 4: 
//         return diaSemana = 'Quita-feira'
//     case 5: 
//         return diaSemana = 'Sexta-feira'
//     case 6: 
//         return diaSemana = 'Sábado'
//     default:
//         diaSemana = ''
//     }
 }

function mesTexto(num) {
    const meses = ['janeiro','Fevereiro','Março' , 'Abril', 'Maio', 'Junho',
         'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[num];

    // let mes;
    // switch (num) {
    // case 1: 
    //     return mes = 'janeiro';
    // case 2: 
    //     return mes = 'Fevereiro';
    // case 3: 
    //     return mes = 'Março';
    // case 4: 
    //     return mes = 'Abril';
    // case 5: ;
    //     return mes = 'Maio';
    // case 6: 
    //     return mes = 'Junho';
    // case 7: 
    //     return mes = 'Julho';
    // case 8: 
    //     return mes = 'Agosto';
    // case 9: 
    //     return mes = 'Setembro';
    // case 10: 
    //     return mes = 'Outubro';
    // case 11: 
    //     return mes = 'Novembro';
    // case 12: 
    //     return mes = 'Dezembro';
    // default: 
    // return mes;
    // }
}

function criaData(data) {
    const diaSemana = data.getDay();
    //const numeroMes = data.getMonth() + 1;
    const numeroMes = data.getMonth(); // usando array não precisa de +1

    const nomeDia = diaSemanaTexto(diaSemana);
    const nomeMes = mesTexto(numeroMes);
   

    return `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;

}

h1.innerHTML = criaData(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});