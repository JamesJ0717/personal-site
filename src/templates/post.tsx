import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import "../components/layout.css"

export default ({ data }) => {
  console.log(data)
  const post: {
    frontmatter: {
      repo: string
      title: string
      date: string
      site: string
    }
    html: string
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date}</h4>
        <ul
          className="p-0"
          style={{
            listStyle: "none",
            margin: `0 auto`,
          }}
        >
          <li>
            <a href={post.frontmatter.repo}>{post.frontmatter.repo}</a>
          </li>
          {post.frontmatter.site !== null ? (
            <li>
              <a href={post.frontmatter.site}>{post.frontmatter.site}</a>
            </li>
          ) : (
            <> </>
          )}
        </ul>
        <hr
          style={{
            height: "1px",
          }}
        ></hr>
        <div
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        site
        repo
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`
