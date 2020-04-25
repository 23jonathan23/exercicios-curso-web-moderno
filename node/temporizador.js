//Schedule é uma biblioteca de temporizador
//usado para executar function no tempo determinado
const schedule = require('node-schedule')

//funciona assim, segun..., minu..., horas, dia do mês, mês, dia da semana.
// segundos com */, siguinifica que será repetido de 5 em 5 segundos.
//Primero parametro é 
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 3', function () {
  console.log('Executando tarefa 1', new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel()
  console.log('Cancelando tarefa 1')
}, 20000)

//setInmmediate
//setInterval

//O scheduleJob pode ser passado o parametro dessa forma abaixo tbm

//importa o metodo de regra do schedule
const regra = new schedule.RecurrenceRule()
//Define os dias da semana
regra.dayOfWeek = [new schedule.Range(1, 5)]
//define a hora
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
  console.log('Executando Tarefa 2', new Date().getSeconds())
})




