import React, { useState } from "react"
import "./Header.css"
import { NavLink, Link } from "react-router-dom"
function Header() {
  const [showLinks, setShowLinks] = useState(false)

  const handleToggleClick = () => {
    setShowLinks(!showLinks)
  }

  return (
    <nav>
      <div className="menu-icon" onClick={handleToggleClick}>
        <i className={showLinks ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={showLinks ? "show" : ""}>
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
            to="/education"
            tag={Link}
          >
            Education
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
            to="/projects"
            tag={Link}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "current-link" : "homei")}
            to="/contact"
            tag={Link}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
