const nums = [1, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if(x == 5) {
        break // para a execução do laço e sai do laço.
    }
    console.log(`${x} = ${nums[x]}`)
}

for(let y in nums){
    if(y == 5){
        continue // para a execução do laço atual e vai para o proximo
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: // podemos nomear estruturas, porem não é recomendado(Não usar)
for(let a in nums){
    for(let b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}