import { NavLink, Link } from "react-router-dom"
import React from "react"
import "./Header.css"
import DownloadBtn from "./DownloadBtn"

function Header() {
  return (
    <div className="header">
      <div className="my-cv">
        <DownloadBtn />
      </div>
      <div className="side-bar">
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
      </div>
    </div>
  )
}

export default Header
