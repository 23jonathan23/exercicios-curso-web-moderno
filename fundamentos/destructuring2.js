// utilizando o operador Destructuring no Array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 6, 7, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 9, 9],[9, 7, 8]]
console.log(nota)