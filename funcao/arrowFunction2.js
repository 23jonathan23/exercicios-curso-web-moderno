function Pessoa() {
    this.idade = 0
    // set interval é um temporizador
    //Arrow function o'THIS' não varia, ou seja não é necessário o uso da function 'BIND'
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
