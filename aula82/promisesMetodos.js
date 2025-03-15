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
};

const promises = [
    'Primeiro valor',
    esperaAi('promisse 1', 3000),
    esperaAi('promise 2', 2000),
    esperaAi('promise 3', 5000),
    'Valor final'
]

Promise.all(promises).then( al => {
    for(let valor of al){
        if(valor === 'promise 2'){
            valor = 777
        }
        console.log(valor)
    }
    console.log(promises)
}).catch(e=> {
    console.log(e)
})