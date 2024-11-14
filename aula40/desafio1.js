function retornaMaior(num1, num2) {
    const x1 = num1;
    const x2 = num2;
    let resultado = 0;

    
    if (x1 > x2) {
        resultado = x1;
    } else {
        resultado = x2;
    }

    return resultado;
}

const num1 = 6851;
const num2 = 78780;

console.log(retornaMaior(num1, num2));

