const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // deleta o ultimo iten do array
console.log(pilotos)

pilotos.push('Verstappen') // add um iten ao array
console.log(pilotos)

pilotos.shift() //deleta o primeiro iten do array
console.log(pilotos)

pilotos.unshift('Hamilton') // add o iten na posição 0
console.log(pilotos)

// splice pode adicionar e remover elementos
/* função splice do array, é utilizada para add itens e removelos
podendo ser feito as duas operações ao mesmo tempo,parametros
1- posição do item (idex), 2 - quantidade de itens para excluir
3- itens que serão adicionados podendo add mais de 1.
*/

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array apartir do idex passado
console.log(algunsPilotos1)

// 1 parametro - idex de onde iniciar, 2- até qual idex deverar ir, deixe 
// vazio para pegar todos (Obs a posição indicada como ultima não será copiada)
const algunsPilotos2 = pilotos.slice(1, 4) 
console.log(algunsPilotos2)