//operador ... rest(juntar) / spread(separar)
// usar rest com parâmetro de uma função

//usar spread com objeto
//o operador spread espalha os dados de um objeto dentro do outro
const funcionario = { nome: 'Maria', salario: 1234.88}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
//o operador spread espalha os dados de um array dentro do outro
const grupoA = ['João', 'Maria', 'Carlos']
const grupoFinal = ['Marcelo', ...grupoA, 'Joana']
console.log(grupoFinal)