// Função anonimas são funcções sem nome, das quais são declaradas dentro de uma estrutura ou atribuidos a const,
// variaveis, obj, Array.
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function(a, b, operador = soma){
    console.log(operador(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x,y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()