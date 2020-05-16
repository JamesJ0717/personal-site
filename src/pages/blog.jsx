import React from "react"
import Layout from "../components/layout"
import { Card, Col, CardDeck } from "react-bootstrap"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  var displayProjects = node => {
    return (
      <Col
        key={node.frontmatter.title}
        sm={12}
        md={6}
        lg={6}
        style={{ padding: 0 }}
      >
        <Card key={node.frontmatter.title} style={{ backgroundColor: "#777" }}>
          <Card.Header>
            <Card.Title>
              <Link style={{ color: "#eeeeee" }} to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
              <p style={{ fontSize: "12pt" }}>{node.frontmatter.date}</p>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{node.excerpt}</Card.Text>
          </Card.Body>
        </Card>
        <p></p>
      </Col>
    )
  }

  return (
    <Layout>
      <h2>Blog</h2>
      <span>
        This is where I write about things I find interesting or things I work
        on that I would not consider projects.
      </span>
      <hr />
      <CardDeck>
        {data.allMarkdownRemark.edges.map(({ node }) => displayProjects(node))}
      </CardDeck>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { parent: { eq: "blog" } } }
    ) {
      edges {
        node {
          frontmatter {
            parent
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
