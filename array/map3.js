Array.prototype.map2 = function(callback) {
  const newArray = []
  for(let i =0; i < this.length; i++){
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]



//Minha forma de fazer
let resultado = carrinho.map2(function(e) {
  const convert = JSON.parse(e)
  return convert.preco
})

console.log(resultado)

//Forma do professor fazer
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado1 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado1)

//O método .map é um metodo de um array, ele é usado para percorrer os elementos
// de um array e por fim criar um novo array, seu parametro é uma callback
//ou seja um function, essa função por padrão recebe o elemento, index e 
// o proprio array atual que o método .map está percorrendo.