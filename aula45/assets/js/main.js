const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar')
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar está tarefa');
    li.appendChild(botaoApagar);
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    console.log(tarefaJSON)
}

function limpaInput() { 
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaTarefa(texto) { // função principal
    //console.log(texto)
    //tarefa.innerHTML += `<li> ${texto} <br>`;
    const cria = criaLi()
    cria.innerText = texto
    tarefas.appendChild(cria)
    limpaInput()
    criaBotaoApagar(cria)
    salvarTarefas()
}



btnTarefa.addEventListener('click', function() {
    //const el = e.target;
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

inputTarefa.addEventListener('keypress', function(e) {
    //console.log(e)
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

document.addEventListener('click', function(e) {
    const el = e.target;
    //console.log(el)

    if(el.classList.contains('apagar')) {
        //console.log('apagar clicado')
        //console.log(el.parentElement)
        el.parentElement.remove()
    }
})