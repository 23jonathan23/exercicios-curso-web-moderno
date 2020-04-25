const notas = [1, 2, 3, 4, 5]
// Como interpretar (Para cada posição/index em notas...)
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Carlos',
    idade: 19,
    peso: 80
}
// Como interpretar (Para cada chave/atributo em pessoa...)
for(let atributo in pessoa){
    console.log(atributo, pessoa[atributo])
}
