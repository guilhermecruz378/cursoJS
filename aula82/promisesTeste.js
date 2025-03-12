const minhaPromises = new Promise((resolve, reject) => {
    let sucesso = true;

    setTimeout(() => {
        if(sucesso) {
            resolve('Operação concluida com sucesso')
        } else {
            reject("Algo deu errado.")
        }
    }, 3000);
});

minhaPromises.then((msg) => {
    console.log('SUCESSO!', msg)
}).catch((erro) => {
    console.log('ERRO: ',erro)
})