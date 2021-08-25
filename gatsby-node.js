const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Notion`) {
    console.log(node)
    const slug = createFilePath({
      node: node,
      getNode,
      basePath: "/portfolio",
    })
    createNodeField({
      node: node.markdownString,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allNotion(
        filter: { properties: { Status: { value: { name: { eq: "Done" } } } } }
        sort: { fields: properties___Created___value, order: DESC }
      ) {
        nodes {
          title
        }
      }
    }
  `)
  result.data.allNotion.nodes.map((node) => {
    console.log(`node.title`, node.title)
    createPage({
      path: node.title,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.title,
      },
    })
  })
}
