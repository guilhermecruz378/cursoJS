function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // ====== CAPTURA DE ERRO 

        //throw ('x e y precisam ser numeros');// é usado para criar um erro personalizado da forma que eu quero que seja escrito na função
        throw new Error('x e y precisam ser numeros') // cria um novo erro => para podermos ver o erro 
        }
    return x + y;

}
 // quando não há erro executa o try
try { // tentativa de execução caso tenha erro vai para o proximo bloco
    console.log(soma(7 , 9));
    console.log(soma('x', 10)); // erro do programa
} catch (err) { // quando há erro executa o catch
    // erro capturado e resolvido
    //console.log(err)
    console.log('Alguma coisa mais amigavel para o úsuario');
}