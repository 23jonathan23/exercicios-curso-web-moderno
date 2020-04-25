// estrutura de controle, laço de repetição FOR com let, como dito anteriormente let seque o escopo de bloco, 
//então nesse caso a variavel i não sera visivel fora do bloco FOR
for(let i = 1; i < 10; i++){

    console.log(i)

}

console.log(i)// gera um erro pois a varivel não foi definida
