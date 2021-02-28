import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import Contact from "../components/contact"
import Welcome from "../components/welcome"

const Card = ({ node }) => {
  return (
    <div className="card col-5 m-2">
      <div className="card-body">
        <h5 className="card-title">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h5>
        <h6 className="card-subtitle">{node.frontmatter.date}</h6>
        <p className="card-text">{node.excerpt}</p>
      </div>
    </div>
  )
}

const Portfolio = ({ data }) => {
  return (
    <div id="portfolio">
      <h4>Portfolio</h4>
      <p>Here are some of the cool things I've built.</p>
      <div className="d-flex flex-wrap justify-content-around">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.parent === "portfolio")
            return <Card node={node} />
          else return <div></div>
        })}
      </div>
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
