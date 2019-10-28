import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Card, CardDeck, Button, Col } from "react-bootstrap"

export default ({ data }) => {
  var displayProjects = node => {
    const siteStyle = {
      visibility: node.frontmatter.site == null ? "hidden" : "visible",
    }

    const style = {
      fontSize: "12pt",
    }

    return (
      <Col sm={12} md={6} lg={6}>
        <Card key={node.frontmatter.title}>
          <Card.Header>
            <Card.Title>
              <Link to={"/portfolio/" + node.fields.slug}>
                {node.frontmatter.title}
              </Link>
              <p style={style}>{node.frontmatter.date}</p>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{node.excerpt}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              block
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
      <h2>Portfolio</h2>
      <CardDeck>
        {data.allMarkdownRemark.edges.map(({ node }) => displayProjects(node))}
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
