import React from "react"
import { greeting } from "../../portfolio"
import Typewriter from "typewriter-effect"
import "./Greeting.css"
import LastProject from "./../../pages/projects/LastProject"
export default function Greeting(props) {
  const theme = props.theme

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-intro">
        <h3 className="">{greeting.title}</h3>

        <Typewriter
          options={{
            autoStart: true,
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString(
                `<span style="color: white">${greeting.subTitle}</span>`
              )

              .start()
          }}
        />
        <div className="cta-container">
          <div className="btns-container">
            <div className="portfolio-repo-btn-div">
              <a
                className="button"
                rel="noopener noreferrer"
                href="./#/projects"
              >
                My portfolio
              </a>
            </div>
            <div className="portfolio-repo-btn-div">
              <a
                className="button"
                rel="noopener noreferrer"
                href="./#/contact"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="about-me">
            <p>
              or learn more{" "}
              <span>
                <a href="#">about me.</a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <LastProject />
      <div className="spacer"></div>
    </div>
  )
}
