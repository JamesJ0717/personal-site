import React from "react"
import { Card, CardDeck, Button } from "react-bootstrap"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

function displayProjects(node) {
  return (
    <div className="col-6">
      <Card key={node.frontmatter.title}>
        <Card.Header>
          <Card.Title>
            <Link to={"/portfolio/" + node.fields.slug}>
              {node.frontmatter.title} <p>{node.frontmatter.date}</p>
            </Link>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>{node.excerpt}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            href={"https://github.com/jamesj0717/" + node.frontmatter.title}
          >
            View Code
          </Button>
          <Button
            href={"https://" + node.frontmatter.title + ".jamesjohnson.io"}
          >
            View Site
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

const portfolio = ({ data }) => {
  return (
    <Layout>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />

      <h1>Portfolio</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <CardDeck>
        {data.allMarkdownRemark.edges.map(({ node }) => displayProjects(node))}
      </CardDeck>
    </Layout>
  )
}

export default portfolio

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
