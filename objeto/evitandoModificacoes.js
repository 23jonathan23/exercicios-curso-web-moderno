// Object.preventExtensions evita que seja add outras atributos ao obj
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: '1.99', tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal evita que seja add outros atributos e deletados os já existentes
const pessoa = {nome: 'Juliana', idade: 19}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes