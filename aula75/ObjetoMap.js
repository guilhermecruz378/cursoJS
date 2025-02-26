const pessoas = [
    {id: 3, nome: 'Gui'},
    {id: 2, nome: 'Silva'},
    {id: 1, nome: 'Cruz'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa}
// }
//     console.log(novasPessoas)

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
    
};
console.log(novasPessoas)
//for(const pessoas of novasPessoas.keys()) {

// for(const pessoas of novasPessoas.values()) {
//     console.log(pessoas)
// }

novasPessoas.delete(2);
console.log(novasPessoas);

