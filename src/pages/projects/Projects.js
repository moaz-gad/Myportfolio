import React, { useState } from "react"
import Header from "../../components/header/Header"
import "./Projects.css"
import Filtration from "./Filtration"
import imag1 from "../../assets/images/portfolioProfileImage.png"
function Projects(props) {
  const theme = props.theme
  const [data, setData] = useState([
    {
      id: 1,
      label: "WordPress",
      name: "Project 1",
      description: "This is project 1",
      technologies: ["WordPress", "PHP", "MySQL"],
      githubUrl: "https://github.com/user/repo",
      demoUrl: "https://example.com",
      imageSrc: imag1,
    },
    {
      id: 1,
      label: "Frontend",
      name: "Project 2",
      description: "This is project 1",
      technologies: ["WordPress", "PHP", "MySQL"],
      githubUrl: "https://github.com/user/repo",
      demoUrl: "https://example.com",
      imageSrc: imag1,
    },
    {
      id: 1,
      label: "Frontend",
      name: "Project 3",
      description: "This is project 1",
      technologies: ["WordPress", "PHP", "MySQL"],
      githubUrl: "https://github.com/user/repo",
      demoUrl: "https://example.com",
      imageSrc: imag1,
    },
    // more project objects here
  ])

  const [filteredData, setFilteredData] = useState(data)

  const handleFilterChange = (filteredData) => {
    setFilteredData(filteredData)
  }

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />

      <Filtration
        data={data}
        setData={setData}
        onFilterChange={handleFilterChange}
      />

      <div className="project-list">
        {filteredData.map((project) => (
          // <div className="project-card">
          //   <img src={project.image} alt={project.name} />
          //   <h2>{project.name}</h2>
          //   <p>{project.description}</p>
          //   <div className="details">
          //     <ul className="technologies">
          //       {project.technologies.map((tech) => (
          //         <li key={tech}>{tech}</li>
          //       ))}
          //     </ul>
          //   </div>
          //   <div className="project-buttons">
          //     <a href={project.githubUrl}>GitHub</a>
          //     <a href={project.demoUrl}>Live Demo</a>
          //   </div>
          // </div>

          // <div className="project-card">
          //   <img src={project.imageSrc} alt={project.name} />
          //   <div className="project-info">
          //     <h2>{project.name}</h2>
          //     <p>{project.description}</p>
          //     <ul>
          //       {project.technologies.map((technology) => (
          //         <li key={technology}>{technology}</li>
          //       ))}
          //     </ul>
          //     <div className="project-buttons">
          //       <a
          //         href={project.githubLink}
          //         target="_blank"
          //         rel="noopener noreferrer"
          //       >
          //         Github
          //       </a>
          //       <a
          //         href={project.liveDemoLink}
          //         target="_blank"
          //         rel="noopener noreferrer"
          //       >
          //         Live Demo
          //       </a>
          //     </div>
          //   </div>
          // </div>

          <div key={project.id} className="project">
            <div className="image-container">
              <img src={project.imageSrc} alt={project.name} />
            </div>
            <div className="details-container">
              <div className="project">
                <h2>{project.name}</h2>
              </div>
              <p className="description">{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech) => (
                  <div key={tech} className="technology">
                    {tech}
                  </div>
                ))}
                <div className="links">
                  <a href={project.github}>Github</a>
                  <a href={project.demo}>Demo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
