const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

// forEach é usado para percorrer o array, os 3 parametros que são recebidos
// ao percorrer o array é: o dado, indice, e o proprio array
// sempre nessa ordem
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)