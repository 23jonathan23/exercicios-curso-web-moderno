const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMId')
const usuarioapi = require('./api/usuario')

require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioapi.salvar)
app.get('/usuario', usuarioapi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(saudacao('Jonathan'))

app.use('/opa', (req, res, next) => {
  console.log('Antes...')
  next()
})

app.get('/cliente/relatorio', (req, res) => {
  res.send(`Cliente relatorio: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {

  res.send(req.body)
  // let corpo = ''
  // req.on('data', function(parte) {
  //   corpo += parte
  // })

  // req.on('end', function(parte) {
  //   res.send(corpo)
  // })
})

app.get('/cliente/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado`)
})


app.get('/opa', (req, res, next) => {
  console.log('durante...')
  res.json({
    data: [
      {id: 7, name: 'ana', position: 1},
      {id: 4, name: 'carlos', position: 2},
      {id: 3, name: 'lauara', position: 3},
      {id: 1, name: 'anajulia', position: 4},
    ],
    count: 20,
    skip: 0,
    limit: 3,
    status: 200
  })
  next()
  // res.json({
  //   name: 'Jonathan',
  //   preco: 10000.20
  // })
  // res.send('Estou bem <b>Otimo<b>')
})

app.use('/opa', (req, res) => {
  console.log('Depois...')
})

app.listen(3000, () => {
  console.log('Executando Backend')
})