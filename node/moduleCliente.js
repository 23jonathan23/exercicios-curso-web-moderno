//Usamos o require para importar(Acessar) os codigo exportados de outro modulo
//isso vale para o node
const moduloA = require('./moduloA')
const moduloB = require('./moduleB')

console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA.ola)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite)
console.log(moduloB)