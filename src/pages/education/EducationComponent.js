import React from "react"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Educations from "../../containers/education/Educations"
import Certifications from "../../containers/certifications/Certifications"
import EducationImg from "./EducationImg"
import { Fade } from "react-reveal"
import "./EducationComponent.css"

function Education(props) {
  const theme = props.theme
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Educations theme={props.theme} />

        <Certifications theme={props.theme} />
      </div>
    </div>
  )
}

export default Education
