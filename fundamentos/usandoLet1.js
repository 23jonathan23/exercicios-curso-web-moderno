let numero = 1 
/* as variveis definidas com LET, tem três comportamento no escopo, 
/*quando definida dentro de uma função, ela so existe dentro da função
/*quando declarada dentro de um bloco, ele dara prioridade a mesma que foi declarada dentro do bloco
/* mesmo que tenha uma varivel de escopo global, definida com o mesmo nome, o seja será priorisada
/* a variavel definida dentro do bloco, caso não definida será usando a varivel de escopo global
*/
{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora = ', numero)