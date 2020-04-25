// IIFE -> Immediately Invoked Function Expression
//Função invocada imediatamente, a função é declarada e ao mesmo tempo é invocada.
//essa função deve ser declarada dentro de parenteses, e para ser invocada deve ser finalizada com ()
//Tudo declarado dentro dessa função foge do escopo global, ou seja não entra no escopo global.
(function () {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})()