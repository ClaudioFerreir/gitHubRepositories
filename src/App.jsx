import React, { useState } from 'react'

import './App.css'
import ReposList from './components/ReposList/index'
import Perfil from './components/Perfil/index'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
    </>
  )
}

export default App
