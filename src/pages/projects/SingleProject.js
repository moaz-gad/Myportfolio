import React from "react"
import Header from "../../components/header/Header"
// import "./SingleProject.css"

function SingleProject(props) {
  const project = props.location.state.project

  return (
    <div className="single-project-main">
      <Header theme={props.theme} setTheme={props.setTheme} />

      <div className="project-header">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>

      <div className="project-slider">{/* Render project images here */}</div>

      <div className="project-info">
        <div className="tech-stack">
          <h3>Technologies:</h3>
          <ul>
            {project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className="project-links">
          <h3>Links:</h3>
          <ul>
            <li>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </li>
            <li>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SingleProject
