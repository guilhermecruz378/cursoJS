class Pessoa{
    constructor(nome) {
        this.nome = nome;
    }
};
const idade = 24;
//exports.Pessoa = Pessoa;
module.exports = {
    idade, Pessoa
}