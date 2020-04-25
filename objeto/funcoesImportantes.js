const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 15
}

console.log(Object.keys(pessoa)) // lista as chaves/atributos presentes no meu objeto
console.log(Object.values(pessoa)) // lista os valores dos meus atributos
console.log(Object.entries(pessoa)) // lista a coleção de chave/valor em forma de Array

// [chave, valor] - operador destructing
//ForEach - estrutura de repetição, usada para percorrer o Objeto
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}, ${valor}`)
})

// permite que seja criado um objeto mais detalhado com definições de acesso
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pertite ou não que o atributo seja exibido em uma chada de funções como entries, keys, values
    writable: false, //permite ou não que o atributo seja alterado 
    value: '01/09/2019' // define o valor do atributo
})

pessoa.dataNascimento = '10/08/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMA Scripct 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
// A função assign concatena outros obj a um obj de destino.
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj) // congela o obj
obj.c = 1234
console.log(obj)