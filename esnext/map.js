// Map é uma estrutura parecida com objero porem onde podemos
//atribur function com chaves, objetos, numeros, e strings.
const tecnologias = new Map()
//o metodo set() detro de um map é responsavel por atribuir chaves e valores
tecnologias.set('react', { framework: false})
tecnologias.set('angular', {framework: true})

//assim não funciona 
console.log(tecnologias.reatc)
//Essa é a forma correta de se acessar os valores dos conjuntos de chaves/valores
console.log(tecnologias.get('react'.framework))

const chavesVariadas = new Map([
  [function () {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Numeros']
])

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl)
})

//o metodo has() é usado para verificar se a uma determinada chave/valor 
//ou string o que seja dentro de uma estrutura Map
console.log(chavesVariadas.has(123))
//o metodo delete() é usado para deletar uma determinada chave/valor de dentro de
//uma estrutura map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
//.size usado para identificar o tamanho da estrutura Map ou seja quantidades,
// de pares chaves/valor
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(454, 'b')
console.log(chavesVariadas)