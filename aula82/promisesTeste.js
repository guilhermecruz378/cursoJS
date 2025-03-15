// const minhaPromises = new Promise((resolve, reject) => {
//     let sucesso = true;

//     setTimeout(() => {
//         if(sucesso) {
//             resolve('Operação concluida com sucesso')
//         } else {
//             reject("Algo deu errado.")
//         }
//     }, 3000);
// });

// minhaPromises.then((msg) => {
//     console.log('SUCESSO!', msg)
// }).catch((erro) => {
//     console.log('ERRO: ',erro)
// });
function vamosVer(string) {
    return new Promise((resolve, reject)=> {
    
        setInterval( ()=> {
            if(typeof string !== 'string') return reject(false);
            resolve('resolvido: é uma STRING', string)
        },1000)
    });
}
    vamosVer('começando').then(msg => {
        console.log('concluido', msg)
        return vamosVer('proximo')
    
    }).then((msgdaMensagem) => {
        console.log(msgdaMensagem)
    
    }).catch((erro) => {
        console.log('erro:', erro)
    })


