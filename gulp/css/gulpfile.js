//Importação de framework, function expecifica, plugins.
const { series } = require('gulp')
const gulp = require('gulp')
//Sass é um pré-processador CSS
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
  return gulp.src('src/sass/index.scss') //Definindo arquivos de entrada
              //Convertento SCSS em CSS
              //Capturando possiveis erros
             .pipe(sass().on('error', sass.logError))
             .pipe(uglifycss({ "uglyComments": true })) //Mimifica o codigo
             .pipe(concat('estilo.min.css')) //Junta os arquivos em apenas 1
             .pipe(gulp.dest('build/css')) //Salva arquivo no local de destino
}

function copiarHTML() {
  return gulp.src('src/**/*.html') //Definindo arquivo de entrada
             .pipe(gulp.dest('build')) //Salva arquivo no local de destino
}

exports.default = series(transformacaoCSS, copiarHTML)