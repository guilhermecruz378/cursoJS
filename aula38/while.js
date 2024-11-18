// let i = 0;
// const nome ='Guilherme'
// while (i < nome.length) {
//  console.log(nome[i]);
//  i++;
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(1, 50)

let contador = 0
while (rand !== 10) { // a função entrou no while pq a condição e verdadeira, no caso o primeiro número não é 10
    
    rand = random(min, max)
    console.log(rand)
    contador ++
    if (contador === 10) {
        break
    }
}