// Callback é a ação de chamar uma função de "Volta", a partir de eventos por EX: Loops
const fabricantes = ['Mercedes', 'BMW', 'Audi']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// ForEach é uma função de uma função, responsavel por fazer um loop para percorrer quantidades indeterminada de vezes
// muito usada para percorrer Arrays.
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))