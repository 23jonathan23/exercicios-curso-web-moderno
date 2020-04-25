let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // negação !, quando é feita 2 vezes seguida força reconhecer como uma variavel do tipo boleano

console.log('os verdadeiros..')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar..')

console.log('' || null || 0 || ' ')

let nome = 'Carlos'
console.log(nome || 'Desconhecido') // Uma espece de teste logico com strings, se estiver vazia retorna o segundo valor (ou seja um valor padrão)



