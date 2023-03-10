import React from "react"
import "./WorkExperience.css"

function WorkExperience(props) {
  return (
    <div className="work-experience">
      <div className="work-experience-header">
        <h2 className="work-experience-company">{props.company}</h2>
        <p className="work-experience-dates">
          {props.startDate} - {props.endDate}
        </p>
      </div>
      <h3 className="work-experience-job-title">{props.jobTitle}</h3>
      <ul className="work-experience-description">
        {props.description.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default WorkExperience
