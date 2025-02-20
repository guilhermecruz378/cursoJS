// O polimorfismo é a maneira de fazer o metodo se comportar de maneira diferentes em sub classes

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        this.verSaldo()
        return;
    };
    
    this.saldo -= valor
   
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
};
Conta.prototype.verSaldo = function() {
    console.log(`ag.:${this.agencia} | conta.:${this.conta} | Saldo$ : ${this.saldo}`)
};

const conta1 = new Conta(141,454,100);
conta1.verSaldo()
//console.log(conta1.verSaldo())