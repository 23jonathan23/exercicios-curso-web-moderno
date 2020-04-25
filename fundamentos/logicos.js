function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // operador logico OU
    const comprarTV50 = trabalho1 && trabalho2 // operador logico E
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 // operador logico Xor
    const manterSaudavel = !comprarSorvete // operador logico negação EX: comprarSorvete = true , aplicando negação vira FALSO.

    // para retornar mais de um valor, utilizamos o retorno por objeto, de forma inplicita ou seja não precisamos
    // definir a chave e valor, passamos somente o valor e a chave/atributo e definico com o mesmo nome da varivael
    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

