import '../styles/components/projectscontainer.sass'
import { useState, useEffect } from 'react'
import axios from 'axios'


const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; 


const ProjectsContainer = () => {
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(null)


  const BuscarRepositorios = async () => {
    try{
      const res = await axios.get(
        'https://api.github.com/users/PatrickSouza2245/repos',
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`, 
          },
        }
      )
      setRepos(res.data)
    } catch (error) {
      console.error("Erro ao buscar repositórios", error)
      setError("Não foi possivel carregar os repoitórios.")
    }
  }

  useEffect(() => {
    BuscarRepositorios()
  }, [])
  
  return (
    <section className="projects-container">
        <h2>Meus Projetos</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="projects-grid">
          {repos.map((repo) => (
            <div className="project-card" key={repo.id}>
              <div className='project-info'>
                <h3>{repo.name}</h3>
                <p>{repo.description || "Nenhuma descrição disponível."}</p>
              </div>
              <br />
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              > 
                Repositório
              </a> 
              {repo.homepage && (
                <a href={repo.homepage} className='btn' target='_blank' rel='noopener noreferrer'> Site</a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectsContainer