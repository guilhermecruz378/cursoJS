const nome = 'Guilherme'
const sobrenome = 'Cruz'
const idade = 23
const peso = 77.6
const alturaEmM = 1.66
let imc;
imc = peso / (alturaEmM * alturaEmM)
let anoNascimento;
anoNascimento = 2024 - idade

/*
console.log(nome, sobrenome, 'tem', idade,'anos, pesa', peso, 'Kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de: ', imc.toFixed(2));
console.log(nome,sobrenome,'nasceu em', anoNascimento);
*/

// usaremos a templete strings, colocaremos todas as variaveis dentro de: ${}

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de:  ${imc.toFixed(2)}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);