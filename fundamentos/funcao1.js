// função sem retorno
function imprimirSoma(a, b) {

    console.log(a + b)
}

imprimirSoma(2, 3) // chamando  a função e passando os parametros
imprimirSoma(2) // passando somente um parametro não vai dar erro, porem vai retornar NaN = Not a Number
imprimirSoma(2, 4, 5, 6) // passando parametros a mais, da dará erro simplismente os numeros que estão a mais serão ignorados
imprimirSoma() // não passando nada o resultado será NaN

//Função com retorno, é possivel definir um valor padrão para os parametros
function soma(a, b = 0) {

    return a + b

}

console.log(soma(2, 4))
console.log(soma(2))
console.log(soma())
