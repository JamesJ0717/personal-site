import React from "react"
import Layout from "../components/layout"
import { CardDeck, Card, Col, Button, Row } from "react-bootstrap"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  var displayProjects = node => {
    var style = {
      fontSize: "12pt",
    }

    var siteButton, repoButton, footer

    if (node.frontmatter.repo != null || node.frontmatter.site != null) {
      if (node.frontmatter.site != null) {
        siteButton = (
          <Button
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
      <Col key={node.frontmatter.title} sm={12} md={6} lg={6}>
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
          {footer}
        </Card>
        <p></p>
      </Col>
    )
  }

  return (
    <Layout>
      <h2>Other Stuff</h2>
      <hr />
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
