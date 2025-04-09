import ValidaCpf from './ValidaCpf'; 
export default class GeraCpf {
  
        rand(min = 100000000, max=999999999){
            return String(math.floor(math.random() * (max - min) + min))
        }


    geraNovoCpf() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;
        return novoCpf;
    }
}