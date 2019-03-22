import React from "react"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="wrapper">
      <div className="wrapper__left-wrapper">
        <Image />
        <h1 className="header-firstname">
          Jeremy <span className="header-lastname">Mitchell</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
          nullam eget felis eget nunc lobortis. Placerat vestibulum lectus
          mauris ultrices eros in cursus turpis massa. Volutpat odio facilisis
          mauris sit. Turpis egestas pretium aenean pharetra magna ac. Laoreet
          non curabitur gravida arcu ac tortor dignissim convallis. Interdum
          posuere lorem ipsum dolor sit. Faucibus purus in massa tempor nec
          feugiat nisl pretium. Facilisis magna etiam tempor orci eu. At urna
          condimentum mattis pellentesque id nibh. Eget felis eget nunc lobortis
          mattis aliquam faucibus purus. Neque vitae tempus quam pellentesque
          nec nam aliquam sem et. Tellus in metus vulputate eu scelerisque
          felis. Pretium lectus quam id leo in vitae.
        </p>
        <p>
          Amet justo donec enim diam vulputate ut pharetra. Morbi tempus iaculis
          urna id volutpat lacus laoreet. Est ullamcorper eget nulla facilisi.
          Eu tincidunt tortor aliquam nulla facilisi cras. Metus dictum at
          tempor commodo. Elementum sagittis vitae et leo duis. Ultrices mi
          tempus imperdiet nulla malesuada pellentesque elit. Lacus luctus
          accumsan tortor posuere ac ut consequat. Dictum sit amet justo donec
          enim diam vulputate. Nulla aliquet enim tortor at. Pulvinar etiam non
          quam lacus suspendisse faucibus interdum. Ut tristique et egestas quis
          ipsum suspendisse. Tellus cras adipiscing enim eu turpis egestas
          pretium aenean. Non enim praesent elementum facilisis leo vel
          fringilla est. A pellentesque sit amet porttitor eget. Tellus
          elementum sagittis vitae et leo duis ut. Sit amet volutpat consequat
          mauris nunc congue. Massa vitae tortor condimentum lacinia quis vel
          eros.
        </p>
        <p>
          Thanks for checking out my site. Email me at _______ at gmail dot com
          or use the form below if you'd like to chat.
        </p>
        <ContactForm />
      </div>
      <div className="wrapper__right-wrapper">
        <h1 className="header-links">Links</h1>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
