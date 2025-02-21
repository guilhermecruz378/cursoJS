// O polimorfismo é a maneira de fazer o metodo se comportar de maneira diferentes em sub classes

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: Saldo$${this.saldo.toFixed(2)}`)
        return;
    };
    
    this.saldo -= valor
    this.verSaldo()
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
};
Conta.prototype.verSaldo = function() {
    console.log(`ag.:${this.agencia} | conta.:${this.conta} | Saldo$ : ${this.saldo.toFixed(2)}`)
};

// const conta1 = new Conta(141,454,100);
// conta1.sacar(200)
//console.log(conta1.verSaldo())

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this,agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: Saldo$${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function CP(agencia, conta, saldo) {
    Conta.call(this,agencia, conta, saldo);
};

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new ContaCorrente(11, 22, 0.00, 100);
cc.depositar(10)
cc.sacar(110);
cc.sacar(1);

console.log('-=--=-=-=-=-==-=-=-==-=-')

const cp = new CP(12, 33, 0.00);
cp.depositar(10)
cp.sacar(110);
cp.sacar(1);
