import React from "react"
import { Fade, Flip } from "react-reveal"
import "./DegreeCard.css"

function DegreeCard(props) {
  const degree = props.degree
  const theme = props.theme

  return (
    <div className="degree-card">
      {degree.logo_path && (
        <Flip left duration={2000}>
          <div className="card-img">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              src={require(`../../assets/images/${degree.logo_path}`).default}
              alt={degree.alt_name}
            />
          </div>
        </Flip>
      )}
      <Fade right duration={2000} distance="40px">
        <div
          className="card-body"
          style={{ backgroundColor: theme.themeColor }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="card-header-title">
              <span className="card-title">{degree.title}</span>
            </div>
            <div className="card-header-duration">
              <span className="card-duration">{degree.duration}</span>
            </div>
          </div>
          <div className="card-content" style={{ color: theme.text }}>
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
      </Fade>
    </div>
  )
}

export default DegreeCard
