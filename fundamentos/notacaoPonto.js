console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // a grosso modo o this é responsável por tornar a varivael PUBLICA, ou seja pode ser chamada de fora da function
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Cola')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()


