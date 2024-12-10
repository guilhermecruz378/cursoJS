// Closures == tem a habilidade de utilizar o escopo lexico
// É a capacidade de uma funcção ter outra função que acessa o escopo lexico e retorna entro dessa funcão, algo que esteja no escopo lxico

function retornaFuncao(nome) {
    return function() { // função anonima acessando a função anterior
        return nome; // acessando o escopo lexico da function retornaFuncao e retornando o parametro da mesma
    }
}

const funcao = retornaFuncao('Guilherme');
const funcao2 = retornaFuncao('Cruz');
console.log(funcao());
console.log(funcao2());
