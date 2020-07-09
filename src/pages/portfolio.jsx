import React from "react"
import Layout from "../components/layout"
import { CardDeck, Card, Col, Button, Row } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import "../components/layout.css"

export default ({ data }) => {
  var displayProjects = node => {
    var siteButton, repoButton, footer

    if (node.frontmatter.repo != null || node.frontmatter.site != null) {
      if (node.frontmatter.site != null) {
        siteButton = (
          <Button
            style={{ backgroundColor: "#333", borderWidth: 0 }}
            block
            href={"https://" + node.frontmatter.site + ".jamesjohnson.io"}
          >
            View Site
          </Button>
        )
      } else {
        siteButton = null
      }

      if (node.frontmatter.repo != null) {
        repoButton = (
          <Button
            style={{ backgroundColor: "#333", borderWidth: 0 }}
            block
            href={"https://www.github.com/JamesJ0717/" + node.frontmatter.repo}
          >
            View Code
          </Button>
        )
      } else {
        repoButton = null
      }

      footer = (
        <Card.Footer>
          <Row>
            <Col>{repoButton}</Col>

            <Col>{siteButton}</Col>
          </Row>
        </Card.Footer>
      )
    }

    return (
      <Col
        key={node.frontmatter.title}
        sm={12}
        md={6}
        lg={6}
        style={{ padding: 0 }}
      >
        <Card key={node.frontmatter.title}>
          <Card.Header>
            <Card.Title>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <p style={{ fontSize: "12pt" }}>{node.frontmatter.date}</p>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{node.excerpt}</Card.Text>
          </Card.Body>
          {footer}
        </Card>
        <p></p>
      </Col>
    )
  }

  return (
    <Layout>
      <h2>Portfolio</h2>
      <span>
        These are a lot of projects I have worked on that I feel comfortable
        with sharing.
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
      filter: { frontmatter: { parent: { eq: "portfolio" } } }
    ) {
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
        }
      }
    }
  }
`
