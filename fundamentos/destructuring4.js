// Usando Operador Destructuring diretamente como parametro de uma função, com Array
function rand([min = 0, max = 1000 ]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 2000]))
console.log(rand([]))
console.log(rand()) // isso gera um erro, pois não está sendo pasado o parametro