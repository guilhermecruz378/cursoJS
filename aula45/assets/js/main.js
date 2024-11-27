const container = document.querySelector('.container');
//const addTaf = document.querySelector('.addTaf');


function logSubmit(event) {
    addTaf.textContent = event.timeStamp;
    event.preventDefault();
}

const itarefas = document.getElementById("itarefas");
const addTaf = document.getElementById("addTaf");
itarefas.addEventListener("submit", logSubmit())