try {
    // è executado quando não há erro
    //console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro!!!!!!!!')
    }
} catch (e){
    // É executado quando há erro
    console.log('Tratando o erro');
} finally {
    // Sempre é executado
    // nem sempre há necessidade de usar
    // quando usar ? Quando algo tiver que executar mesmo com o erro
    console.log('Finally: Eu sempre sou executado');

}