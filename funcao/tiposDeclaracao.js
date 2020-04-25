console.log(soma(2, 3))

// function declaration
//as function declaradas dessa forma são carregadas antes do código ser executado
function soma (x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 5))

//named function expression
const mult = function mult (x, y){
    return x * y
}

console.log(mult(3, 4))
