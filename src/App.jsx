import { useState } from 'react'
import './App.css'

function App() {

  const [usuario, setUsuario] = useState(" ")
  const [senha, setSenha] = useState(" ")

  function handleUsuario(evento){
    setUsuario(evento.target.value)

  }

  function handleSenha(evento){
    setSenha(evento.target.value)
    
  }

  function handleSubmit(){ 
    alert(`Usuário: ${usuario} / Senha: ${senha}`)
  }

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="" onSubmit={handleSubmit}>

          <div>
            <label htmlFor="usuario">Usuário</label>
            <input onChange = {handleUsuario} type="text" id="usuario" placeholder='Digite seu usuário'  />
          </div>

          <div>
          <label htmlFor="senha">Senha</label>
            <input onChange = {handleSenha} type="password" id="senha" placeholder='Digite sua senha' />
          </div>
          <button>Entrar</button>
        </form>
      </main>
    </>
  )
}

export default App
