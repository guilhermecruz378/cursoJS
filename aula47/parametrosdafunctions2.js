function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['Guilherme', 'Cruz', 23]);

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

function conta(operador, acumulador, ...numeros) {
    //let i = 0
    for (let soma of numeros) {
        if (operador === '+') acumulador += soma
        if (operador === '-') acumulador -= soma
        if (operador === '*') acumulador *= soma
        if (operador === '/') acumulador /= soma
    }
    console.log(acumulador)
}

conta('+', 0, 1,2,3,4,5,6);

const somas = (operador, acumulador, ...numeros) => {
    //let i = 0
    for (let soma of numeros) {
        if (operador === '+') acumulador += soma
        if (operador === '-') acumulador -= soma
        if (operador === '*') acumulador *= soma
        if (operador === '/') acumulador /= soma
    }
    console.log(acumulador)
};

somas('*', 0, 1,2,3,4,5,6);