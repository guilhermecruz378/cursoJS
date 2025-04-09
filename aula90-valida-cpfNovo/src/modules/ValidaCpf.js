export default class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    gereNovoCpf() {
       const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
       const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
       const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);

       this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    // quando eu n~so ultilixzo nenhuma instancia no método ele pode se ornar estatico
    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumrica of cpfSemDigitos) {
            total += reverso * Number(stringNumrica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }
    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false
        this.gereNovoCpf();
        
        return this.novoCpf === this.cpfLimpo;
    }
}