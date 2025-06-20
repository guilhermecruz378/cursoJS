const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button> Enviar </butoon>
        </form>
        `);
});

app.post('/', (req, res) => {
    res.send('recebi o formulário')
});

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato!')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
});