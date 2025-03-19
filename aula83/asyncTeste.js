function analisandoDados(dado, tempo) {

    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(typeof dado !== 'string'){
                reject('dado Ilegal')
                return
            };
            resolve('proxima')
        },tempo)
    });
};

async function executa() {
    try {
    const fase1 = await analisandoDados('a1', 2000);
    console.log(fase1);
    const fase2 = await analisandoDados('a2', 3000);
    console.log(fase2);
    const fase3 = await analisandoDados(b3, 4000);
    console.log(fase3)
    } catch(e) {
        console.log(e, 'Constatei um erro no PROGRAMA')
    }
}

executa()

