console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

//Somente é possivel atribuir chaves e valores através do this e exports
this.a = 1
exports.b = 2
module.exports.c = 3

//THIS e EXPORTS somente apontam para o mesmo objeto de module.exports
//Porem ao tentar atribuir um novo objeto ao exports ou this, não fará
//efeito nenhum em module.exports
exports = null
console.log(module.exports)

exports = {
  nome: 'Teste'
}

console.log(module.exports)

//Somente através do module.exports conseguimos atribuir um novo objeto.
module.exports = {publico: true}
console.log(module.exports)
