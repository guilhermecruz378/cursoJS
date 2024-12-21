// A função recursiva é uma função que chama ela mesma
// similar a estrutura de repetição

// function recursiva(max) {
//     console.log(max); 
//     if(max >= 10) return;
//     max++
//     recursiva(max);  
// }


function recursiva(max) {
    console.log(max); 
    if(max >= 10) return;

    const timer = setInterval( () => {
        max++
        recursiva(max);
    }, 1000);

    setTimeout( () => {
        clearTimeout(timer)
    },1000);

    
}

recursiva(-10)