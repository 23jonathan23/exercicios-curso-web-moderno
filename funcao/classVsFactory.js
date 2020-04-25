// criando uma classe em JS
class Pessoa {
    //construtor na classe
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

//instanciando a classe
const p1 = new Pessoa('João')
p1.falar()

//fuction Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jonathan')
p2.falar()


