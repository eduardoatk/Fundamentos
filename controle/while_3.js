const futuro = Date.now() + 1000 // 1000 = 1 segundo
let quantidade = 0

while(Date.now() < futuro) {
    quantidade++
}

console.log('Qtde ' + quantidade)
