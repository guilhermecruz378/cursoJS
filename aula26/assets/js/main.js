//-> evitar que algo aconteça= capturar evento de submit do formulario usando o método:addEventListener();
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) { // captura-evento
    e.preventDefault();
    const inputPeso = e.target.querySelector('#idpeso'); // o target vai me informar o elemento que está recebendo o evento.
    const inputAltura = e.target.querySelector('#idaltura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    console.log(imc);
    //console.log('Evento previnido');
    //setResultado('ola mundo');
}); // captura-evento

function getNivel(imc) {
    const nivel = ['Abaixo do peso','Peso normal',' Sobrepeso',
        'Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];
    
    if (imc < 18.5) return nivel[0];
    if (imc <= 24.9) return nivel[1];
    if (imc <= 29.9) return nivel[2];
    if (imc <= 34.9) return nivel[3];
    if (imc <= 39.9) return nivel[4];
    if (imc > 40) return nivel[5];

}


function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (className) {
    const p = document.createElement('p'); //criando o paragrafo => estou criando um elemento esse método "createElement" == serve para criar algo no HTML, porem, ainda não escreve na minha página.
    return p;
    
}

function setResultado(msg, isValid) { // oque eu mandar de text aqui vai ser exibido na minha div id='resultado'.
    const resultado = document.querySelector('#resultado') //capturar resultado e obter o id='resultado'
    // resultado.innerHTML += `<p>${msg} </p>`; // add no html, oque mandar aqui vai aparecer na minha pagina, no 'local' onde estou adicionando, no caso na minha div id='resultado'.

    resultado.innerHTML = '';//Toda vez que chamar a função resultado vou zerar o HTML.

    /*
    const p = document.createElement('p'); //criando o paragrafo => estou criando um elemento esse método "createElement" == serve para criar algo no HTML, porem, ainda não escreve na minha página.
     */

    /*
    p.innerHTML = 'Qualquer coisa';//adicionado na memoria => colocando o HTML, no paragrafo.
    */

    //resultado.appendChild(p); // exibindo na página => esse metodo vai fazer a minha const p ser inserida como filho na minha div id='resultado'.

    /*
    p.classList.add('paragrafo-resultado'); // criando uma classe no meu elemento criado com JS.
    */

    const p = criaP();
    p.innerHTML = msg
    resultado.appendChild(p);
}




