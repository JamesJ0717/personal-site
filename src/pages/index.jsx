import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import Contact from "../components/contact"
import Welcome from "../components/welcome"

const Portfolio = ({ data }) => {
  return (
    <div id="portfolio">
      <h4>Portfolio</h4>
      <p>Here are some of the cool things I've built.</p>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.parent === "portfolio")
          return (
            <>
              <h5>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h5>
              <h6>{node.frontmatter.date}</h6>
              <p>{node.excerpt}</p>
            </>
          )
        else return <div></div>
      })}
    </div>
  )
}

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Welcome />
      <hr />
      <Portfolio data={data} />
      <hr />
      <Contact />
    </Layout>
  )
}

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
