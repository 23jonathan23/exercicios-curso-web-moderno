// novo recurso do ES2015

const pessoa ={
    nome: 'Carlos',
    idade: 10,
    endereco: {
        logradouro: 'Rua sebastião',
        numeron: 48,
        cep: 1000
    }
}

// Destructuring, se cosiste em retirar um valores ou um valor expecifico de uma estrutura
const { nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, semNada = true} = pessoa
console.log(sobrenome, semNada)

const {endereco: {logradouro, numeron, cep}} = pessoa
console.log(logradouro, numeron, cep)

