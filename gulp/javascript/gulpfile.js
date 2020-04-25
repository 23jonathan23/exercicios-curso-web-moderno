//Importação dos plugins e framework
const { series } = require('gulp')
const gulp = require('gulp')
//O concat junta 2 ou mais arquivos de codigo em apenas 1
const concat = require('gulp-concat')
//O uglify é responsavél por converter o codigo e tornar ele mais mimificado
//ou seja, otimizar seu codigo removendo espaços, organizando tudo em uma só
//linha para que o arquivo fique mais otimizado.
const uglify = require('gulp-uglify')
//Babel é um compilador javascript, ele adapta seu codigo para um codigo
//que seja mais compativel com a maioria dos Browsers
const babel = require('gulp-babel')


//A callback que é passada como parametro é
//o proprio gulp quem a fornece
function transformacaoJS(cb) {
  //Definindo os arquivos/dados de entrada
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  //Tambem pode ser uado dessa forma
  //essa expressão define que todos os arquivos com a extenção
  //.js dentro dessa pasta serão carregados
  gulp.src('src/**/*.js')
      //a function pipe é responsavel por aplicar uma transformação aos
      //arquivos ou dados informados
      .pipe(babel({
        //Caso o valor seja falso,os comentarios não iram para o arquivo final
        comments: false,
        presets: ["env"] //Versão do javascript
      }))
      .pipe(uglify())
      //o metodo on pode ser usado para capturar um determinado evento
      //nesse caso estamos capturando o evento error
      .on('error', err => console.log(err))
      //Parametro, nome do arquvio final
      .pipe(concat('codigo.min.js'))
      //Destino onde o arquivo será salvo
      .pipe(gulp.dest('build'))

  return cb()
}

function fim(cb) {
  console.log('Fim...')
  return cb()
}

//Para não ocorrer o erro de não encontrar a tarefa 
//temos que definir uma tarefa padrão
//e isso é feito a partir do ".default"
module.exports.default = series(transformacaoJS, fim)