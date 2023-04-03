import React from "react"
import "./DegreeCard.css"

function DegreeCard(props) {
  const degree = props.degree
  const theme = props.theme

  return (
    <div className="degree-card">
      <div className="card-body">
        <div className="card-header">
          <div className="card-header">
            <div className="university">
              {degree.logo_path && (
                <div className="card-img">
                  <img
                    src={require(`../../assets/images/${degree.logo_path}`)}
                    alt={degree.alt_name}
                  />
                </div>
              )}
              <h1 className="card-title">{degree.title}</h1>
            </div>
            <div className="card-header-duration">
              <span className="card-duration">{degree.duration}</span>
            </div>
          </div>
        </div>
        <div className="card-content">
          <span className="card-subtitle">{degree.subtitle}</span>
          {degree.descriptions.map((sentence, index) => {
            return (
              <p key={"degree-" + index} className="content-list">
                {sentence}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DegreeCard
