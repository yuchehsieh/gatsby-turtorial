/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'tutorial',
    description: 'just some description about our site',
    author: '@murphy',
    twitterUsername: '@murphy_hsieh',
    image: '/image-1.jpeg',
    siteUrl: 'https://admiring-blackwell-5a6d08.netlify.com'
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
        spaceId: process.env.CONTENTFUL_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`
  ]
}
