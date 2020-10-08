import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { graphql } from "gatsby"
import Portfolio from "../components/portfolio"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      if (node.frontmatter.parent === "home")
        return <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
      else return <div></div>
    })}
    <Portfolio data={data} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            parent
            repo
            site
            title
          }
          fields {
            slug
          }
          excerpt
          html
        }
      }
    }
  }
`
