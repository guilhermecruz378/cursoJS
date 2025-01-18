// getter == obter valor
// setter == setar o valor, configuar o valor
// exemplo de uso abaixo


function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque',{
        //value: => getter
        // writable: => setter
        enumerable: true, 
        configurable: true,
        get: function() { // ele vai pegar a variavel estoque
            return estoquePrivado;
        },
        set: function(valor) { // vai pegar o retorno do get
            if(typeof valor !== 'number') {
                throw new TypeError('Não é um número');
            }
            estoquePrivado = valor // estoquePrivado vai pegar o valor que foi recebido como parametro
        }
    })

};

function criaProduto(produto) {
    return {
        get nome() {
            return produto;
        },
        set nome(valor) {
            valor = valor.replace('e caneta', '');
            produto = valor;
        }
    }
};

const p2 = criaProduto('Biblia');
p2.nome = 'Papel e caneta';
console.log(p2.nome);

// const p1 = new Produto('caneta', 2, 5);
// //console.log(p1);
// p1.estoque = 500;
// console.log(p1.estoque)

