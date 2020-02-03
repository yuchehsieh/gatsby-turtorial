/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'tutorial',
    description: 'just some description about our site',
    author: '@murphy',
    data: ['item1', 'item2', 'item3']
  },
  plugins: [
    `gatsby-plugin-sass`,

    /**
     * the following two packages that gatsby-image need!
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      /**
       *  can point more than 1 folder,
       *  __dirname pointing the folder where the file is located!
       */
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aa6lmvvj10ja`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'coEg-s-TeNE4MIZnenmUau8zdPNpZZQc5LqeJ9dW6qU',
      },
    },
  ]
}
