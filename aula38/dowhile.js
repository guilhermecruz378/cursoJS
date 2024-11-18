function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) { // o rando não entra no while pq rand é igual a 10, false
    rand = random(min, max)
    console.log(rand)
}
console.log('-=-=-=-=-==-==')
do { // aqui ele vai executar a função pois antes de entrar no while ele randommizou o número
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);