//operador ternario "?" funciona parecido com a função SE, referncia Excel, estrutura "teste logico ? verdadeiro : falso"
// está sendo usado em conjuto com uma função Arow
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.0))