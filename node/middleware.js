// middleware pattern (chain of responsability) 
// esse é um padrão de projeto usado muito no desenvolvimento
// aqui o CTX é resposavael por carregar os dados entre as funções
// o NEXT é a função que é responsavel por chamar o proximo passo
// nesse padrão não amarramos uma função na outra, para que o
// codigo se torne mais reutilizavel
const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

// '...' é um operado rest junta os proximos parametros passados em um array
// por exemplo ele foi passado como segundo parametro, então apartir do segundo
// todos serão atribuidos a um array
//essa é a função que utilizara todas os passos anteriores
const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length &&
      middlewares[indice](ctx, () => execPasso(indice + 1))
  }
  execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
