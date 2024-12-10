// função callback ==> uma função que sera executada dentro de outra função, no momento que você achar pertinente.... garantir que uma função seja executada depois de outra


function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return num;
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1');
    if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout(function() {
        console.log('F2');
        if(callback) callback()
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback()
    }, rand())
}

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Ultima a ser executada')
//         })
//     })
// })

f1(f1Callback);

function f1Callback() {
    console.log('1º a ser executado')
    f2(f2Callback); // chamando a função depois de executar a primeira
}

function f2Callback() {
    console.log('2º a ser executado')
    f3(f3Callback); // chamando a função depois de executar a anterior
}

function f3Callback() {
    console.log('3º e Ultima a ser executado')
}