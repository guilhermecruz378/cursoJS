class Pessoa{
constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa('Gui', 'Cruz');
p1.nomeCompleto = 'Maite Helena Nobre Cruz'
console.log(p1)