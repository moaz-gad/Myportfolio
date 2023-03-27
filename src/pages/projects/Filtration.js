import React, { useState } from "react"
import "./Filtration.css"
const Filtration = ({ data, onFilterChange }) => {
  const [activeLabel, setActiveLabel] = useState(null)

  const labels = [...new Set(data.map((element) => element.label))]

  const handleClick = (label) => {
    setActiveLabel(label)
    const filteredData = data.filter((element) => element.label === label)
    onFilterChange(filteredData)
  }
  const animateButton = (e) => {
    e.preventDefault()
    // reset animation
    e.target.classList.remove("animate")
    e.target.classList.add("animate")
    setTimeout(() => {
      e.target.classList.remove("animate")
    }, 900)
  }

  return (
    <div className="filtration">
      <div className="labels">
        {labels.map((label, index) => (
          <button
            key={index}
            className={activeLabel === label ? "active" : ""}
            onClick={(e) => {
              animateButton(e)
              setTimeout(() => handleClick(label), 600)
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filtration
