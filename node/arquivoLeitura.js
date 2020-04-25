const fs = require('fs') // File System é um modulo core

const caminho = __dirname + '/arquivo.json'

//sincrono... //tomar cuidado para não travar o Event Lopp
//espera até que o arquivo seja completamento lido
const conteudo = fs.readFileSync(caminho, 'utf-8') // utf-8 é o in code
console.log(conteudo)

//assincrona... //Priorizar o uso de leituras assim
//na forma assicrona usamos uma callback que será chamada quando
//o arquivo terminar de ser lido, callback captura o erro(caso acontecer) e o conteudo 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  if(err){console.log(err)}
  else {
  const config = JSON.parse(conteudo)
  console.log(`${config.dv.host}:${config.dv.port}`)}
})

// no caso de um arquivo JSON pode ser carregado dessa forma tambem
// através do require
const config = require('./arquivo.json')
console.log(config.dv)

// Faz a leitura de pastas, mostrando os arquivos presente nela
//Assincrona...
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Arquivos presentes...')
  console.log(arquivos)
})