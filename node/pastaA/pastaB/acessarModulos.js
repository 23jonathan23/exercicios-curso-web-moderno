const moduloA = require('../../moduloA')
console.log(moduloA.ateLogo)

//O http é um modulo core do node, ou seja um modulo que o proprio node possui
const http = require('http')

// req = requisição e res = resposta sa requisição
http.createServer((req, res) => {
  res.write('Hello Word')
  res.end() // res.end() finaliza a requisição
}).listen(8080) //listen é a função que determina a porta de acesso do host

//por padrão quando passo o caminho da pasta somente, o node procurará por o
//arquivo padrão 'index.js'
const c = require('./pastaC')
console.log(c.ola)