Array.prototype.forEach2 = function (callback) {

    for(let i = 0; i < this.length; i++) {

        callback(this[i], i, this)
    }
}

const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

// forEach é usado para percorrer o array, os 3 parametros que são recebidos
// ao percorrer o array é: o dado, indice, e o proprio array
// sempre nessa ordem
//aprovados.forEach2(function(nome, indice) {
   // console.log(`${indice + 1}) ${nome}`)
//})

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
