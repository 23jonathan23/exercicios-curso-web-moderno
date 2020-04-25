const nums = [1, 2, 3, 4, 5]

//For com propósito
let resultado = nums.map(function(e) {
  return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

//O método .map é um metodo de um array, ele é usado para percorrer os elementos
// de um array e por fim criar um novo array, seu parametro é uma callback
//ou seja um function, essa função por padrão recebe o elemento, index e 
// o proprio array atual que o método .map está percorrendo.