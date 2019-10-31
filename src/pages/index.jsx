import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      if (node.frontmatter.parent === "home") {
        return <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
      } else {
        return null
      }
    })}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            parent
          }
        }
      }
    }
  }
`
