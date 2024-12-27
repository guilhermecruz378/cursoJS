// Fatiamento de array
// metodo slice()

// const nomes = [ 'Maya', 'Guilherme', 'Evelin', 'Davi', 'Cesar' ]
// const novo = nomes.slice(0, 4);// primeiro param(inicio), segundo(fim)
// const novo2 = nomes.slice(0, -1);// primeiro param(inicio), segundo(fim)
// console.log(novo)
// console.log(novo2)

// convertendo strings em array(fatiando)
const nome = 'Guilherme da Silva Cruz';
const novoNome = nome.split(' '); // utilizando o espaço para fatiar
const outroNome = novoNome.join(' ') //utilizando o espaço para junção
console.log(novoNome);
console.log(outroNome);
