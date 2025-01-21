/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor
Object.assign(des, any) == copia o objeto
Object.escript(o, 'prop')
... (spread)

//--- já vimos
Object.Keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/


const produto = {nome: 'cadeira', preco: 48.00};
Object.defineProperty(produto, 'nome', {
    configurable: false,
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
delete produto.nome;
console.log(produto)