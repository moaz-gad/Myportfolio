import React from "react"
import "./ProjectCard.css"

const ProjectCard = ({ project }) => {
  const { name, description, technologies, githubLink, demoLink } = project

  return (
    <div className="project-card">
      <div className="project-header">
        <h3>{name}</h3>
        <div className="project-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-technologies">
        {technologies.map((tech) => (
          <span key={tech} className="project-tech">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
