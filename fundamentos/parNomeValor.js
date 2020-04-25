//par nome/valor
const nome = 'Opa' // contexto léxico 1

function exc(){
    const nome = 'Epaa' // contexto léxico 2
    return nome
}

//Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Carlos',
    idade: 10,
    endereco: {
        logradouro: 'Rua Maria clara',
        numero: 46
    }
}

console.log(nome)
console.log(exc())
console.log(cliente)
