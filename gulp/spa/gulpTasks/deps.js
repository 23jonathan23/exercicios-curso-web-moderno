//Importando o framework, plugins
const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS() {
  //Definindo o arquivo de entrada
  return gulp.src('node_modules/font-awesome/css/font-awesome.css')
            //a function pipe é responsavel por aplicar uma transformação aos
            //arquivos ou dados informados
             .pipe(uglifycss({ "uglyComments": false })) //Minimifica o codigo
             .pipe(concat('deps.min.css')) //Juntas varios arquivos em 1
             .pipe(gulp.dest('build/assets/css')) //Salva o arquivo no destino
}

function depsFonts() {
  //Definindo o arquivo de entrada
  return gulp.src('node_modules/font-awesome/fonts/*.*')
             .pipe(gulp.dest('build/assets/fonts')) //Salva o arquivo no destino
}

module.exports = {
  depsCSS,
  depsFonts
}