import { NavLink, Link } from "react-router-dom"
import React, { useState } from "react"
import "./Header.css"

function Header() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMenuClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleMenuClose = () => {
    setIsExpanded(false)
  }

  return (
    <nav className={`navbar ${isExpanded ? "expanded" : ""}`}>
      {!isExpanded ? (
        <div className="menu-icon" onClick={handleMenuClick}>
          <i className="fas fa-bars"></i>
        </div>
      ) : (
        <div className="close-icon" onClick={handleMenuClose}>
          <i className="fas fa-times"></i>
        </div>
      )}
      <ul className={`menu-items ${isExpanded ? "show" : ""}`}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "current-link" : "homei")}
            to="/home"
            tag={Link}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "current-link" : "homei")}
            to="/projects"
            tag={Link}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "current-link" : "homei")}
            to="/experience"
            tag={Link}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "current-link" : "homei")}
            to="/education"
            tag={Link}
          >
            Education
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
