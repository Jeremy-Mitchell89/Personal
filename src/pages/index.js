import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="wrapper">
      <div className="wrapper__left-wrapper">
        <Image />
        <h1>Jeremy Mitchell</h1>
      </div>
      <div className="wrapper__right-wrapper">
        Right Section
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
