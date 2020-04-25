//Uma Promise é uma promessa que pode ser resolvida o rejeitada por algo
//erro ou envento não esperado
//Na hora de instanciar uma Promises você passa uma callback com os paramentros
// resolve - caso resolvida o resultado será passado para a função resolve
//reject - caso ouver um erro ou evento não esperado será passado para essa função
//Uma promise aceita apenas um parametro em seu resolve e reject
//Se for necessario passar varias coisa será necessario o uso de objeto
function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}


//o metodo then é um metodo presente quando uma Promise e resolvida
//Ele recebe como parametro uma callback que captura o resultado da promisse
// ai voce pode usar como quiser dentro de sua callback
//Pode ser encadeado varios then, e sempre o then recebera o resultado 
//obtido do anterior como no exemplo abaixo
falarDepoisDe(3, 'Que Legal')
  .then(frase => frase.concat('?!?'))
  .then(outrasFrase => console.log(outrasFrase))
  .catch(e => console.log(e))
//o metodo catch é outro presente em uma Promise só que rejeitada
//Ele recebe como parametro uma callback que captura o erro obtido da promise
// ai voce poderá trata-lo ou não dentro de sua callback