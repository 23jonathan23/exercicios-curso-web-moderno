const valores = [1, 2, 3, 4]
console.log(valores[0], valores[3])
console.log(valores)
console.log(valores.length) // quantidade de itens

valores.push({id: 3}, false, null, 'teste') // outra forma de atribuir itens ao array, no javascript é dinamico e podemos inserir valores de tipos diferentes
console.log(valores)

console.log(valores.pop()) // remove e exibe o ultimo valor( ou seja o valor do ultimo indice)
delete valores[0] // deleta um valor da posiçao especificada
console.log(valores)

console.log(typeof valores)