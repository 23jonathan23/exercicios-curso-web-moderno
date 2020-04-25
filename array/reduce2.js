//O método reduce()executa uma função reducer (provida por você) 
//para cada membro do array, resultando num único valor de retorno.
//O valor de retorno da sua função reducer é atribuída ao acumulador.
//O acumulador, com seu valor atualizado, é repassado para cada iteração
//subsequente pelo array, que por fim, se tornará o valor resultante, 
//único, final.
const alunos = [
  {nome: 'João', nota: 7.3, bolsista: true},
  {nome: 'Maria', nota: 9.2, bolsista: false},
  {nome: 'Pedro', nota: 9.8, bolsista: true},
  {nome: 'Ana', nota: 8.7, bolsista: false}
]

//Metodo meu

//Todos os alunos são bolsistas?
const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
  if(atual == false) acumulador = false
  return acumulador
}, true)

console.log(resultado)

//Algum aluno é bolsista?
const resultado1 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
  if(atual == true) acumulador = true
  return acumulador
}, false)

console.log(resultado1)

//Metodo do professor

//Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

