// PROBLEMA: repetição de código

const d1 = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d2 = {
    dia: 15,
    mes: 8,
    ano: 2015,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

console.log(d1.exibir());
console.log(d2.exibir());



