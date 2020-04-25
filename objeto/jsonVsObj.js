// no formato JSON, não é aceito functions
const obj = { a: 1, b: 2, c: 3}
console.log(JSON.stringify(obj)) // converte obj para JSON

console.log(JSON.parse('{ "a": 1, "b": 2 }')) // coverte JSON para obj
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))