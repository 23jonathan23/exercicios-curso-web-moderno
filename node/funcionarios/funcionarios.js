const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // o axios é o clientHttp usada para fazer requisição

const pegaGenero = pessoa => pessoa.genero === 'F'
const pegaPais = pessoa => pessoa.pais === 'China'

//Meu método usando filter()
let resp = 10000000
const pegaSalario = function (pessoa, i, todos) {

  for(let i = 0; i < todos.length; i++){

    if(todos[i].salario < resp) resp = todos[i].salario

  }

  return pessoa.salario === resp
}

//metodo do professor usando reduce()
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(resposta => {
  const funcionarios = resposta.data
  //Meu método
  const resultado = funcionarios.filter(pegaPais).filter(pegaGenero).filter(pegaSalario)
  console.log(resultado)

  //método do professor
  const resultado2 = funcionarios.filter(pegaPais).filter(pegaGenero).reduce(menorSalario)
  console.log(resultado2)
})

