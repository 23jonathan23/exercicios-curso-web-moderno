
function TratarErro(erro) {
    // THROW lança uma resposta ao erro
    throw {
        nome: 'Cralos',
        msg: ' Nada',
        date: new Date
    }   
}

function imprimirNomeGritado(obj) {
    // TRY é colocado a sentença de código que corre o risco de dar erro
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    //CATCH é colocado uma resposta ao erro que deu, ou seja pode ser colocado uma funtion, msg e etc 
    catch (e) {
        TratarErro(e)
    } 
    // Finally é um bloco que será executado imdependente do resultado
    finally{
        console.log('Final..')
    }
}

const obj = {name: 'carlos'}
imprimirNomeGritado(obj)
