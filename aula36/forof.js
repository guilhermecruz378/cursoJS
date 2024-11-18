// especificos para objetos iteraveis
// quando usamos o of vem o valor diferente dos outros que obtemos os indices

const nomes = ['Guilherme', 'Evelin', 'Nobres', 'Cruzes']

for (i = 0; i < nomes.length; i++) { // Geralmente com iteraveis (array, strings)
    console.log(nomes[i]);
}
console.log('-------------');

for (let indices in nomes) { // retorna o indices ou chave (strings, array, objetos)
    console.log(nomes[indices]);
}
console.log('-------------');

for (let chaves of nomes) { // em objeto o for of não vai funcionar porque não tem indices, não são iteraveis, retorna o valor - usar com (strings,array, iteraveis)
    console.log(chaves)
}

console.log('-------------')

nomes.forEach(function (valor, indices) {
    console.log(valor, indices)
})