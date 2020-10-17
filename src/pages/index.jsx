import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

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
    <hr />
    <Portfolio data={data} />
    <hr />
    <Contact />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
