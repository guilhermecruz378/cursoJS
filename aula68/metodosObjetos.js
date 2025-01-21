/*
Object.values
Object.entries
Object.assign(des, any) == copia o objeto
Object.escript(o, 'prop')
... (spread)

//--- já vimos
Object.Keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// copiando um objeto 
// 1ª maneira

/*
const produto = {nome: 'cadeira', preco: 48.00};
const copia = {...produto,
    material: 'madeira'
};

copia.preco = 23.00
console.log(produto)
console.log(copia)
*/

// 2ª maneira
const produto = {nome: 'cadeira', preco: 48.00};
const copia = Object.assign({}, produto, {carteria: 19.00})

copia.preco = 23.00
console.log(produto)
console.log(copia)