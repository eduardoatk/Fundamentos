// #1: Função COM parâmetro e COM retorno
function somar(a, b) {
    return a + b;
}
let resultado = somar(30, 56);
console.log(resultado);

// #2: Função COM parâmetro e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}
exibirMultiplicacao( 5, 3);

// #3: Função SEM parâmetro e COM retorno
function retornarDataAtual() {
    return new Date();
}
console.log(retornarDataAtual());

// #4: Função SEM parâmetro e SEM retorno
function exibirHoraAtual() {
    console.log(new Date().getHours());
}
exibirHoraAtual();
