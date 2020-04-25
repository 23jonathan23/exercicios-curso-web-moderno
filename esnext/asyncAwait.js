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

//Recurso do ES8
//O uso de async/await traz para seu codigo um efeito parecido como
// se estivesse trabalhando de forma sincrona
// porém nesse caso em vez de travar o event loop com uma tarefa
// ela é executada de forma assincrona e é a function que aguarda a resposta
// Após recebida o codigo continua a executar
//Objetivo de simplificar o uso de promises
let obterAlunos = async () => {
  const ta = await getTurma('A')
  const tb = await getTurma('B')
  const tc = await getTurma('C')
  return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))