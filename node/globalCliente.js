//No caso do objeto global ele não presisa ser atribuido a uma variavel
//somente importado para uso
require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)