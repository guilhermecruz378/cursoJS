function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //Getter...
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter...
        set nomeCompleto(vetor) {
            valor = vetor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            //console.log(valor);
        },

        //fala: function(assunto) {
        fala(assunto = 'nada!') {
            return `${this.nome} está falando sobre ${assunto}`;
        },

        altura: a ,
        peso: p,
        //imc: p / (a **2)

        // Getter... 
        get imc() { // get == ira fazera função fingir ser um objeto
            const indice = this.peso / (this.altura**2);
            return indice.toFixed(2);
        }
     };
}

// const eu = criaPessoa('guilherme', 'Cruz', 1.62, 70);
// //const ev = criaPessoa('Evelin', 'Nobre' , 1.62, 70);

// console.log(ev.fala('Falando sobre JS'));
// //console.log(ev.imc.toFixed(2))
// console.log(`Seu imc é:`,ev.imc());

// const eu = criaPessoa('guilherme', 'Cruz', 1.62, 70);
// console.log(eu.nome);
// console.log(eu.sobrenome);
// eu.imc = 29; // o valor não mudará
// console.log(eu.imc); // posso obter uma função como se fosse um objeto usando a palavra get == ira fazera função fingir ser um objeto
// console.log(eu.nomeCompleto)


const p1 = criaPessoa('Guilherme', 'Cruz', 1.70, 65);
const p2 = criaPessoa('Evelin', 'Cruz', 1.70, 65);
const p3 = criaPessoa('Isabella', 'Cruz', 1.70, 65);
const p4 = criaPessoa('Andrea', 'Cruz', 1.70, 65);
const p5 = criaPessoa('Silvio', 'Cruz', 1.70, 65);
// p1.nomeCompleto = 'Evelin Nobre da Silva';
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());

console.log(p1.nome)
console.log(p2.fala)
console.log(p3.imc)
console.log(p4.nomeCompleto)
console.log(p5.peso)