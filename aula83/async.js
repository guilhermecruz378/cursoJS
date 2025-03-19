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

    async function executa() {
        try{
        const fase1 = await esperaAi('fase1', 1000);
        console.log(fase1);

        setTimeout(function(){
            console.log('Essa promise estava pendente', fase1)
        },1000)

        const fase2 = await esperaAi('fase2', rand());
        console.log(fase2)
        const fase3 = await esperaAi('fase3', rand());
        console.log(fase3)
        console.log('terminamos na fase 3')
    } catch (erro) {
        console.log(erro)
    }
    
    }


//executa()
// pending -> pendente
// fullfiled -> resolvida
//  reject -> rejeitada

const teste2 = esperaAi('teste', 5000);
console.log(executa(teste2))