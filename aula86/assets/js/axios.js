
/*fetch('pessoas.json')
.then(dados => dados.json())
.then(json => carregaElementosNaPagina(json));*/

axios('pessoas.json')
    .then(dados => carregaElementosNaPagina(dados.data))

function carregaElementosNaPagina(json) {
    const table = document.createElement('table')

    for(let pessoas of json) {
        const tr = document.createElement('tr')
        
        let td = document.createElement('td')
        td.innerHTML = pessoas.nome
        tr.appendChild(td)
        //console.log(pessoas.nome)

        td = document.createElement('td')
        td.innerHTML = pessoas.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = `$${pessoas.salario.toFixed(2)}`
        tr.appendChild(td)

        table.appendChild(tr)
    }
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}