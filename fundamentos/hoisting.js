// Hoisting é um conceito de içamento ou seja jogar para cima, só se aplica a variaveis declaradas com VAR
console.log('a =', a)
var a = 2
console.log('a =', a)

// com LEt não se aplica, dessa forma ocacionará um erro
console.log('b =', b)
let b = 2
