//Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun1() {}

//Armazenar uma função dentro de uma varivel ou constante
const fun2 = function () {}

//Armazenar uma função dentro de Array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar uma função em um atributo/chave de um objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função com parametro
function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(1)
const somaFinal = soma(2, 3)
somaFinal(1)
