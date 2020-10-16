import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"

export default ({ data }) => {
  return (
    <div id="portfolio">
      <h3>Portfolio</h3>
      <p>Here are some of the cool things I've built.</p>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        if (node.frontmatter.parent === "portfolio")
          return (
            <>
              <h4>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h4>
              <h5>{node.frontmatter.date}</h5>
              <p>{node.excerpt}</p>
            </>
          )
        else return <div></div>
      })}
    </div>
  )
}
