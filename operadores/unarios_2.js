let a = 1
let b = 2

console.log(a === b)
console.log(++a === b++)
// ++a tem precedência em relação a a++)
// nesse caso ele vai primeiro acrescentar a "a"
// depois vai comparar e ver que é verdadeiro
// e só depois ele vai acrescentar 1 a "b"
// típico código confuso

