function sempreRetornaUm() {
    return 1000;
}

function textoOuNumero(retornaTexto) {
    return retornaTexto ? "Sou um texto!" : 123;
    // if(retornaTexto) {
    //     return "Sou um texto!";
    // } else {
    //     return 123;
    // }
}

let valor = sempreRetornaUm();
console.log(valor);

let texto = textoOuNumero(true);
console.log(texto)

console.log(textoOuNumero(false));
