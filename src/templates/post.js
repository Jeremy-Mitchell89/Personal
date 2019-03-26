import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
  //equivalent to const post = data.markdownRemark
  const { markdownRemark: post } = data
  return (
    <div>
      {/* take title from the frontmatter */}
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
