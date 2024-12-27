const a1 = [1,2,3];
const a2 = [4,5,6];

const a3 = [];
a3.push(...a1);
a3.push(...a2);
console.log(a3);