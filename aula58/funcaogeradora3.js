function* geradora5() {
    yield () => {
        console.log('Vim do yield1...');
    };

    yield function() {
        console.log('Vim do yield2...');
    };
}

const g5 = geradora5();
const funcao1 = g5.next().value;
const funcao2 = g5.next().value;
//const funcao3 = g5.next().value;

funcao1();
funcao2();
//funcao3(); essa função não pode ser executada porque nao existe outro yield