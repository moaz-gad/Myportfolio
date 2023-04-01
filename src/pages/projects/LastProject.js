import React from "react"
import "./LastProject.css"
import gptimage from "../../assets/images/gpt.png"
function LastProject() {
  const lastProject = {
    label: "Fullstack",
    name: "ChatGpt",
    heading: "Node-React Chatbot with OpenAI's GPT",
    description:
      "chatbot application that leverages OpenAI's powerful GPT language model to provide conversational responses to user input. I have created a custom user interface to allow for easy interaction with the chatbot, and I have also added additional machine learning models to enhance the bot's capabilities",
    technologies: ["javaScript", "jQuery", "Bootstrap"],
    githubUrl: "",
    demoUrl: "https://clicklink.ae",
    imageSrc: gptimage,
  }

  return (
    <div className="latest-project-container">
      <div className="last-project">
        <h3>My latest project</h3>
        <div className="main">
          <img className="tokenImage" src={lastProject.imageSrc} />
          <p className="project-heading">{lastProject.heading}</p>
          <p className="description">{lastProject.description}</p>
          <div className="tokenInfo">
            <div className="demo">
              <a target="_blank" href={lastProject.demoUrl}>
                Demo
              </a>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>11 days ago</p>
            </div>
          </div>
          <hr />
          <div className="creator">
            <div className="wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/180px-ChatGPT_logo.svg.png"
                alt="Creator"
              />
            </div>
            <p>
              <ins>{lastProject.name}</ins> API
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LastProject
