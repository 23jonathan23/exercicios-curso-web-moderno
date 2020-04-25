let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis()

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// o 'THIS' de uma function Arrow ele respeita o contexto em que ele foi declarado
// ou seja ele não varia de forma alguma, sempre apontará para o modulo em que foi declarado/escrito
let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// A função Arrow não é afetada pela função BIND
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)