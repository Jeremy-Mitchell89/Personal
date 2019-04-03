import React from "react"
import ContactForm from "../components/contactForm"
import Image from "../components/image"
import git from "./icons/GitHub_Logo.png"

const PersonalInfo = () => {
  return (
    <div className="wrapper__left-wrapper">
      <Image />
      <h1 className="header-firstname">
        Jeremy <span className="header-lastname">Mitchell</span>
      </h1>
      <a className="git-link" href="https://github.com/Jeremy-Mitchell89">
        <img src={git} alt="github link" className="icon-github" />
      </a>
      <p>
        Hi. My name is Jeremy Mitchell. I am currently seeking a junior
        javascript developer position in the Minneapolis area. I enjoy building
        things that I can use in my everyday life and learning new technologies
        along the way. I also like to contribute to the open-source community
        wherever I am able.
      </p>
      <p>
        I'm always working on something new, my latest project is called Lift
        Log. It's an app created using Nextjs to help me track my workouts and
        stats and its source can be viewed{" "}
        <a href="https://lift-react-prod.herokuapp.com/">here</a>.
      </p>
      <p>
        Thanks for the visit. Email me at jeremy.mitchell0627@gmail.com or use
        the form below if you would like to chat. If you like this site you can{" "}
        <a href="https://github.com/Jeremy-Mitchell89/Personal">check it out</a>
        . It's written using a React framework named Gatsby.
      </p>
      <ContactForm />
    </div>
  )
}

export default PersonalInfo
