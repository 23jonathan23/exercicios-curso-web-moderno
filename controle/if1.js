function soNoticiaBoa(nota){
    if(nota >= 7){
        console.log('Aprovado...' + nota)
    }
}

soNoticiaBoa(7.1)
soNoticiaBoa(6.1)

function soFaloseforVerdade(valor){
    //Devido ao javascript ter outros formas de valores booleno, nesse caso executará o bloco if caso o valor seja 
    //convertido a verdadeiro, caso for falso não executará.
    if(valor){
        console.log('Verdade...' + valor)
    }
}

//Falsos
soFaloseforVerdade()
soFaloseforVerdade(null)
soFaloseforVerdade(undefined)
soFaloseforVerdade(NaN)
soFaloseforVerdade('')
soFaloseforVerdade(0)

//Verdadeiro
soFaloseforVerdade(-1)
soFaloseforVerdade(' ')
soFaloseforVerdade('?')
soFaloseforVerdade([])
soFaloseforVerdade([1,2])
soFaloseforVerdade({})
