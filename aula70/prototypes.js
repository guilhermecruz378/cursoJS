// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // ___proto___: Object.prototype
};

const objB = {
    chaveB: 'B'
     // ___proto___: objA
     // o objB está passando pelo objA herdando oque está dentro do A
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveC)