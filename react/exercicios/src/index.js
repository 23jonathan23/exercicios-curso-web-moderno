import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    <Pai nome="Jonathan" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="Gabriel" />
      <Filho nome="Carla" />
    </Pai>
  </div>
, document.getElementById('root'))