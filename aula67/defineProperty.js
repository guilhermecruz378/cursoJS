// define property == oque é? 
// travar alguma coisa para não ser alterado;
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque,// valor
        writable: false, // writable == eu posso mudar o valor?
        configurable: true, // pode configurar? apagar, etc...
    })

};

const p1 = new Produto('caneta', 2, 5);
//console.log(p1)
console.log(Object.keys(p1));

for(let chaves in p1) {
    console.log(chaves)
}