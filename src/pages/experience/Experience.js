import React from "react"
import Header from "../../components/header/Header"
import WorkExperience from "../../components/WorkExperience"
import "./Experience.css"

function Experience(props) {
  const theme = props.theme
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="work-exp">
        <WorkExperience
          company="Digital Vibes"
          jobTitle="Frontend Developer"
          startDate="Sep 2022"
          endDate="Present"
          description={[
            " Created a lot of websites for clients using React/Jquery and Bootstrap.",
            " Used advanced CSS for styling.",
            " Participated in maintaining several sustainable websites.",
            " Gained a lot of knowledge about marketing, campaigns, and promotions; due to the nature of the company's activity.",
          ]}
        />
        <WorkExperience
          company="MTV "
          jobTitle="Frontend/Wordpress Developer"
          startDate="Apr 2022 "
          endDate=" Sep 2022 "
          description={[
            " Worked on designing/maintaining websites, and improving performance.",
            " Dealt with WordPress hooks and rest APIs.",
            " Built custom WordPress themes and plugins.",
            " Converted HTML/CSS code to WordPress pages.",
            " Styled big e-commerce using Bootstrap framework.",
            " Built different e-commerce using Woocommerce.",
          ]}
        />
        <WorkExperience
          company=" Freelance "
          jobTitle=" Wordpress Developer & SEO Specialist"
          startDate="Jan 2017"
          endDate="May 2020"
          description={[
            " Built a CMS website with custom functions and CSS for a tech company.",
            "	Dealt with different plugins and themes.",
            "Improved content for many websites to be SEO friendly.",
          ]}
        />
      </div>
    </div>
  )
}

export default Experience
