//Importando o framework, plugins
const gulp = require('gulp')
//Babel é um compilador javascript, ele adapta seu codigo para um codigo
//que seja mais compativel com a maioria dos Browsers
const babel = require('gulp-babel')
//O uglify é responsavél por converter o codigo e tornar ele mais mimificado
//ou seja, otimizar seu codigo removendo espaços, organizando tudo em uma só
//linha para que o arquivo fique mais otimizado.
const uglify = require('gulp-uglify')
const sass = require('gulp-sass') //Sass é um pré-processador CSS
const uglifycss = require('gulp-uglifycss') //Definição é a mesma so que para CSS
const concat = require('gulp-concat') //O concat junta 2 ou mais arquivos de codigo em apenas 1
const htmlmin = require('gulp-htmlmin') //Igual o uglify só que para HTML

function appHTML() {

  return gulp.src('src/**/*.html') //Definindo o arquivo de entrada
             .pipe(htmlmin({ collapseWhitespace: true })) //Minimifica o arquivo
             .pipe(gulp.dest('build')) //Salva o arquivo no destino
}

function appCSS() {
  return gulp.src('src/assets/sass/index.scss') //Definindo o arquivo de entrada
             //Convertento SCSS em CSS
            //Capturando possiveis erros
             .pipe(sass().on('error', sass.logError)) 
             .pipe(uglifycss({ "uglyComments": true })) //Minimifica o arquivo
             .pipe(concat('app.min.css')) //O concat junta 2 ou mais arquivos de codigo em apenas 1
             .pipe(gulp.dest('build/assets/css')) //Salva o arquivo no destino
}

function appJS() {
  return gulp.src('src/assets/js/**/*.js') //Definindo o arquivo de entrada
             .pipe(babel({ presets: "env" })) //Converte o codigo para ser mais compativel com o Browser
             .pipe(uglify()) //Minimifica o arquivo
             .pipe(concat('app.min.js')) //O concat junta 2 ou mais arquivos de codigo em apenas 1
             .pipe(gulp.dest('build/assets/js')) //Salva o arquivo no destino

}

function appIMG() {
  return gulp.src('src/assets/imgs/**/*.*') //Definindo o arquivo de entrada
             .pipe(gulp.dest('build/assets/imgs')) //Salva o arquivo no destino
}

//Registrando as tasks com nomes
//para serem usadas em a partir do nome delas
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG
}