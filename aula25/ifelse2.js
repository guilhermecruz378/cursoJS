const numero = 11;


// para verificar duas coisas é necessario separar os blocos 
// else if => ira ocorrer até a engine do jS encontrar a 1ª condição verdadeira
if (1 === 1) { 
    console.log('verdadeiro')
}

if (numero >= 0 && numero <= 5) {
    console.log('Está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('Está entre 6 e 8');
}  else if (numero >= 9 && numero <= 11) {
    console.log('Está entre 9 e 11');
}  else {
    console.log('Não encontrei na base de dados');
}