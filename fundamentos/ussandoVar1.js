{
    {
        {
            {
                var nome = 'Eden Garden'
            }
        }
    }
}
// variaveis criadas com var, quando declaradas em qualquer local fora de uma função, são variaveis Globais
console.log(nome)

// uma variavel VAR quando definida dentro de uma function, ele só pode ser acessada dentro da function
function soma() {

    var local = 'USA'
    console.log(local)
}

soma()
console.log(local) // será gerado um erro pois a varivael foi definida dentro de uma function e não pode ser acessada fora da mesma.
