/* import './perfil.css' */
import styles from './Perfil.module.css';

const Perfil = () => {
  const usuario = {
    nome: "Claudio Ferreira", 
    avatar: "https://github.com/claudioferreir.png"
  }

  return (
    <header className={styles.header}>
      <img className={styles.avatar} src={usuario.avatar} alt={usuario.nome} />
      <h1 className={styles.name}>{usuario.nome}</h1>
    </header>
  )
}

export default Perfil;