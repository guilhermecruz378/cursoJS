/* OQUE É PROMISES ? 
Promises são um recurso usado para trabalhar com operações assíncronas. Elas representam um valor que pode estar disponível agora, no futuro ou nunca.


Elas acontecem em paralelo com o restante do código, pode ser que outra coisa apareça antes do que a promise
*/ 

function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') return reject(false) 
        // reject(new Error('erro'))

        setTimeout( () => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com BD', rand(1, 3)).then( resposta => {
    console.log(resposta)
    return esperaAi('Buscando base de dados.', rand(1,3));

}).then(resposta => {
    console.log(resposta);
    return esperaAi(777, rand(1,3));
    
}).then( resposta => {
    console.log(resposta);

}).then(() => {
    console.log('Exibde dados na tela.')
}).catch(e => {
    console.log('ERRO:', e)
})

console.log('Isso sera exibido antes de qualquer promisse.')