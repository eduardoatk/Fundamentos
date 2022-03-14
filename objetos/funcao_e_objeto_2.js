// simplificando o código anterior com alterações do JS 2015
function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    };
}

const d1 = criarData(9, 10, 2010);
const d2 = criarData(22, 11, 2023);

console.log(d1.exibir());
console.log(d2.exibir());

