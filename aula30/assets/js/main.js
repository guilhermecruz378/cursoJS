const container = document.querySelector('.container');
const data = document.querySelector('#data')

function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`; 
}


function formataData(data) {
    let diaSemana = data.getDay(); 

    if (diaSemana === 0) {
        diaSemana = 'Domingo';

    } else if (diaSemana === 1) {
        diaSemana = 'Segunda-feira';

    } else if (diaSemana === 2) {
        diaSemana = 'Terça-feira';

    } else if (diaSemana === 3) {
        diaSemana = 'Quarta-feira';
        
    } else if (diaSemana === 4) {
        diaSemana = 'Quinta-feira';
        
    } else if (diaSemana === 5) {
        diaSemana = 'Sexta-feira';
        
    } else if (diaSemana === 6) {
        diaSemana = 'Sábado';
        
    } 
    const diaNum = data.getDate();
    let mes = data.getMonth() + 1;

    if (mes === 1) {
        mes = 'Janeiro';

    } else if (mes === 2) {
        mes = 'Fevereiro';

    } else if (mes === 3) {
        mes = 'Março';

    } else if (mes === 4) {
        mes = 'Abril';
        
    } else if (mes === 5) {
        mes = 'Maio';
        
    } else if (mes === 6) {
        mes = 'Junho';
        
    } else if (mes === 7) {
        mes = 'Julho';
        
    } else if (mes === 8) {
        mes = 'Agosto';
        
    } else if (mes === 9) {
        mes = 'Setembro';
        
    } else if (mes === 10) {
        mes = 'Outubro';
        
    } else if (mes === 11) {
        mes = 'Novembro';
        
    } else if (mes === 12) {
        mes = 'Dezembro';
        
    } 
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());

    return `${diaSemana}, ${diaNum} de ${mes} de ${ano} ${hora}:${min}`;

}

const dataNova = new Date();
let dataAtual = formataData(dataNova);
dataAtual.innerHTML = `${data.value}`;
