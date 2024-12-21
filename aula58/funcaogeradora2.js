function* geradora3() {
    yield 'Gui';
    yield 'lher';
    yield 'me';
};

function* geradora4() {
    yield* geradora3();
    yield 1;
    yield 2;
    yield 3;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}