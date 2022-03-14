const numeros = [1, 2, 3, 4, 5];

numeros.push(6);
numeros[0] = 100;

const numeros2 = numeros.concat(7, 8, 9);

console.log(numeros);
console.log(numeros.join(' - '));
console.log(numeros2);
console.log(numeros.includes(10));
console.log(numeros.indexOf(4));

