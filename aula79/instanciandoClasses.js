class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // metodo instância só consigo CESSALO ultiizando a instância
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    // metodo estático, só consigo acessalo pela classe
    static trocaPilha() {
        console.log('VOU TROCALO')
    }

    static somar(x, y) {
        return x + y
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume(); // metodo com instância
controle1.aumentarVolume(); // metodo com instância
ControleRemoto.trocaPilha(); // metodo estático
ControleRemoto.somar(2, 3); // metodo estático
console.log(controle1)
console.log(ControleRemoto.somar(2, 3));
