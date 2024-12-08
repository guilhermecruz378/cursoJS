// o escopo léxico em JavaScript significa que o lugar onde você escreve a variável ou função no código define onde ela pode ser acessada.

// Quando você declara algo, o escopo léxico é definido ali e não muda.

// Se você tentar acessar uma variável ou função, o JavaScript vai procurar dentro do escopo atual e, se não encontrar, vai subindo para o escopo de fora (até o escopo global).


const nome = 'Gui';

function falaNome() {
    console.log(nome);
}

function usarFalaNomr() {
    const nome = 'Guilherme';
    falaNome();

}
usarFalaNomr();