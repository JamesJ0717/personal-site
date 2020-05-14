import React from "react"

import Layout from "../components/layout"

import { Card, Col, CardDeck } from "react-bootstrap"
import { Link, graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h2>Blog</h2>
    <span>
      This is where I write about things I find interesting or just want to
      write about.
    </span>
    <hr />
    <CardDeck>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <Col key={node.frontmatter.title} sm={12} md={6} lg={6}>
            <Card key={node.frontmatter.title}>
              <Card.Header>
                <Card.Title>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  <p style={{ fontSize: 12 }}>{node.frontmatter.date}</p>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{node.excerpt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </CardDeck>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { parent: { eq: "blog" } } }) {
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
