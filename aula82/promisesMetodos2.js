function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout( () => {
            if(typeof msg !== 'string'){ 
                reject(false + ' - Cai no erro') 
                return
            }
            // reject(new Error('erro'))

            
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
};

// promise.reject
function baixaPagina () {
    const emCache = false;

    if(emCache) {
        return Promise.reject('pagina em cache')// isso cai no cache
    } else {
        return esperaAi('Baixa a página', 3000)// isso cai no then
    }
}

baixaPagina().then( dadosPagina =>{
    console.log(dadosPagina)
}).catch(erro => {
    console.log('ERRO',erro)
})

// promise.resolve
// function baixaPagina () {
//     const emCache = false;

//     if(emCache) {
//         return Promise.resolve('pagina em cache')//isso cai no then
//     } else {
//         return esperaAi('Baixa a página', 3000)//isso cai no cache
//     }
// }

// baixaPagina().then( dadosPagina =>{
//     console.log(dadosPagina)
// }).catch(erro => {
//     console.log(erro)
// })