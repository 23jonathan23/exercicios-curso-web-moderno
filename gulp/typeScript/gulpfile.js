//Importando plugins, fucntion e framework
const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
//Define as configurações de de projeto do typeScript
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
  return tsProject.src() //Definindo onde está o condigo fonte
                  //Responsavél por fazer todo processo de converção
                  //da linguagem typeScript para o JavaScript
                  .pipe(tsProject())
                  .pipe(gulp.dest('build')) //Destino onde será salvo o arquivo 
}

//Para não ocorrer o erro de não encontrar a tarefa 
//temos que definir uma tarefa padrão
//e isso é feito a partir do ".default"
exports.default = series(transformacaoTS)