// O BREAK PODE MELHORAR O SEU CÓDIGO DAR MAIS VELOCIDADE PARA O CÓDIGO
// PODE POULPAR RECURSOS DO SERVIDOR 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//for (let valor of numeros) {
//for (let i in numeros) {
// for (i = 0; i < numeros.length; i++) {
//      let valor = numeros[i];

//     if (valor === 4 ){
//         console.log('----x---- ENCONTRADO')
//         break // apartir de quando o laço encontrar a palavra break vai sair do laço
//     }

//     console.log(`O número ->${valor}<- não é o valor desejado!`);
// }
contador = 0;
while (contador < numeros.length) {
    let valor = numeros[contador];

    if (valor === 5) {
        console.log('ACHEI')
        break
    }
    console.log(valor);
    contador ++;

}