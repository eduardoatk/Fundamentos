// Função Construtora (Classe) -> Objeto
// Convenção de função construtura: começa com letra maíuscula
function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const p1 = new Data();
const p2 = new Data(24, 12, 2022);
const p3 = new Data(31, 12, 2021);

console.log(p1.exibir());
console.log(p2.exibir());
console.log(p3.exibir());

console.log(p1);
console.log(p2);
console.log(p3);
