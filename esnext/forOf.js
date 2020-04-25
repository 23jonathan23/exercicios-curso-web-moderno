//O forOf é usado para percorer os valores de array, strings, Map e etc
for (let letras of 'Cod3r') {
  console.log(letras)
}

const assustosEcma = ['Map', 'Set', 'Promise']

//ForIn percorre os indices 
for(let i in assustosEcma) {
  console.log(i)
}
//ForOf percorre os valores
for(let i of assustosEcma) {
  console.log(i)
}

const assuntosMap = new Map([
  ['Map', {abordado: true}],
  ['Set', {abordado: true}],
  ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap) {
  console.log(assunto)
}

for(let chaves of assuntosMap.keys()){
  console.log(chaves)
}

for(let valores of assuntosMap.values()) {
  console.log(valores)
}

for(let [ch, vl] of  assuntosMap.entries()) {
  console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
  console.log(letra)
}
