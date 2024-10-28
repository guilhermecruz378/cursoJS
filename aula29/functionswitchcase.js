function getdiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0: // caso diaSemana === 0 faça o código abaixo
        diaSemanaTexto = 'domingo';
        return diaSemanaTexto;
    case 1: 
        diaSemanaTexto = 'Segunda-feira';
        return diaSemanaTexto;
    case 2: 
        diaSemanaTexto = 'Terça-feira';
        return diaSemanaTexto;
    case 3: 
        diaSemanaTexto = 'Quarta-feira';
        return diaSemanaTexto;
    case 4: 
        diaSemanaTexto = 'quinta-feira';
        return diaSemanaTexto;
    case 5: 
        diaSemanaTexto = 'Sexta-feira';
        return diaSemanaTexto;
    case 6: 
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto; 
    default:
        diaSemanaTexto = '';
    }

    
}

const data = new Date();
const numDia = data.getDay();
let hoje = getdiaSemanaTexto(numDia);
console.log(hoje);