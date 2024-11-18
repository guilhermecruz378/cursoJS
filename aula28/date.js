// A funçãao date é uma função construtora => uma função construtora sempre começa com a letra maiuscula
/* ---- marco zero 
const treHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + treHoras + umDia); // para udar essa função devemos usar a palavra 'new' antes da função. O jS vai criar um novo objeto de data sendo dia, hora, milesimo, etc...
console.log(data.toString());
*/ 

//const data = new Date();// a, mes, d, h, min, s, ms

//const data = new Date('2020-03-24 20:20:59');

const data = new Date();
console.log('Dia', data.getDate());
console.log('mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da semana', data.getDay()); // 0 => Domingo / 6 => Sábado
console.log(data.toString());

console.log(Date.now()); // Me retorna os milesimos de segundos do dia de hoje
const dataAtual = new Date(1730138356494);// joguei os milesimos de segundos que me retornou aqui na variavel e vai me retornar a data atual
console.log(dataAtual.toString());