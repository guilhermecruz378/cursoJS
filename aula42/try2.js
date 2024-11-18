function retornaHora(data) {
    if (data && !(data instanceof Date)) { // isso é: essa variavel 'data' não é uma instância dessa função construtora(Date) ==> só vai ser instancia do Date oque eu ultilizo (new Date)
        throw new TypeError('Esperasndo instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}
try {
    const data = new Date('01-01-1970 03:58:12')
    const hora = retornaHora(new Date());
    console.log(hora);
} catch (e){
    //Tratamento erro
} finally {
    console.log('Tenha um bom dia.')
}
