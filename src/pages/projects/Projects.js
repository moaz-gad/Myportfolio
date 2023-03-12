import React, { useState } from "react"
import Header from "../../components/header/Header"
import "./Projects.css"
import Filtration from "./Filtration"
import imag1 from "../../assets/images/portfolioProfileImage.png"
import clicklink from "../../assets/images/click-link.png"
import basmetHayat from "../../assets/images/Basmet-elhayat.png"
import souqElGomaa from "../../assets/images/souqElGomaa.png"
import digitalVibes from "../../assets/images/digitalVibes.png"
import recoveryHub from "../../assets/images/recovery-hub.png"
import paramount from "../../assets/images/paramount.png"
import infraFit from "../../assets/images/infraFit.png"
import reactPortfolio from "../../assets/images/react-portfolio.png"
import memoryGame from "../../assets/images/memory-game.png"
function Projects(props) {
  const theme = props.theme
  const [data, setData] = useState([
    {
      id: 1,
      label: "Frontend",
      name: "Clicklink",
      description:
        "Job seeker platform to share short video clips with employers.",
      technologies: ["javaScript", "jQuery", "Bootstrap"],
      githubUrl: "",
      demoUrl: "https://clicklink.ae",
      imageSrc: clicklink,
    },
    {
      id: 2,
      label: "Frontend",
      name: "BasmetElHayat",
      description: "Beauty medical center",
      technologies: ["jQuery", "Bootstrap", "javaScript"],
      githubUrl: "",
      demoUrl: "https://basmatalhayat.com/",
      imageSrc: basmetHayat,
    },
    {
      id: 3,
      label: "Frontend",
      name: "SouqElGomaa",
      description: "Online marketplace with broad products and customers",
      technologies: ["javaScript", "Css", "Bootstrap"],
      githubUrl: "",
      demoUrl: "https://souqelgomaa.com/",
      imageSrc: souqElGomaa,
    },
    {
      id: 4,
      label: "WordPress",
      name: "Digital Vibes",
      description: "Marketing Agency",
      technologies: ["WordPress", "Css", "javaScript"],
      githubUrl: "",
      demoUrl: "https://digitalvibesmarketing.com/",
      imageSrc: digitalVibes,
    },
    {
      id: 5,
      label: "WordPress",
      name: "Recovery Hub",
      description: "Medical Center",
      technologies: ["WordPress", "Css", "Php"],
      githubUrl: "",
      demoUrl: "https://recoveryhub.ae",
      imageSrc: recoveryHub,
    },
    {
      id: 6,
      label: "Frontend",
      name: "Paramount",
      description: "Beauty Medical Center",
      technologies: ["Bootstrap", "Css"],
      githubUrl: "https://github.com/user/repo",
      demoUrl: "https://example.com",
      imageSrc: paramount,
    },

    {
      id: 8,
      label: "WordPress",
      name: "infraFit",
      description: "Beauty Medical Center",
      technologies: ["WordPress", "Css", "jQuery"],
      githubUrl: "",
      demoUrl: "https://infrafit.ae/",
      imageSrc: infraFit,
    },
    {
      id: 9,
      label: "React",
      name: "portfolio",
      description: "Personal Portfolio",
      technologies: ["React", "Css"],
      githubUrl: "https://github.com/moaz-gad/portfolio",
      demoUrl: "https://moaz-gad.github.io/portfolio/",
      imageSrc: reactPortfolio,
    },
    {
      id: 10,
      label: "Games",
      name: "Memory game",
      description:
        "Matching game that require players to match similar elements.",
      technologies: ["React", "Css", "React router"],
      githubUrl: "https://github.com/moaz-gad/React-memory-game-project",
      demoUrl: "https://moaz-gad.github.io/React-memory-game-project/",
      imageSrc: memoryGame,
    },
    // more project objects here
  ])

  const [filteredData, setFilteredData] = useState(data)

  const handleFilterChange = (filteredData) => {
    setFilteredData(filteredData)
  }

  return (
    <>
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="projects-main">
        <h1>Some of projects I worked on </h1>
        <Filtration
          data={data}
          setData={setData}
          onFilterChange={handleFilterChange}
        />

        <div className="project-list">
          {filteredData.map((project) => (
            <div key={project.id} className="project">
              <div className="image-container">
                <img src={project.imageSrc} alt={project.name} />
              </div>
              <div className="details-container">
                <div className="project-header">
                  <h2>{project.name}</h2>
                </div>
                <p className="description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="technology">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="links">
                  <a target="_blank" href={project.github}>
                    Github
                  </a>
                  <a target="_blank" href={project.demoUrl}>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
