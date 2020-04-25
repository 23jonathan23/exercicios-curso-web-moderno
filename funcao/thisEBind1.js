
const pessoa = {
    saudacao: 'Bom dia!!',
    falar() { // no ES2015 é possivel declrar um function dentro de um objeto sem utilizar a palavra 'Function'
        console.log(this.saudacao) // 'This' quando referenciada dentro do Objeto de fato está se referindo a objeto atual
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional  e OO

// a function 'BIND' serve para amarrar a função ou atributo a um determinado objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()