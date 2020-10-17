import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"

export default ({ data }) => {
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
