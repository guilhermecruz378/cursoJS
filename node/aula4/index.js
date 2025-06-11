const fs = require('fs').promises;
const { readdir } = require('fs');
const path = require('path');

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir();
    walk(files);
}

function walk(files){
    for(let file of files) {
        console.log(file)
    }
};

readdir('C:\Users\guilh\OneDrive\Documentos\curso_full_stack\cursoJS')