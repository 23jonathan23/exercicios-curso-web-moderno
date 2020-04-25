function teste1(num){
    if(num > 7) // if pode ser usado sem '{}'(blocos), caso tenha somente uma sentença de código
        console.log(num)
    console.log('Final')
}

teste1(6.1)
teste1(8)

function teste2(num){
    // cuidado não usar ';' com estruturas de controle.
    if(num > 7) ; {
        console.log(num)
    } 
        
}

teste2(7)
teste2(8)