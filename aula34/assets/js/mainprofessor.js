const array = [
    {tag: 'p', texto: 'Criando "p"'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]

const container = document.querySelector('.container'); // selecionando o documento 
const div = document.createElement('div'); // criando uma div

for (let i = 0; i < array.length; i++) { // criou o laço 
    let {tag, texto} = array[i] // desestruturando o array 
    let criaTag = document.createElement(tag); // a cada laço vai criando cada tag(objeto) dento da chave desestruturada
    //criaTag.innerHTML += texto; // dentro de cada tag vai ser adicionado o objeto dentro da chave texto
    //criaTag.innerText += texto; // Faz a mesma coisa que o innerHTML so que para texto

    let criaTexto = document.createTextNode(texto);
    criaTag.appendChild(criaTexto)
    div.appendChild(criaTag); // colocando as tags criadas dentro da div 
}

container.appendChild(div); // por fim adicionando a div dentro do meu html na classe conatiner