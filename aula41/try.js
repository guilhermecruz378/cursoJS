// try => significa tente 
// usado para tratamentos de erros
// bloco de excessão 

try { // bloco de excessão, tratamentos de erro se acontecer algum erro no bloco ele não exibe no console e joga para o proximo bloco
    console.log(naoExisto)
} catch (e){ // o bloco que vai cair se um erro for encontratado
    console.log('nãoExisto não existe')
}