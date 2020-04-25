const colors = {
  p: '#388e3c',
  div: '#1565c0',
  span: '#e53935',
  section: '#f67809',
  ul: '#5e35b1',
  ol: '#fbc02d',
  header: '#d81b60',
  nav: '#64dd17',
  main: '#00acc1',
  footer: '#304ffe',
  form: '#9f6581',
  body: '#25b6da',
  padrao: '#616161',

  get(tag) {
    return this[tag] ? this[tag] : this.padrao
  }
}

document.querySelectorAll('.tag').forEach(elemento => {
  //propriedade tagName é o nome do elemento
  const tagName = elemento.tagName.toLowerCase()

  elemento.style.borderColor = colors.get(tagName)

  if(!elemento.classList.contains('nolabel')) {
    //medoto createElement é responsavel por criar um novo elemento
    const label = document.createElement('label')
    label.style.backgroundColor = colors.get(tagName)
    label.innerHTML = tagName
    //o metodo insertBefore é responsavel por inserir um elemento no elemento
    //atual, nesse caso é passado dois parametros o elemento a ser inserido
    //e a condição que no caso é para ele ser inserido antes do primeiro
    //"filho" elemento que ouver dentro desse elemento
    elemento.insertBefore(label, elemento.childNodes[0])
  }
})