const container = document.querySelector('.container');


// const array = [
//     {tag: 'p', texto: 'frase 1'},
//     {tag: 'div', texto: 'frase 2'},
//     {tag: 'footer', texto: 'frase 3'},
//     {tag: 'section', texto: 'frase 4'}
// ]

// for (i=0; i < array.length; i+=1) {
//     //container.innerHTML += array[0][i]
//     let position = array.texto[1]
//     console.log(position);
// }

const array = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]

for (i=0; i < array.length; i+=1) {
    let pos = array[i]
    let tagVaiAparecer = pos.tag
    let frases = pos.texto
    //console.log(tagVaiAparecer, frases)

    container.innerHTML += 
}