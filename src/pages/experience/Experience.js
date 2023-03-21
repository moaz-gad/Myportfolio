import React from "react"
import Header from "../../components/header/Header"
import WorkExperience from "../../components/WorkExperience"
import "./Experience.css"

function Experience(props) {
  const theme = props.theme
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="work-exp">
        <WorkExperience
          company="Digital Vibes"
          jobTitle="Frontend Developer"
          startDate="Sep 2022"
          endDate="Present"
          description={[
            " Developed and maintained over 10 projects for clients in various industries using React, jQuery, and advanced CSS. ",
            " Collaborated with designers to ensure high-quality designs were implemented into all projects.",
            "  Gained experience in marketing by working with clients in the marketing industry, and incorporating marketing strategies into frontend development projects.",
            " Optimized frontend code and implemented best practices to improve performance and user experience across all projects.",
          ]}
        />
        <WorkExperience
          company="MTV "
          jobTitle="Frontend Developer"
          startDate="Apr 2022 "
          endDate=" Sep 2022 "
          description={[
            " Developed and maintained an e-commerce website using JavaScript and Bootstrap, resulting in a modern and user-friendly interface.",
            " Utilized Bootstrap's responsive design capabilities to ensure the website was optimized for all screen sizes and devices.",
            " Collaborated with the backend development team to ensure seamless integration between frontend and backend code for an efficient and streamlined e-commerce experience.",
          ]}
        />
        <WorkExperience
          company=" Freelance "
          jobTitle=" Fullstack Web Developer & SEO Specialist"
          startDate="Jan 2017"
          endDate="May 2020"
          description={[
            " Developed and deployed multiple web applications using PHP, JavaScript, and other relevant technologies, working on both frontend and backend development.",
            " Utilized SEO strategies to improve website visibility and increase organic traffic for clients, resulting in improved search engine rankings and higher engagement.",
            " Collaborated with clients to understand their business requirements and provided customized web development solutions to meet their needs.",
            " Implemented security measures and best practices to ensure website security and integrity, while optimizing website performance and speed.",
          ]}
        />
      </div>
    </div>
  )
}

export default Experience
