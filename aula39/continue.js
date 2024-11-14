// POSSO USAR ESSA FUNÇÃO QUANDO EU QUERO QUE ALGUMA COISA EM ESPECIFICO ACONTEÇA NO MEU LAÇO

// ----- CONTINUE CONTINUA PARA PROXIMA ITERAÇÃO
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let valor of numeros) {

    if (valor % 2 === 0) {
        continue; // Essa função vai pular uma interação do laço/ vai encontrar a condição e voltar pro inicio
    }

    if (valor === 5) {
        console.log('----x---- NADA DE 5 ')
        continue
    }

    console.log(`O número ->${valor}<- é ímpar!`);
}