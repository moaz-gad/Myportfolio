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
    // <nav className={`navbar ${isExpanded ? "expanded" : ""}`}>
    //   {!isExpanded ? (
    //     <div className="menu-icon" onClick={handleMenuClick}>
    //       <i className="fas fa-bars"></i>
    //     </div>
    //   ) : (
    //     <div className="close-icon" onClick={handleMenuClose}>
    //       <i className="fas fa-times"></i>
    //     </div>
    //   )}
    //   <ul
    //     id="header-items"
    //     className={`menu-items ${isExpanded ? "show" : ""}`}
    //   >
    //     <li>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "current-link" : "homei")}
    //         to="/home"
    //         tag={Link}
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "current-link" : "homei")}
    //         to="/projects"
    //         tag={Link}
    //       >
    //         Projects
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "current-link" : "homei")}
    //         to="/experience"
    //         tag={Link}
    //       >
    //         Experience
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "current-link" : "homei")}
    //         to="/education"
    //         tag={Link}
    //       >
    //         Education
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
    <>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" className="menu-icon">
        <i className="fa fa-bars"></i>
      </label>

      <div className="slideout-sidebar">
        <ul>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "current-link" : "homei"
              }
              to="/home"
              tag={Link}
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "current-link" : "homei"
              }
              to="/projects"
              tag={Link}
            >
              Projects
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "current-link" : "homei"
              }
              to="/experience"
              tag={Link}
            >
              Experience
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "current-link" : "homei"
              }
              to="/education"
              tag={Link}
            >
              Education
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                isActive ? "current-link" : "homei"
              }
              to="/contact"
              tag={Link}
            >
              Contact
            </NavLink>
          </li>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" className="menu-close">
            <i className="fa fa-window-close"></i>
          </label>
        </ul>
      </div>
    </>
  )
}

export default Header
