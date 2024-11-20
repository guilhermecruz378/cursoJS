// let segundos = Date.now()
// console.log(segundos - segundos)
let segundos = new Date()
let contaSegundos = segundos.getSeconds()-segundos.getSeconds()

while (contaSegundos < 59) {
    setInterval(function() {
        console.log(contaSegundos+=1)
}, 1000)
}