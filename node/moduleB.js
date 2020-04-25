//Esse é o padrão mais usado para exportação 
//(tornar publico, para uso de outros modulos)
//quando você exporta determinada linha de codigo,variavel, função
//ele se torna acessivel em outros modulos tbm.
//Quando é exportado ele se torna um objeto, que contém tudo o que
// for exportado
module.exports = {
  bomDia: 'Bom dia',
  boaNoite(){
    return 'Boa noite'
  }
}