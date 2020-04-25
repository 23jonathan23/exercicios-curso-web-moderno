const sequecia = {
    _valor: 1, //converção uma forma de "deixar" o atributo privado usando _.
    get valor() { return this._valor++ }, //função get - faz a leitura do valor
    set valor(valor) { //função set - altera o valor
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}
//posso acessar o atributo normalmente pela notação ponto
//o javascript entendera qual função deverá ser usada.
console.log(sequecia.valor, sequecia.valor)
sequecia.valor = 1000
console.log(sequecia.valor, sequecia.valor)
sequecia.valor = 900
console.log(sequecia.valor, sequecia.valor)