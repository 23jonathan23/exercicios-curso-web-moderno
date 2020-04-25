// igual
console.log('01)', '1' == 1) // não leva tipos em consideração
console.log('02)', '1' === 1) // estritamente igual, leva tipos em consideração

// diferente
console.log('03', '1' !== 1) // não leva tipos em consideração
console.log('04', '1' !== 1) // estritamente diferente, leva tipos em consideração

//maior, menor, igual
console.log('05', 3 > 4)
console.log('06', 5 < 3)
console.log('07', 5 >= 4)
console.log('08', 4 <= 6)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2) // estritamente igual, leva tipos em consideração
console.log('10', d1 == d2) // não leva tipos em consideração
console.log('11', d1.getTime() === d2.getTime()) // estritamente igual, leva tipos em consideração

console.log('12', undefined == null) // não leva tipos em consideração
console.log('13', undefined === null) // estritamente igual, leva tipos em consideração

