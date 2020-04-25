const produto = [
  {nome: 'Notebook', preco: 2449, fragil: true},
  {nome: 'Ipad Pro', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de Plastico', preco: 18.40, fragil: false}
]

//O método  filter() vai percorrer cada elemento de um array 
//e colocar, em um novo array, os elementos que 
//retornam TRUE, de acordo com a função especificada no nosso filtro.
console.log(produto.filter(function(p) {
  return true
}))

const produtoCaro = p => p.preco >= 500
const produtoFragil = p => p.fragil

console.log(produto.filter(produtoCaro).filter(produtoFragil))