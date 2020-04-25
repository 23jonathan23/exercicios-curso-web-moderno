// Não podemos ter mais de um processo ocupando uma mesma porta
// nem o mesmo processo.
const porta = 3033

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// .use quer diser que independente da route ele será usado ou seja
// quando usarmos qualquer metodo seja ele get ou post ou outros
// ele será executado tbm
//BodyParser é usado para converter os dados passados no corpo da requisição
// para um objeto que o node consegue interpretar
// seu uso é indispensavél
//urlencoded é um padrão em que os dados são enviados através do body da requisição
app.use(bodyParser.urlencoded({ extended: true }))

// o metodo get tem como objetivo obter algo do servidor 
// get temos como primeiro parametro uma route e dps uma call back
// no padrão middleware, requisição, resposta, e uma proxima função
// caso necessario
app.get('/produtos', (req, res, next) => {
  // A função send automaticamente ira converter o objeto em JSON
  //send envia o JSON como uma resposta
  res.send(bancoDeDados.getProdutos())
})

// /:id é considerado um parametro então na url não iremos digitar /:id
// e sim /1 por exemplo
app.get('/produtos/:id', (req, res, next) => {
  // os paramentros passados na url ficam armazenados na req ou seja vem da
  //requisição, e podemos acessa-los através de req.params (onde fica armazenado
  // os parametros) e indicar qual queremos no caso o id.
  res.send(bancoDeDados.getProduto(req.params.id))
})

// o post é usado para enviar dados do front end para o para o servidor
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    // req.body + atributo que veio na requisição
    // req.body é onde fica localizados os dados que foram informados no
    // frontend, por exemplo em um formulario, (se caso tenha sido através do
    // body, podem variar)
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto) //JSON
})

//Estamos usando o metodo put para alterar um cadastro realizado
app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    // req.body + atributo que veio na requisição
    // req.body é onde fica localizados os dados que foram informados no
    // frontend, por exemplo em um formulario, (se caso tenha sido através do
    // body, podem variar)
    id: req.body.id,
    nome: req.body.name,
    preco: req.body.preco
  })
  res.send(produto) //JSON
})

//o metodo delete é usado para deletar um resgistro
app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto) //JSON
})

//listen é passado a porta que o servidor estará executando (escutando)
app.listen(porta, () => {
  console.log(`Servidor está executando na porta ${porta}.`)
})