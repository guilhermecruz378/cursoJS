/**
&& => false && true == false 'Vai retornar o valor considerado falso'
|| => false || true == true 'vai retornar o valor verdadeiro'

FALSY : 
*false
0
''  ""  `` => strings vazias
null / undefined
NaN
Qualquer coisa diferente desses valores FALSY é considerado true
*/ 
// console.log('guilherme' && '0' && 'Cruz'); // Se não for encontrado nenhum valor false ele retornara o ultimo valor
// console.log('guilherme' && 0 && 'Cruz');
/*
function falaAlgumaCoisa() {
    return 'Tudo true';
}

const naoExecuta = 'vai executar';
console.log(naoExecuta && falaAlgumaCoisa());
*/

console.log(0 || false || null || 'string' || true); // vai retornar 'string' pois o ||(OR) precisa de um valor verdadeiro para funcionar

const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e)