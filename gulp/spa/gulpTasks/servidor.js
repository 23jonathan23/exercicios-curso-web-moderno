//Importando o framework
const gulp = require('gulp')
//Webserver é um servidor usado para devenvolvimento
//não é usado em produção
const webserver = require('gulp-webserver')
//Watch monitora os arquivos da aplicação
//e quando hover uma alteração ele atualiza os artivos de produção
//de forma automatica
const watch = require('gulp-watch')

function servidor() {
  return gulp.src('build') //Definindo o arquivo de entrada
              //Configuração do servidor
             .pipe(webserver({
               port: 8080, //Porta da aplicação
               open: true, //Se quer que abrar o navegador
               livereload: true //Atualiza o servidor quando altera um arquivo
             }))
}

function monitorarArquivos(cb) {
  //Monitora os arquivos em questão e caso hover uma alteração
  //Dispara a callback que chama a Task do gulp
  watch('src/**/*.html', () => gulp.series('appHTML')())
  watch('src/**/*.scss', () => gulp.series('appCSS')())
  watch('src/**/*.js', () => gulp.series('appJS')())
  watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
  return cb()
}


module.exports = {
  monitorarArquivos,
  servidor
}