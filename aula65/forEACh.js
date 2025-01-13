const nums = [10,20,30,40,50,60,70,80,90]; 

nums.forEach(function(valor, indicie,array) {
    console.log(`No indicie ${indicie} temos o valor ${valor}`);
});
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-')
for(let i=0; i < nums.length; i++) {
    console.log(i, nums[i])
};
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-')
for(let a in nums) {
    console.log(a, nums[a])
};
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-')
for(let x of nums) {
    console.log(x)
}