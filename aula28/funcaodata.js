function zeroAesquerda(num) {
    return num >= 10 ? num :`0${num}` // se o num for maior ou == 10 nada acontece se não adiciona um zero a esquerda do num
}
function formataData(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());
    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);