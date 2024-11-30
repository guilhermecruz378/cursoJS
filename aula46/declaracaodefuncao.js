// declaração de função (function hoisting)

falaOi()

function falaOi() {
    console.log('Oie');
}

// fist-class objects (objetos de primeira classe) a função pode ser tratada como dados
// expressao de função => function expression

const souUmDado = function () { // a minha variavel recebe uma função
    console.log('Sou um dado')
}
souUmDado()

function executaFuncao(funcao) {
    console.log('Vou executar sua função')
    funcao()
}
executaFuncao(souUmDado);

// arrow function => uma declaração curta

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow();

// dentro de um objeto

const obj = {
    //falar : function() {
    falar() {
        console.log("Estou falando...")
    }
}
obj.falar()