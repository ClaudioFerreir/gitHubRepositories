import { useState, useEffect } from 'react';

import styles from './ReposList.module.css';

const ReposList = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/claudioferreir/repos')
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        setLoading(false);
        setRepos(data);
      }, 3000);
    })
  }, [])


  return (
    <div className="container">
      {loading && (
        <h2>Carregando...</h2>
      )}  
      <ul className={styles.list}>
        {repos.map(({id, name, language, html_url}) => (
          <li className={styles.listItem} key={id}>
            <div className={styles.itemName}>
              <b>Nome:</b> {name}
            </div>
            <div className={styles.itemLanguage}>
              <b>Linguagem:</b> {language} 
            </div>
            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReposList;