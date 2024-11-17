function recebeNum(x) {
    if (x >= 0 && x <= 100) {

        if (x % 3 === 0 && x % 5 === 0) {
            return 'FizzBuzz';
        } else if (x % 5 === 0) {
            return 'Buzz';
        } else if (x % 3 === 0) {
            return 'Fizz';
        } else {
            return x;
        }
    } else {
        return 'Não é numero'
    }
}

console.log(recebeNum(200));
