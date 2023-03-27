import React, { useState } from "react"
import Header from "../../components/header/Header"
import "./Projects.css"
import Filtration from "./Filtration"
import clicklink from "../../assets/images/click-link.png"
import basmetHayat from "../../assets/images/Basmet-elhayat.png"
import souqElGomaa from "../../assets/images/souqElGomaa.png"
import digitalVibes from "../../assets/images/digitalVibes.png"
import recoveryHub from "../../assets/images/recovery-hub.png"
import paramount from "../../assets/images/paramount.png"
import infraFit from "../../assets/images/infraFit.png"
import reactPortfolio from "../../assets/images/react-portfolio.png"
import memoryGame from "../../assets/images/memory-game.png"
import toDoList from "../../assets/images/To-Do-List.png"
function Projects(props) {
  const theme = props.theme
  const [data, setData] = useState([
    {
      id: 1,
      label: "Frontend",
      name: "Clicklink",
      heading: "Job-seeking platform",
      description:
        "Job seeker platform to share short video clips with employers.        I contributed to this project by converting the UI design into a user-friendly format that fulfills the desired objectives.",
      technologies: ["javaScript", "jQuery", "Bootstrap"],
      githubUrl: "",
      demoUrl: "https://clicklink.ae",
      imageSrc: clicklink,
    },
    {
      id: 2,
      label: "Frontend",
      name: "BasmetElHayat",
      heading: "Beauty medical center",
      description:
        "I helped enhance the performance and resolve front-end issues for a United Arab Emirates-based beauty, treatment, and cosmetic dentistry center.",
      technologies: ["jQuery", "Bootstrap", "javaScript"],
      githubUrl: "",
      demoUrl: "https://basmatalhayat.com/",
      imageSrc: basmetHayat,
    },
    {
      id: 3,
      label: "Frontend",
      name: "SouqElGomaa",
      heading: "Online Marketplace",
      description:
        "I assisted in enhancing the front-end and overall website performance for an Egyptian online store offering a wide range of products. During the project, I utilized Bootstrap to rectify design flaws and leveraged AJAX to improve the search functionality.",
      technologies: ["javaScript", "Css", "Bootstrap"],
      githubUrl: "",
      demoUrl: "https://souqelgomaa.com/",
      imageSrc: souqElGomaa,
    },
    {
      id: 4,
      label: "WordPress",
      name: "Digital Vibes",
      heading: "Marketing Agency",
      description:
        "I created a custom-designed WordPress website for an e-marketing company, incorporating custom widgets and utilizing JavaScript and CSS modifications to align with the UI design.",
      technologies: ["WordPress", "Css", "javaScript"],
      githubUrl: "",
      demoUrl: "https://digitalvibesmarketing.com/",
      imageSrc: digitalVibes,
    },
    {
      id: 5,
      label: "WordPress",
      name: "Recovery Hub",
      heading: "Medical Center",
      description:
        "I developed a medical center specializing in cosmetic and physiotherapy services from the ground up, adhering to the UI design. In addition, I incorporated customized JavaScript and CSS codes to enhance its functionality and appearance.",
      technologies: ["WordPress", "Css", "Php"],
      githubUrl: "",
      demoUrl: "https://recoveryhub.ae",
      imageSrc: recoveryHub,
    },
    {
      id: 6,
      label: "Frontend",
      name: "Paramount",
      heading: "Beauty Medical Center",
      description:
        "I played a role in developing the front-end and optimizing the codebase for a medical and cosmetic center. Furthermore, I integrated a patient appointment booking form to streamline the booking process.",
      technologies: ["Bootstrap", "Css"],
      githubUrl: "https://github.com/user/repo",
      demoUrl: "https://paramountmedicalcenter.ae/",
      imageSrc: paramount,
    },

    {
      id: 8,
      label: "WordPress",
      name: "infraFit",
      heading: "Beauty Medical Center",
      description:
        "I performed a complete redesign of a sizable medical center's website in the Emirates, achieving significant performance enhancements while also resolving various front-end issues.",
      technologies: ["WordPress", "Css", "jQuery"],
      githubUrl: "",
      demoUrl: "https://infrafit.ae/",
      imageSrc: infraFit,
    },
    {
      id: 9,
      label: "React",
      name: "portfolio",
      heading: "Personal Portfolio",
      description:
        "A portfolio website created using React to exhibit the past works of web developers and designers.",
      technologies: ["React", "Css"],
      githubUrl: "https://github.com/moaz-gad/portfolio",
      demoUrl: "https://moaz-gad.github.io/portfolio/",
      imageSrc: reactPortfolio,
    },
    {
      id: 10,
      label: "Games",
      name: "Memory",
      heading: "Simple Memory Game",
      description:
        "The memory game is a basic application developed with React and styled using CSS.",
      technologies: ["React", "Css", "React router"],
      githubUrl: "https://github.com/moaz-gad/React-memory-game-project",
      demoUrl: "https://moaz-gad.github.io/React-memory-game-project/",
      imageSrc: memoryGame,
    },
    {
      id: 11,
      label: "React",
      name: "To DO List",
      heading: "Simple To-do Application",
      description:
        "This is a relatively simple task that involves executing the four fundamental CRUD operations, namely Create, Read, Update, and Delete.",
      technologies: ["React", "Css"],
      githubUrl: "https://github.com/moaz-gad/To-Do-List/",
      demoUrl: "https://moaz-gad.github.io/To-Do-List/",
      imageSrc: toDoList,
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
      <Filtration
        data={data}
        setData={setData}
        onFilterChange={handleFilterChange}
      />
      <div className="projects-wrapper">
        {filteredData.map((project, index) => (
          <div
            key={project.id}
            className={index % 2 === 0 ? "blog-card" : "blog-card alt"}
          >
            <div className="meta">
              <div
                className="photo"
                style={{ backgroundImage: `url(${project.imageSrc})` }}
              ></div>
              <ul className="details">
                <li className="tags">
                  <div className="technologies">
                    {project.technologies.map((tech) => (
                      <div key={tech} className="technology">
                        {tech}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            <div className="description">
              <h1>{project.name}</h1>
              <h2>{project.heading}</h2>
              <p>{project.description}</p>
              <div className="links">
                <a target="_blank" href={project.githubUrl}>
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
    </>
  )
}

export default Projects
