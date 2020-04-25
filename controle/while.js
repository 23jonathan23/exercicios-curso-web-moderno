function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
//Propria para executar laços que tem uma quantidade indeterminada de repetições
// WHILE é usado para quando não sabemos quantas vezes temos que executar uma determinada setença de codigo.
//Trabalha com expressão relacional (Verdadeiro ou falso), enquando a expressão for verdadeiro ele continuará a executar
while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a proxima..')