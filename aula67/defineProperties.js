// define properties 
// trava mais de um objeto
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true, // configuravel
        },
        preco: { 
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })

};

const p1 = new Produto('caneta', 2, 5);
p1.nome = 'caderno'
console.log(p1)
//console.log(Object.keys(p1));

for(let chaves in p1) {
    console.log(p1[chaves])
}