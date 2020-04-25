const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//() isso é usado para executar a function presente no modulo 
//e retornar um objeto
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
