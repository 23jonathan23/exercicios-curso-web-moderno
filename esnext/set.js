// não aceita repetição / não indexada
//Pode ser encadeado chamadas
const times = new Set() 
//metodo add é usado para adicionar um valor em uma estrutura set.
times.add('Vasco')
times.add('Palmeiras').add('São Paulo').add('Flamengo')
times.add('Fluminence')
times.add('Vasco')
console.log(times)
//.size usado para identificar o tamanho da estrutura Set ou seja quantidades,
// de elementos
console.log(times.size)
//o metodo has() é usado para verificar se a um determinado valor 
//ou string o que seja dentro de uma estrutura Set
console.log(times.has('Vasco'))
//delete exclui um elemento de dentro de uma estrutura Set
times.delete('Vasco')
console.log(times.has('Vasco'))

//Outra maneira de criar uma estrutura Set
const nomes = ['Raquel', 'Carlos', 'Vitor', 'Carlos']
const nomesSet = new Set(nomes)
console.log(nomesSet)