import React from "react"

const Links = props => {
  return (
    <div className="wrapper__right-wrapper">
      <h1 className="header-links">Links</h1>
      {props.posts.map(post => {
        return (
          <div key={post.node.id}>
            {console.log(post.node.frontmatter)}
            <h3 className="link-title">{post.node.frontmatter.title}</h3>
            <i className="link-date">{post.node.frontmatter.date}</i>
            <p className="link-description">
              {post.node.frontmatter.description}
            </p>
            <i className="fas fa-external-link-alt" />
            <a className="link-post" href={post.node.frontmatter.path}>
              View Post
            </a>

            {post.node.frontmatter.github ? (
              <>
                <i className="fas fa-external-link-alt" />
                <a className="link-github" href={post.node.frontmatter.github}>
                  View on Github
                </a>
              </>
            ) : null}

            {post.node.frontmatter.demo ? (
              <div>
                <i className="fas fa-external-link-alt" />
                <a className="link-github" href={post.node.frontmatter.demo}>
                  View live demo
                </a>
              </div>
            ) : null}
            {post.node.frontmatter.backend ? (
              <div>
                <i className="fas fa-external-link-alt" />
                <a className="link-github" href={post.node.frontmatter.backend}>
                  View Backend on Github
                </a>
              </div>
            ) : null}
            {post.node.frontmatter.frontend ? (
              <div>
                <i className="fas fa-external-link-alt" />
                <a
                  className="link-github"
                  href={post.node.frontmatter.frontend}
                >
                  View Frontend on Github
                </a>
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Links
