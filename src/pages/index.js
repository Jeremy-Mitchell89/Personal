import React from "react"
import Layout from "../components/layout"
import PersonalInfo from "../components/personalInfo"
import Links from "../components/Links"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="wrapper">
      <PersonalInfo />
      <Links posts={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
            path
            github
            demo
            backend
            frontend
          }
        }
      }
    }
  }
`

export default IndexPage
