// MUITO UTILIZADO EM VÁRIAS LINGUAGENS!!!

function executar(funcao) {
    if(typeof funcao === 'function'){
        console.log(funcao()); // <--- central da aula
    }
}

function bomDia() {
    return 'Bom dia!';
}

executar(3); // false na função executar
executar(bomDia); // true na função executar  <--- central da aula

const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);
