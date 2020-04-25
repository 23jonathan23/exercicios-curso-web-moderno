// Primeiro método usado para amarrar o 'THIS' ao function Pessoa com o uso de 'Bind'
function Pessoa(){
    this.idade = 0
    // setInterval é uma função usada para disparar outra função
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000 /*milisegundos*/)
}

new Pessoa

// Segundo método usado para amarrar o 'THIS' ao function Pessoa sem o uso de 'Bind'
function Pessoa2(){
    this.idade = 0

    const self = this // self é o nome mais usado para uma constante que se refere ao 'This'
    // setInterval é uma função usada para disparar outra função
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000 /*milisegundos*/)
}

new Pessoa2