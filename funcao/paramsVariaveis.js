//podemos passar paramentros variaveis para a função desde que deixe a função com parametro não expecificado
//acessamos os parametros passados pela palavra reservada 'arguments'(é um Array)
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

// JS linguagem fracamente tipada te permite passar strings e numbers ao mesmo tempo, isso se resulta em uma concatenação
console.log(soma(1, 2, 'Teste'))
console.log(soma('a', 'b', 'c'))