import React, { Component } from 'react'

export default class Saudacao extends Component {

  //Definindo state inicial do componete
  //Não é possivel alterar os valores de this.props,
  //pois são somente leitura, por isso usamos o state
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  }

  constructor(props) {
    super(props)

    this.setTipo = this.setTipo.bind(this)
  }

  //Função usada no evendo um change do campo de texto
  setTipo(e) {
    //O state do componente nada mais é do os dados do componente
    //setState é a function responsavél por aterar o state de um valor
    //definido anteriormente dentro de state ={...}
    this.setState({tipo: e.target.value})
  }

  setNome(e) {
    //O state do componente nada mais é do os dados do componente
    //setState é a function responsavél por aterar o state de um valor
    //definido anteriormente dentro de state ={...}
    this.setState({nome: e.target.value})
  }

  //Function responsavel por renderizar o componete
  render() {
    //Recebendo as propriedades através do state
    const { tipo, nome } = this.state

    return (
      <div>
        <h1>{tipo} {nome}!</h1>
        <hr/>
        <input type="text" placeholder="Tipo..." 
          value={tipo} onChange={this.setTipo}/>
        <input type="text" placeholder="Nome..." 
          value={nome} onChange={e => this.setNome(e)}/>
      </div>
    )
  }
}
