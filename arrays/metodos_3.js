const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach(function() {
    console.log('Dentro do forEach!');
});

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}
// pode mostrar só o elemento, o índice ou o array, nessa ordem
numeros.forEach(function(elem, ind, arr) {
    console.log(`Elemento: ${elem}  Índice: ${ind}  Array: ${arr}`);
})

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// for(let n of numeros) {
//     console.log(n);
// }