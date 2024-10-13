let nome = 'Guilherme'; // toda variavel em js começa com let ou var
var a = 0;

console.log(nome,'nasceu em 2001')
console.log('Em 2018', nome, 'conhceu Evelin')
console.log(nome, 'casou-se com Evelin em 2022')
console.log('Evelin e ', nome, 'ainda não tiveram filhos')
console.log('Ambos são Evangelicos')

// Também é possivel declarar a variavel e depois inicializa-la como a baixo
let ano; // declarando
ano = 'março de 2001' // inicializando
console.log(ano) // mostrando na tela

/* podemos auterar a variavel mas não declarar novemente com let:

        declarando -> let nome = 'alguma coisa' ;
        console.log(nome);

    isso geraria um erro
*/

// alterando a variavel 
ano = 'agosto de 2002'
console.log(ano);

// Não podemos criar variaveis com nomes reservados
// variaveis precisam ter nomes significativos -> let nome = 'jubileu'
// não pode começar a variavel com um número isso geraria um erro 
// não pode conter espaços ou traços

/* 
Utilizamos camelCase == letra maiuscula em nomes compostos:
    let nomeCliente = "antonio"
    let nomeServidor = "hotran"
*/

/*
// Case-sensitive == letras maiusculas e minusculas tem diferença:
    let nomeCliente = "antonio"
    let nomecliente = "hotran"
*/