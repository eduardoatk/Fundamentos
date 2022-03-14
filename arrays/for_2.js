const notas = [7, 8, 3, 5, 10, 9, 8, 8];
let valores = ''

// foreach
for(let nota of notas) {
    console.log(nota);
}

for(let nota of notas) {  // of: valores
    valores += nota + ' ';
}

console.log(valores);

let indices = '';

for(let indice in notas) {  // in: índices
    indices += indice + ' ';
}

console.log(indices);
