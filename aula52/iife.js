// IIFE => immediately invoked function expression
// uma função que inicia automaticamente sem estar no escopo global
// Função imediata

// (function() {
//     const nome = 'Guilherme'
//     setInterval(function(){
//         console.log(nome)
//     }, 1000)
// })();

// const nome = 'Cruz';
// console.log(nome);

(function (idade, peso, altura) {
    const sobrenome = 'da Silva Cruz';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(criaNome('Guilherme'))
    }

    falaNome()
    console.log(idade,peso,altura)
})(23, 70, 1.77);