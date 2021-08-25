module.exports = {
  siteMetadata: {
    title: `James Johnson`,
    description: `My Personal Site for showing off what I am working on.`,
    author: `@jamesj_dev`,
  },
  proxy: {
    prefix: "/admin",
    url: "http://localhost:3000",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `James Johnson`,
        short_name: `James Johnson`,
        start_url: `/`,
        background_color: `#838383`,
        theme_color: `#838383`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `mdpages`,
    //     path: `${__dirname}/src/mdpages`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_9yHKUSigfRNwHFLKxeosuXF0FKr9LuF4K4mO2VOMann`,
        databaseId: `e16af016f05f4af2891a171c4b1372b8`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
