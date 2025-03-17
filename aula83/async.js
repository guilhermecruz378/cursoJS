function rand(min=0, max=3) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(typeof msg !== 'string'){ 
                reject('CAI NO ERRO') 
                return
            }
            
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
};
try{
    async function executa() {
        const fase1 = await esperaAi('fase1', rand());
        console.log(fase1)
        const fase2 = await esperaAi('fase2', rand());
        console.log(fase2)
        const fase3 = await esperaAi(4, rand());
        console.log(fase3)
        console.log('terminamos na fase3')
    }
} catch (erro) {
    console.log(erro)
}


executa()