import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default ({ data }) => {
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
      <article className="min-h-full min-w-full prose">
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date}</h4>
        <ul className="p-0 space-y-2 list-none">
          <li className="list-none">
            <a href={"https://github.com/jamesj0717/" + post.frontmatter.repo}>
              {"https://github.com/jamesj0717/" + post.frontmatter.repo}
            </a>
          </li>
          {post.frontmatter.site !== null ? (
            <li className="list-none">
              <a href={post.frontmatter.site}>{post.frontmatter.site}</a>
            </li>
          ) : (
            <> </>
          )}
        </ul>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        ></div>
      </article>
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
