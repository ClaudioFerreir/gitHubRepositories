import './perfil.css'

const Perfil = () => {
  const usuario = {
    nome: "Claudio Ferreira", 
    avatar: "https://github.com/claudioferreir.png"
  }

  return (
    <div>
      <img className="perfil-avatar" src={usuario.avatar} alt={usuario.nome} />
      <h1 className="perfil-titulo">{usuario.nome}</h1>
    </div>
  )
}

export default Perfil;