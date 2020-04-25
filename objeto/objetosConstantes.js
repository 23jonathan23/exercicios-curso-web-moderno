// pessoa -> 123 -> {...}
const pessoa = {nome: 'Jonathan'}
pessoa.nome = 'Maria'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Carlos'}

//congela o objeto, não permitindo mais edição, criação e exclusão de atributos
Object.freeze(pessoa)

pessoa.nome = 'Carlos'
pessoa.end = 'Rua Eu'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)