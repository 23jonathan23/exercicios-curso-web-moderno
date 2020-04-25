// Global é o modulo reservado onde todos variaveis, funtion declaradas no escopo global vão para lá
// salvo algumas exeções, com variaveis declaradas com let, const e funcões atribuidas a variaveis
// this em contexto global é igual a Global 
let a = 3
global.b = 123

this.c = 326
this.d = false
this.e = 'Cralos'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando variavel maluca: sem var ou let
abc = 123 // não faça isso em casa!!!
console.log(global.abc)

// module.exports = {e: 123, d: 'String'}

