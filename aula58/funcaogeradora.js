// Função geradora tem a função de parar o código em determinado momento
// código pausado
// Declaração: function* geradora() {}

function* geradora() {
    yield 'Valor1';
    yield 'Valor2';
    yield 'Valor3';
}

const g1 = geradora();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next().done);
console.log(g1.next().value);