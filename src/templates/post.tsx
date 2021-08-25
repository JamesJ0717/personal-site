import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post: {
    id: string
    title: string
    childMarkdownRemark: {
      excerpt: string
      html: string
    }
    properties: {
      Created: {
        value: Date
      }
      Author: {
        value: {
          name: string
        }
      }
      GitHub_URL: {
        value: string
      }
      Site: {
        value: string
      }
    }
  } = data.notion

  return (
    <Layout>
      <SEO title={post.title} description={post.childMarkdownRemark.excerpt} />
      <article className="min-h-full min-w-full prose">
        <h1>{post.title}</h1>
        <h4>{post.properties.Created.value}</h4>
        <ul className="p-0 space-y-2 list-none">
          <li className="list-none">
            <a href={post.properties.GitHub_URL.value}>
              {post.properties.GitHub_URL.value}
            </a>
          </li>
          {post.properties.Site.value !== null ? (
            <li className="list-none">
              <a href={post.properties.Site.value}>
                {post.properties.Site.value}
              </a>
            </li>
          ) : (
            <> </>
          )}
        </ul>
        <hr />
        <div
          dangerouslySetInnerHTML={{
            __html: post.childMarkdownRemark.html,
          }}
        ></div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    notion(title: { eq: $slug }) {
      id
      title
      childMarkdownRemark {
        excerpt
        html
      }
      properties {
        Created {
          value(formatString: "MMMM DD, YYYY")
        }
        Author {
          value {
            name
          }
        }
        GitHub_URL {
          value
        }
        Site {
          value
        }
      }
    }
  }
`
