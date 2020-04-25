//Importando as bibliotecas
//BadyParser é responsavél por enterpretar a resposta da requisição
//e convertela para dados que o back end consiga manipular
const bodyParser = require('body-parser')
//Express é o nosso servidor
const express = require('express')
//Instanciando o express
const app = express()

//O metodo use é uma função middlewares
//O metodo use é aplicado para qualquer requisição que chegar ao servidor
//Servindo os arquivos estáticos da pasta atual
app.use(express.static('.'))
//Toda requisição que for realizada o body Parser irá 
//convertela para dados que o back end consiga manipular (ou seja Objeto)
app.use(bodyParser.urlencoded({ extended: true }))
//Caso a requisição seja em json, ele será convertido para Objeto
app.use(bodyParser.json())

//Importando a biblioteca multer
const multer = require('multer')

//Configuração do armazenamento
const storage = multer.diskStorage({
  //Destino onde será salvo o arquivo carregado
  destination: function (req, file, callback) {
    callback(null, './upload')
  },
  //Definindo o nome do arquivo que será salvo
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`)
  }
})

//single é o name do elemento input do html
const upload = multer({ storage }).single('arquivo')

//Requisição do tipo post, na rota /upload
app.post('/upload', (req, res) => {
  upload(req, res, err => {
    //Verifica se foi retornado um erro
    if(err) {
      return res.end('Ocorreu um erro.')
    }
    //envia uma resposta final, finalizando
    res.end('Concluído com sucesso.')
  })
})

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 1
  })
})

app.get('/parOuImpar', (req, res) => {
  //req.body
  //req.query
  //req.params
  const par = parseInt(req.query.numero) % 2 === 0
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})

//Servidor irá "escutar" na porta 8080
app.listen(8080, () => console.log('Executando...'))