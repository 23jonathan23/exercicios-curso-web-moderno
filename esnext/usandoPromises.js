//com promise
const http = require('http')

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = ''
  
      res.on('data', dados => {
        resultado += dados
      })
  
      res.on('end', () => {
        try{
          resolve(JSON.parse(resultado))
        }catch(e){
          reject(e)
        }
      })
    })
  })
}

let nomes = []
getTurma('A').then( alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))

  getTurma('B').then( alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))

    getTurma('C').then( alunos => {
      nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
      console.log(nomes)
    })

  })
})

//Melhor jeito de usar as Promises
//Esse metodo all de uma Promise recebe como parametros o resultado de varias 
//Promises, e só quando receber a resposta de todas executará o metodo .then
//Observe o exemplo abaixo
//Function que retornam uma promises passados através de um Array
//Sempre fazer o tratamento de erro em uma promises
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas))
  .then(aluno => aluno.map(a => a.nome))
  .then(nomes => console.log(nomes))
  .catch(e => console.log(e.message))
  //teste para ver o erro retornado pela promises
  //pegando uma turma que não existe
  getTurma('D').catch(e => console.log(e.message))