const imprimirResultado = function(nota){
    // A estrutura de controle SWITCH só permite valores inteiros.
    switch(Math.floor(nota)){
        // caso um CASE estiver vazio o de baixo será executado.
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // não esquecer essa palavra reservada, pois sem ela o será executado todos os casos abaixo.
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // Responsável por fornecer uma resposta padrão caso nenhuma das alternativas sejam executadas.
            console.log('Nota Inválida')
            break
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(3.44)
imprimirResultado(-1)
imprimirResultado(11)