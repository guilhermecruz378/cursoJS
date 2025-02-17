// 705.484.450-52 -=- 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
 
11 - (total % 11 = ?) => primerio digito

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2

11 - (total % 11 = ? ) => segundo digito
*/

/*
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}
ValidaCPF.prototype.valida = function () {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    return true;
};

const cpf = new ValidaCPF('705.484.450-52')
//console.log(cpf.cpfLimpo)
console.log(cpf.valida());