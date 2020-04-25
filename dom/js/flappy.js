//Função usada para criar novos elementos
function novoElemento(tagName, className) {
  //Criando um novo elemento
  const elem = document.createElement(tagName)
  //Atribuindo uma class ao elemento
  elem.className = className
  return elem
}

//Funcão construtora usada para criar as barreiras
function Barreira(reversa = false) {
  //Criando um novo elemento (barreira)
  this.elemento = novoElemento('div', 'barreira')

  //Criando um novo elemento (borda)
  const borda = novoElemento('div', 'borda')
  //Criando um novo elemento (corpo)
  const corpo = novoElemento('div', 'corpo')
  //acrescentando os elemento criandos no elemento pai (barreira)
  this.elemento.appendChild(reversa ? corpo : borda)
  this.elemento.appendChild(reversa ? borda : corpo)

  //Alterando a altura do elemento (corpo)
  this.setAltura = altura => corpo.style.height = `${altura}px`
} 

// const b = new Barreira(true)
// b.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function ParDeBarreiras(altura, abertura, x) {
  //Criando um novo elemento (par-de-barreiras)
  this.elemento = novoElemento('div', 'par-de-barreiras')

  //Criando as barreiras superior e inferior
  this.superior = new Barreira(true)
  this.inferior = new Barreira(false)
  //acrescentando as barreiras criadas no elemento pai (par-de-barreira)
  this.elemento.appendChild(this.superior.elemento)
  this.elemento.appendChild(this.inferior.elemento)

  this.sortearAbertura = () => {
    //calculando altura superior e inferior
    const alturaSuperior = Math.random() * (altura - abertura)
    const alturaInferior = altura - abertura - alturaSuperior
    //atribuindo a altura superior e inferios aos elementos (barreiras)
    this.superior.setAltura(alturaSuperior)
    this.inferior.setAltura(alturaInferior)
  }
  //Indetificando a posição do elemento (par-de-barreiras) em relação
  //ao eixo x - horizontal
  this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
  //Alterando a posição do elemento em relação ao eixo x- horizontal
  //usando como direção base a propriedade left
  this.setX = x => this.elemento.style.left = `${x}px`
  //Pegando a largura do elemento
  this.getLargura = () => this.elemento.clientWidth

  this.sortearAbertura()
  this.setX(x)
}

// //Instanciando a função que é responsavél por criar o par de barreiras
// const b = new ParDeBarreiras(700, 400, 800)
// //Acrescentando as barreiras ao elemento pai
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
  this.pares = [
    //Criando as barreiras do jogo, através da function construtora
    //ParDeBarreiras
    new ParDeBarreiras(altura, abertura, largura),
    new ParDeBarreiras(altura, abertura, largura + espaco),
    new ParDeBarreiras(altura, abertura, largura + espaco * 2),
    new ParDeBarreiras(altura, abertura, largura + espaco * 3)
  ]

  const deslocamento = 3
  this.animar = () => {
    //Movimentado as barreiras pela tela do jogo
    //Percorrendo cada barreira que está no Array
    //setando uma nova posição conforme o deslocamento definido
    this.pares.forEach(par => {
      par.setX(par.getX() - deslocamento)

      // quando o elemento sair da área do jogo
      //Verfica se o par de barreiras saiu da tela do jogo
      //lado esquerdo
      if(par.getX() < -par.getLargura()) {
        //Reposicionando a barreira no fim dos outros elementos(Barreiras)
        //setando novo posicionamento
        par.setX(par.getX() + espaco * this.pares.length)
        //definido nova abertura da barreira
        par.sortearAbertura()
      }

      const meio = largura / 2
      const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
      //Verifica se a barreira cruzou o meio da tela do jogo
      //caso verdadeiro é chamado a function notificarPonto()
      if(cruzouOMeio) notificarPonto()
    })
  }
}


function Passaro(alturaJogo) {
  let voando = false
  //criando um novo elemento no caso o Passaro
  this.elemento = novoElemento('img', 'passaro')
  //Definiando o valor da propriedade src, caminho da imagem do passaro
  this.elemento.src = 'imgs/passaro.png'

  //Recebe a posição atual do passaro em relação a tela
  this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
  //Atribui uma nova posição ao elemento, no caso o passaro
  //utilizando como base a propriedade bottom - inferior
  this.setY = y => this.elemento.style.bottom = `${y}px`
  //Evento disparado quando o usuario estiver segurando a tecla
  //dessa forma a variavel voando será setada para TRUE
  window.onkeydown = e => voando = true
  //Evento disparado quando o usuario soltar a tecla
  //dessa forma a variavel voando será setada para FALSE
  window.onkeyup = e => voando = false

  //Animação do passaro
  //movimentação do elemento na tela
  this.animar = () => {
    const novoY = this.getY() + (voando ? 8 : -5)
    const alturaMaxima = alturaJogo - this.elemento.clientHeight

    //verifica se o elemento no caso o passaro
    // não estrapolou a a altura inferior da tela do game
    if(novoY <= 0) {
      //alterando a posição do passaro
      this.setY(0)
    }else if (novoY >= alturaMaxima){
      //alterando a posição do passaro
      this.setY(alturaMaxima)
    }else {
      this.setY(novoY)
    }
  }

  //Setando altura inicial do passaro
  this.setY(alturaJogo / 2)
}

// //Criando as barreiras
// const barreiras = new Barreiras(700, 1200, 400, 400)
// //Criando o passaro
// const passaro = new Passaro(700)
// //Selecionando o elemento
// const areaDoJogo = document.querySelector('[wm-flappy]')
// //Acrescentando o elemento passaro ao  div pai (area do jogo)
// areaDoJogo.appendChild(passaro.elemento)
// //Acrescentando os elementos (Barreiras) ao div Pai. (area do jogo)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

// //Essa função será responsavel por chamar a função de animação a cada
// //20 milisegundos
// //Transição das Barreiras
// setInterval(() => {
//   barreiras.animar()
//   passaro.animar()
// }, 20)

//Function construtora responsável pela pontuação
function Progresso() {
  //Criando o elemento
  this.elemento = novoElemento('span', 'progresso')
  this.atualizarPontos = pontos => {
    //Alterando os pontos
    //Alterando o conteudo do elemento
    this.elemento.innerHTML = pontos
  }
  this.atualizarPontos(0)
}

//Função responsavél por identificar se os elementos estão sobrepostos
function estaoSobrepostos(elementoA, elementoB) {
  //Essa função getBoundingClientRect() é responsável por
  //pegar o retangulo associado ao elemento
  const a = elementoA.getBoundingClientRect()
  const b = elementoB.getBoundingClientRect()

  //Calculando as possiveis colisões
  const horizontal = a.left + a.width >= b.left
      && b.left + b.width >= a.left
  const vertical = a.top + a.height >= b.top
      && b.top + b.height >= a.top

  //Caso haja colisão a function irá retornar verdadeiro
  return horizontal && vertical
}

//Função responsável por identificar se os elementos se colidiram
function colidiu(passaro, barreiras) {
  //variavel responsavél por setar se os elementos colidiram
  //caso se torne True que dizer que colidiram
  let colidiu = false
  //Percorrendo os pares de barreiras
  barreiras.pares.forEach(parDeBarreiras => {
    //Verificando se colidiu ainda está como false
    //ou seja se aindo não tiver colidido entrará no if
    if(!colidiu) {
      //Atribuindo os elementos barriras superios e inferior as const
      const superior = parDeBarreiras.superior.elemento
      const inferior = parDeBarreiras.inferior.elemento
      //função que indentfica se os elementos estão sobrepostos
      //verificando se o passaro colidiu com a barreira superior ou a inferior
      //caso um dois dois seja verdadeiro a variavel se torna TRUE
      //Que dizer que os elementos colidiram (o passaro colidiu)
      colidiu = estaoSobrepostos(passaro.elemento, superior)
          || estaoSobrepostos(passaro.elemento, inferior)
    }

  })

  //Caso haja colisão a function irá retornar verdadeiro
  return colidiu
}

//Função responsavél por de fato criar o jogo ultilizando as demais
//function definidas anteriormente
function FlappyBird() {
  //Variavel para armazenar os pontos
  let pontos = 0
  //Criando um novo elemento, area do game elemento pai
  const areaDoJogo = document.querySelector('[wm-flappy]')
  //Recebendo a altura do elemento pai (areaDoJogo)
  const altura = areaDoJogo.clientHeight
  //Recebendo a largura do elemento pai (areaDoJogo)
  const largura = areaDoJogo.clientWidth

  //Instanciando a function construtora Progresso, Barreiras e Passaro.
  //Criando o elemento progresso, barreiras e passaro.
  const progresso = new Progresso()
  const barreiras = new Barreiras(altura, largura, 200, 400, 
    () => progresso.atualizarPontos(++pontos))
  const passaro = new Passaro(altura)

  //Acrescentando os elementos de progresso, passaro e barreiras ao
  //elemento pai (Area do Jogo)
  areaDoJogo.appendChild(progresso.elemento)
  areaDoJogo.appendChild(passaro.elemento)
  barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

  //Function responsável por iniciar o jogo
  this.start = () => {
    //loop do jogo
    //Essa função será responsavel por chamar a função de animação a cada
    //20 milisegundos
    const temporizador = setInterval(() => {
      barreiras.animar()
      passaro.animar()

      if (colidiu(passaro, barreiras)) {
        clearInterval(temporizador)
      }
    }, 20)
  }
}

new FlappyBird().start()