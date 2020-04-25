//Importando o Framework Gulp
const gulp = require('gulp')
// //Importando uma função expecifica do Framework Gulp
//A function series é usada para executar tarefas de forma sequencial
//ou seja uma de cada vez
//ja o Parallel garante que as tarefas sejam executadas de forma paralelas
//ou seja iniciam ao mesmo tempo (juntas)
const { series, parallel } = require('gulp')
// const series = gulp.series

//Cada function criada no arquivo gulp representa um Task = tarefa

const antes1 = cb => {
  console.log('Tarefa antes1')
  return cb()
}

const antes2 = cb => {
  console.log('Tarefa antes2')
  return cb()
}

//A callback que é passada como parametro é
//o proprio gulp quem a fornece
function copiar(cb) {
  //Definindo os arquivos/dados de entrada
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  //Tambem pode ser uado dessa forma
  //essa expressão define que todos os arquivos com a extenção
  //.TXT dentro dessa pasta serão carregados
  gulp.src('pastaA/**/*.txt')
  //a function pipe é responsavel por aplicar uma transformação aos
  //arquivos ou dados informados
          // .pipe(imagemPelaMetade())
          // .pipe(imagemEmPretoEBranco())
          // .pipe(traformacaoA())
          // .pipe(traformacaoB())
          // .pipe(traformacaoC())
          //gulp.dest copias os arquivos informados para o local de destino
          .pipe(gulp.dest('pastaB'))
  return cb()
}

const fim = cb => {
  console.log('Tarefa Fim')
  return cb()
}

//Para não ocorrer o erro de não encontrar a tarefa 
//temos que definir uma tarefa padrão
//e isso é feito a partir do ".default"
module.exports.default = series(
  //parallel garante que as tarefas sejam iniciadas de formas paralelas
  //então podemos misturar a execução em series com a parallel
  parallel(antes1, antes2),
  copiar,
  fim
)
