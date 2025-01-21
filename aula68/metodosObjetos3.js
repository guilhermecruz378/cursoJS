/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any) == copia o objeto
... (spread)

//--- já vimos
Object.Keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/


const produto = {nome: 'cadeira', preco: 48.00, material: 'Madeira'};
console.log(Object.values(produto));
//console.log(Object.entries(produto));

// for(let [chave, valor] of Object.entries(produto)) {
//     console.log(chave, valor)
// }
for(let chave of Object.entries(produto)) {
    console.log(chave[0], chave[1])
}