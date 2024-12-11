// IIFE => immediately invoked function expression
// uma função que inicia automaticamente sem estar no escopo global

(function() {
    const nome = 'Guilherme'
    setInterval(function(){
        console.log(nome)
    }, 1000)
})();

const nome = 'Cruz';
console.log(nome);