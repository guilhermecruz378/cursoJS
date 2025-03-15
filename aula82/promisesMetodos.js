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

const promises = [
    //'Primeiro valor',//isso não é uma promessa
    esperaAi('promisse 1', rand(1,4)), //isso é uma promessa
    esperaAi('promise 2', rand(1,4)),
    esperaAi('promise 3', rand(1,4)),
    esperaAi(444, rand(1,4)),
    // 'Valor final' //isso não é uma promessa
];


// Promise.race tenta resolver uma a uma a primeira que resolver ele te entrega o valor mesmo sendo um reject
Promise.race(promises).then( al => {
        console.log(al)
}).catch(e => {
    console.log(e)
})

// Promise.all tenta resolver todas se uma der errado rejeita todas 
// Promise.all(promises).then( al => { 
//     for(let valor of al){
//         if(valor === 'promise 2'){
//             valor = 777
//         }
//         console.log(valor)
//     }
//     console.log(promises)
// }).catch(e=> {
//     console.log(e)
// })

