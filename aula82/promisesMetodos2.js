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

