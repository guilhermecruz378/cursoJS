function LojaDeCarros(carro, preço, ano) {
    this.carro = carro;
    this.preço = preço;
    this.ano = ano;
   
    Object.defineProperties(this, {
        carro:{ 
            get () {
            return carro
        },
        set(valor) {
            if(typeof valor !== 'string') {
                throw new TypeError('Não é um carro')
            }
            carro = valor
        },
        enumerable: true,
        configurable: true
    },
    })

};

const carro1 = new LojaDeCarros('palio', 5000, 1997)
console.log(carro1.carro);