// valores por referência
// ambos apontam para o mesmo valor na memoria

const nomes = ['Guilherme', 'Evelin', 'Davi'];
//const novo = nomes; // oque eu fizer aqui reflete no original
const novo = [...nomes] //virou uma cópia, agr nao apontam para o mesmo lugar na memoria

const removeFinal = novo.pop()
const removeComeco = novo.shift() // faz deslocar o array




console.log(nomes)
console.log(novo)
console.log(removeFinal)
console.log(removeComeco)


nomes.push('Cesar') // adiciona no final
console.log(nomes)

nomes.unshift('Maya') // adiciona no começo
console.log(nomes)
