const numero = Number(prompt('Digite um número'));
const numTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
/*
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const decimais = document.getElementById('decimais');

numTitulo.innerHTML = numero
texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;

inteiro.innerHTML = `<p>${numero} é inteiro ${Number.isInteger(numero)}</p>`;

nan.innerHTML = `${Number.isNaN(numero)}`;

baixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;

cima.innerHTML = `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;

decimais.innerHTML = `Com duas casas decimais ${numero.toFixed(2)}`;
*/
numTitulo.innerHTML = `${numero}`;

texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;


texto.innerHTML += `<p>${numero} é inteiro ${Number.isInteger(numero)}</p>`;

texto.innerHTML += `${numero} é NaN: ${Number.isNaN(numero)}`;

texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;

texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;

texto.innerHTML += `Com duas casas decimais ${numero.toFixed(2)}`;