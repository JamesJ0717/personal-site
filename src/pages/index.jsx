import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { graphql } from "gatsby"
import Portfolio from "../components/portfolio"
import Contact from "./contact"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      if (node.frontmatter.parent === "home")
        return (
          <div id="me" dangerouslySetInnerHTML={{ __html: node.html }}></div>
        )
      else return <></>
    })}
    <Portfolio data={data} />
    <Contact />
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
