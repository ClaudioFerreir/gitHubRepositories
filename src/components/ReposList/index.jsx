import { useState, useEffect } from 'react';

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
    <>
      {loading && (
        <h2>Carregando...</h2>
      )}  
      <ul>
        {repos.map(({id, name, language, html_url}) => (
          <li key={id}>
            <b>Nome:</b> {name} <br />
            <b>Linguagem:</b> {language} <br /> 
            <a target="_blank" href={html_url}>Visitar no Github</a> <br />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ReposList;