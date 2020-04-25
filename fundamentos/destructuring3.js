// Usando Operador Destructuring diretamente como parametro de uma função, com Objeto
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 30, min: 50}
console.log(rand(obj)) // pode ser passado dessa forma 1, ou seja atraves de um obj criado anteriormente
console.log(rand({max: 100, min: 50})) // pode ser passado dessa forma 2, diretamente criando o obj diretamente no parametro
console.log(rand({}))
console.log(rand()) // se não for passado o parametro em forma de obj, ocasionará em erro