import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = ({ data }) => {
  const Card = ({ node }) => {
    return (
      <Link
        to={node.fields.slug}
        className="bg-gray-100 shadow-xl border rounded-lg divide-y divide-gray-200 p-4 hover:bg-gray-300 text-black hover:text-black"
      >
        <div className="text-xl">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          <div className="text-base">{node.frontmatter.date}</div>
        </div>
        <div className="text-base">{node.excerpt}</div>
      </Link>
    )
  }
  return (
    <div id="portfolio">
      <div className="text-xl font-semibold">Portfolio</div>
      <div className="text-base">
        Here are some of the cool things I've built.
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 my-2">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if (node.frontmatter.parent === "portfolio")
            return <Card node={node} />
          else return <div></div>
        })}
      </div>
    </div>
  )
}

const Welcome = () => {
  return (
    <div className="space-y-1">
      <div className="text-2xl font-semibold">Hi Everybody</div>
      <div className="text-base">
        Welcome to my website. This is going to be like a blog site, but also
        like a portfolio, but also including <i>posts</i> about things I do or
        am working on that are fun.
      </div>
      <div className="text-xl font-semibold">Me</div>
      <div className="text-base">
        A little bit about me... I am a computer guy. I don't know how I would
        describe myself quickly and in a few words. I like working with
        computers; whether it be software engineering, sysadmining, security
        stuff, networking, or just playing around with a new technology, I
        always have fun. I am currently pursuing Bachelor of Science degrees in
        Computer Science and Network & Computer Security. After graduation, I
        still don't really know what I want to do. All I know is, I want to work
        with computers in some way,{" "}
        <i>one of the aforementioned ways would be ideal</i>.
      </div>

      <div className="text-xl font-semibold">Purpose</div>
      <div className="text-base">
        As I said, this is going to be used like a portfolio. However, I am
        using Gatsby, which is used in a lot of blogs. I{" "}
        <i>
          <b>really</b>
        </i>{" "}
        like how Gatsby has plugins for handling converting{" "}
        <code>Markdown</code> files into pretty <code>HTML</code>. Gatsby is
        built off of React, so I get all of the benefits of reactive components
        and responsiveness from React, while now being able to write all of my
        pages in Markdown and have them displayed nicely as HTML.
      </div>
    </div>
  )
}

const index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid grid-cols-1 space-y-8">
        <div>
          <Welcome />
        </div>
        <hr />
        <div>
          <Portfolio data={data} />
        </div>
      </div>
    </Layout>
  )
}

export default index

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { parent: { nin: "draft" } } }
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
          html
        }
      }
    }
  }
`
