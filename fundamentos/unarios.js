// operadores unitarios levam ordem de precedencia em consideração, 
// quando o operador vem antes Ex: --num1 === num++, nesse caso será executado a subtação
// e só depois a comparação e por ultimo a adição.
let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)
