function mostraHora() { 
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{ 
        hour12: false
    });
}

setInterval(function() { // setInterval ==> é usado quando eu quero trabalhar com intervalo de tempo, 
    console.log(mostraHora());
}, 1000);