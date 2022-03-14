const produto = {
    nome: 'iPad',
    preco: 5600,
    desconto: 0.15,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto);
    } // this refere-se a si mesmo, ou seja, relativo ao próprio objeto
};

console.log(produto.nome);
console.log(produto.precoComDesconto());
