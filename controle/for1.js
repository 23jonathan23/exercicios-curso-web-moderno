let contador = 0
// Estrutura de controle While pode ser usado tambem para repetições determinadas
while(contador <= 10){
    console.log(`Contador ${contador}`)
    contador++
}

// Usado para quando sabemos quantas vezes precisamos repetir as sentença de código
//Para usar o for devemos começar declarando uma variavel(contador),Expressão e por ultimo o incremeto.
for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [7, 2, 3, 5, 8]
//Usado tambem para percorer array, a propriedade LENGTH no array significa o tamanho do array
for(let i = 0; i < notas.length; i++){
    console.log(`Notas = ${notas[i]}`)
}
