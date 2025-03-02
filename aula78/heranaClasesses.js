class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;

    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true;

    }
    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' Já desligado ')
            return
        }
        this.ligado = false
    }
}

// const d1 = new DispositivoEletronico('Televisão')
// d1.ligar()
// d1.desligar()
// console.log(d1)

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

// const s1 = new Smartphone('Samsung', 'Verde agua', 's20');
// s1.ligar()
// s1.ligar()
// console.log(s1)

class Tablet extends DispositivoEletronico {
    constructor(nome, modelo) {
        super(nome);
        this.modelo = modelo;
        this.gps;
    }
    gps(valor) {
        const maiusculas = valor.toUpperCase();
        //console.log(maiusculas)
        if(maiusculas === 'SIM') {
            console.log('Você tem permissão para ultilização');
        } else {
            console.log('Você NÃO tem permissão para ultilização');
        }
    }
    // gps(algo) {
    //     algo.toUpperCase()
    //    if(algo === 'SIM') {
    //     console.log('Você está em casa')
    //    } else {
    //     console.log('Você está fora de casa')
    //    }
    // }
    ligar() {
        console.log('Você alterou o método ligar')
    }
}

const t1 = new Tablet('tablet de guilherme', 'm25');
t1.ligar()
console.log(t1)
t1.gps('não')