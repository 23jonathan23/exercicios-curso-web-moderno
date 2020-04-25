const escola = "Cod3r"

console.log(escola.charAt(4)) // retorna o caracter que está na posição passada
console.log(escola.charCodeAt(3)) // retorna o numero correspondente ao caracter na tabela asqy
console.log(escola.indexOf('3')) // reatorna a posição do valor passado
console.log(escola.substring(1)) // definir qual parte da string deve ser exibida, no caso estamos dizendo que será exibido apartir da posição 1
console.log(escola.substring(0, 3)) // Começa do caracter na posição 0 e vai até a posição 3, porem não exibe a posição 3
console.log('Escola'.concat(escola)) // concatena , pode ser feita com expressão literal
console.log('Escola' + (escola)) // 2 exemplo de como concatenar, pode ser feito com o operador +
console.log(escola.replace(3, 'e')) // função para fazer substituição de uma caracter especifico
console.log('Ana, Paula, Carlos'.split(',')) // transforma string em um type Array
