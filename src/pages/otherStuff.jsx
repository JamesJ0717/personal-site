import React from "react"
import Layout from "../components/layout"
import { CardDeck, Card, Col, Button } from "react-bootstrap"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  var displayProjects = node => {
    var siteStyle = {
      visibility: node.frontmatter.site == null ? "hidden" : "visible",
    }
    var codeStyle = {
      visibility: node.frontmatter.repo == null ? "hidden" : "visible",
    }
    var footerStyle = {
      visibility:
        node.frontmatter.repo != null || node.frontmatter.site != null
          ? "visible"
          : "hidden",
    }

    var style = {
      fontSize: "12pt",
    }

    return (
      <Col sm={12} md={6} lg={6}>
        <Card key={node.frontmatter.title}>
          <Card.Header>
            <Card.Title>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <p style={style}>{node.frontmatter.date}</p>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{node.excerpt}</Card.Text>
          </Card.Body>
          <Card.Footer style={footerStyle}>
            <Button
              block
              style={codeStyle}
              href={
                "https://www.github.com/JamesJ0717/" + node.frontmatter.repo
              }
            >
              View Code
            </Button>
            <Button
              block
              style={siteStyle}
              href={"https://" + node.frontmatter.site + ".jamesjohnson.io"}
            >
              View Site
            </Button>
          </Card.Footer>
        </Card>
        <p></p>
      </Col>
    )
  }
  return (
    <Layout>
      <h2>Other Stuff</h2>
      <CardDeck>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.parent === "other") {
            return displayProjects(node)
          } else {
            return null
          }
        })}
      </CardDeck>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            repo
            site
            parent
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
