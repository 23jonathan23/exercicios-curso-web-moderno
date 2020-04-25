// O objeto global no node é representado pela palavra 'global'
//Deve se tomar cuidado ao mecher com o objeto global
//Podemos tornar uma variavel, objeto, array, function global
//atribuindo ela ao objeto global como o exemplo abaixo

global.MinhaApp = {
  saudacao() {
    return 'Estou no Global'
  },
  nome: 'Sistema Legal'
}