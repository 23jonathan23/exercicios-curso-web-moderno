// o Process é consegue capturar algo digitado pelo usuario no caso Entrada
// e tbm exibe através da saida padrão, no caso a tela.

const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
  //stdout significa saida padrão, então logo em seguida utilizamos o .write
  //para escrever na tela (terminal)
  process.stdout.write('Fala Anônimo!\n')
}else {
  process.stdout.write('Informe seu nome: ')
  //stdout significa entrada padrão, então logo em seguida utilizamos o .on
  //para capturar os dados que o usuario digitou, seguido de uma function
  //que podera usar os dados com quiser
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Fala ${nome}!!\n`)
    //exit usado para finalizar o processo em execução
    process.exit()
  })
}