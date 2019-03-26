import React from "react"
import ContactForm from "../components/contactForm"
import Image from "../components/image"

const PersonalInfo = () => {
  return (
    <div className="wrapper__left-wrapper">
      <Image />
      <h1 className="header-firstname">
        Jeremy <span className="header-lastname">Mitchell</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget
        felis eget nunc lobortis. Placerat vestibulum lectus mauris ultrices
        eros in cursus turpis massa. Volutpat odio facilisis mauris sit. Turpis
      </p>
      <p>
        Amet justo donec enim diam vulputate ut pharetra. Morbi tempus iaculis
        urna id volutpat lacus laoreet. Est ullamcorper eget nulla facilisi. Eu
        tincidunt tortor aliquam nulla facilisi cras. Metus dictum at tempor
        commodo. Elementum sagittis vitae et leo duis. Ultrices mi tempus
        imperdiet nulla malesuada pellentesque elit. Lacus luctus accumsan
        tortor posuere ac ut consequat. Dictum sit amet justo donec enim diam
      </p>
      <p>
        Thanks for checking out my site. Email me at _______ at gmail dot com or
        use the form below if you'd like to chat.
      </p>
      <ContactForm />
    </div>
  )
}

export default PersonalInfo
