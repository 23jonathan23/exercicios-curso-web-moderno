console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Maria')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // é utilizado para add itens novos ao array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // função .sort do array, organiza os dados do array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'João']
/* função splice do array, é utilizada para add itens e removelos
podendo ser feito as duas operações ao mesmo tempo,parametros
1- posição do item (idex), 2 - quantidade de itens para excluir
3- itens que serão adicionados podendo add mais de 1.
*/
aprovados.splice(1, 1) 
console.log(aprovados)