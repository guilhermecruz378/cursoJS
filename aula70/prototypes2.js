// criar função construtora
// função loja de roupa(nome, preco)
// usar o prototype para criar metodos
// criar um metodo que calcula a porcentagem de um produto

function Loja(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Loja.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Loja.prototype.aumento = function(num) {
    return this.preco = this.preco + (this.preco * num)/ 100
}
const p1 = new Loja('camiseta', 50);

const p2 = {
    nome: 'caneca',
    preco: 15
};
// Object.setPrototypeOf(p2, p1);
Object.setPrototypeOf(p2, Loja.prototype);
// estou settando o prototype de Loja como se fosse o prototype de p2
p2.aumento(100)

// const p3 = Object.create(Loja.prototype);
// p3.preco = 113;
// p3.aumento(10);
const p3 = Object.create(Loja.prototype, {
    preco: {
        value: 99,
        writable: true,
        configurable: true,
        enumerable: true
    },
    tamanho: {
        value: 40,
        writable: true,
        configurable: true,
        enumerable: true
    }
});
p3.aumento(100),
console.log(p3);
