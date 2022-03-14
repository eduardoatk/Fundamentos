// MUITO UTILIZADO EM VÁRIAS LINGUAGENS!!!

function executar(fn, n1, n2) {
    if(typeof fn === 'function'){
        console.log(fn(n1, n2)); // <--- central da aula
    }
}

function somar(a, b) {
    return a + b;
}

executar(somar, 10, 20);
