import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../components/layout.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date}</h4>
        <ul style={{ listStyle: "none", margin: 0 }}>
          <li>
            <a
              href={
                "https://www.github.com/JamesJ0717/" + post.frontmatter.repo
              }
            >
              https://www.github.com/JamesJ0717/{post.frontmatter.repo}
            </a>
          </li>
          {post.frontmatter.site !== null ? (
            <li>
              <a href={"https://" + post.frontmatter.site + ".jamesjohnson.io"}>
                https://{post.frontmatter.site}.jamesjohnson.io
              </a>
            </li>
          ) : (
            <> </>
          )}
        </ul>

        <hr style={{ height: "1px" }}></hr>

        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        repo
        site
        title
      }
    }
  }
`
