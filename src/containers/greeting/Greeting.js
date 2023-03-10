import React from "react"
import { greeting } from "../../portfolio"
import { Fade } from "react-reveal"
import { style } from "glamor"
import Typewriter from "typewriter-effect"
import FeelingProud from "./FeelingProud"
import WaveHand from "../../assets/images/waving-hand.png"
import "./Greeting.css"
export default function Greeting(props) {
  const theme = props.theme

  const styles = style({
    backgroundColor: "black",
    padding: "15px 30px !important",
    letterSpacing: "0.125rem",
    boxShadow: `0 5px 15px ${theme.accentBright}`,
    ":hover": {
      boxShadow: `none`,
    },
  })

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="greeting-text-container">
              <h3 className="">{greeting.title}</h3>
              <div
                className="greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span className="greeting-text-static">I'm</span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: false,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        `<span style="color: ${theme.accentColor}">${greeting.subTitle}</span>`
                      )

                      .start()
                  }}
                />
              </div>

              <div className="cta-container">
                <div className="btns-container">
                  <div className="portfolio-repo-btn-div">
                    <a
                      {...styles}
                      className="button"
                      rel="noopener noreferrer"
                      href="./#/projects"
                    >
                      My portfolio
                    </a>
                  </div>
                  <div className="portfolio-repo-btn-div">
                    <a
                      {...styles}
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
          </div>
        </div>
      </div>
    </Fade>
  )
}
