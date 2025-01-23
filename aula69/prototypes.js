// construtora -> molde (classes)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
    //this.nomeCompleto = () => 'ORIGINAL' +''+ this.nome + ' ' + this.sobrenome

};

Pessoa.prototype.haha = 'hahahahahaha';
Pessoa.prototype.nomeCompleto = () => this.nome +' '+this.sobrenome;


// instância => 
const p1 = new Pessoa('guilherme', 'cruz');
const data = new Date();

console.dir(p1)
console.dir(data)