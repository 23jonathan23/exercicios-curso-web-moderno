const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1534.34,
  desconto: 100.03
}

//Assincrona...
//Usado para salvar um arquivo no disco
//condição 1 - caminho onde será salvo o arquivo e o nome
//condição 2 - o conteudo do arquivo a ser salvo, no caso vamos salvar em json
//então converteremos um objeto em JSON
//condição 3 - Uma callback que captura o erro caso ouver
// aqui podemos tratar o erro caso necessario
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto),
(err) => {
  console.log(err || 'Arquivo Salvo')
})