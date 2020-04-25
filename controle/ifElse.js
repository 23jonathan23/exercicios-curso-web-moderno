const imprimirResultado = function(nota) {
    if(nota > 7){
        console.log('Aprovado..')
    } else{
        console.log('Reprovado...')
    }
}

imprimirResultado(7)
imprimirResultado(8)
imprimirResultado('Epa!!') // cuidado, por ser uma linguagem fracamente tipada o teste logico será realizado com o IF
// quando for programar lembrar de validar o que foi recebido antes do teste.