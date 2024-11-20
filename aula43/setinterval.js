function mostraHora() { 
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{ 
        hour12: false
    });
}

const timer = setInterval(function() { // setInterval ==> é usado quando eu quero trabalhar com intervalo de tempo, 
    console.log(mostraHora());
}, 1000); // a cada 1segundo a função mostraHora vai ser executa pela função setInterval

setTimeout(function(){ // setTimeout ==> só executa uma vez, usando para parar a variavel timer
    clearInterval(timer);
}, 3000); // depois de 3 segundos da execução do programa essa função vai finalizar a execução do const timer

setTimeout(function() {
    console.log('Fim do programa!')
}, 3000); // depois de 3 segundos ira me retornar uma string