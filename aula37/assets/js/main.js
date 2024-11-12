const paragrafos = document.querySelector('.paragrafo');// sempre vai me retornar o primeiro elemento que for encontrado, para selecionar todos usamos all
const ps = document.querySelectorAll('p'); // vai selecionar em todos as divs:p encontrada dentro da div= paragrafos

const estilosBody = getComputedStyle(document.body);//capturar o fundo do body: isso é do browser não funciona fora da página(vs code) -: poderia ser qualquer elemento! isso pode me retonar tudo oque foi computado pelo Browser, usando o exemplo abaixo logo depois do (.) vai me sugerir tudo!
const backgroudColorBody = estilosBody.backgroundColor;
console.log(backgroudColorBody)

for (let itens of ps) {
    console.log(itens);
    itens.style.background = backgroudColorBody
}

// MUDAR A COR DO TEXTO PARA BRANCO 