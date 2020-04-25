// Armazenamento de função em varivel
const imprimirSoma = function (a, b) {

    console.log(a + b)
}

imprimirSoma(2, 3) // chamando a função e passando os parametros

//Armazenando uma função Arrow em uma varivel
const soma = (a, b) => {

    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a, b) => a + b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)

imprimir2('Legal!!!')