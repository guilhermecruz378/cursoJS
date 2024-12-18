// Função construtora retorna um objeto
// Função fabrica retorna um objeto
// Construtora=> precisamos mudar a convenção de como criamos as coisas
//  Construtora => precisamos iniciar o nome com letra MAIUSCULA: Pessoa (new)

function Pessoa(nome, sobrenome) {
    // variaveis privadas não estao disponiveis fora do escopo da função
    const id = 123456;
    const metodoInterno = () => {

    }

    // atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa('Guilherme', 'Cruz')
p1.metodo();