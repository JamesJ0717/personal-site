import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import Welcome from "../components/welcome"

const Card = ({ node }) => {
  return (
    <Link
      to={node.fields.slug}
      className="bg-gray-100 shadow-xl border rounded-lg divide-y divide-gray-200 p-4 hover:bg-gray-300 text-black hover:text-black"
    >
      <div className="text-xl">
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        <div className="text-base">{node.frontmatter.date}</div>
      </div>
      <div className="text-base">{node.excerpt}</div>
    </Link>
  )
}

const Portfolio = ({ data }) => {
  return (
    <div id="portfolio">
      <div className="text-xl">Portfolio</div>
      <div className="text-base">
        Here are some of the cool things I've built.
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 my-2">
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
