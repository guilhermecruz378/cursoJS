function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(valor) {
    this.preco += valor;
};
Produto.prototype.diminui = function(valor) {
    this.preco -= valor;
};




function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa
Camisa.prototype.aumento = function(porcentagem) {
    this.preco = this.preco + (this.preco * (porcentagem / 100))
}
/**
é como se eu estivesse criando um objeto vazio na minha função construtora e esse objeto vai ter as mesmas funçoes que a função Produto tem. 

na regra do jogo o prototype da função Camisa vai ter as mesmas coisas que a função produto.
 */

function Caneca(nome,preco, material,estoque) {
    Produto.call(this,nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca
Caneca.prototype.diminui = function(percentual) {
    this.preco = this.preco - ( this.preco *(percentual / 100 ))
}


const caneca = new Caneca('caneca',25, 'Porcelana', 5);
//camiseta.aumento(100)
// camiseta.Produto(20) ainda não vai funcionar
console.log(caneca)