import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>

    <p>
      Hello everyone. Welcome to my website! This site is going to be more than
      the traditional Software Developer's website. I do not want it to only be
      for my portfolio, but I want to be able to use this as a place to host my
      projects. Of course, my portfolio with all of my projects are available
      here as they should.{" "}
    </p>

    <h2>A little blurb about me</h2>

    <p>
      If you want to learn more about me, please check out the about me page,
      but just as a quick 'get to know me' sort of thing, this is me. I am a
      Software Developer. I do not know if I would call myself a front-end,
      back-end, full-stack, or some other restrictive title like those. I love
      to write code. Plain and simple. I enjoy designing the front-end of a
      webpage, although being color blind makes it a challenge! The feeling of
      accomplishment after linking the front-end to the back-end and
      successfully querying the database is unexplainable to a non-developer.
      And I know I want to do this forever.{" "}
    </p>

    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <h3
            css={css`
              margin-bottom: ;
            `}
          >
            {node.frontmatter.title}{" "}
            <span
              css={css`
                color: #bbb;
              `}
            >
              - {node.frontmatter.date}
            </span>
          </h3>
        </Link>
        <p>{node.excerpt}</p>
      </div>
    ))}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

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
