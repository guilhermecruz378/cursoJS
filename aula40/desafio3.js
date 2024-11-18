function recebeNum(x) {
    if ( typeof x !== "number" ) return x;
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 5 === 0) return 'Buzz';
    if (x % 3 === 0) return 'Fizz';
}
for (let i = 0; i < 100; i++) {
    console.log(i, recebeNum(i));
}

