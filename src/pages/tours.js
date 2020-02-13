import React from "react"
import Layout from "../components/layout"
import ToursComponent from "../components/tours/tours"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const Tours = ({ data }) => {
    return (
      <Layout>
        <SEO title="Tours"/>
        hello from tours page
        <ToursComponent tours={data.tours.edges}/>
      </Layout>
    )
}

/**
 *
 * using netlify-webhook to trigger rebuild
 * while contentful's data got changed
 *
 * 1. Netlify > Deploys > Deploy settings > (scroll down) > Build hooks
 * > (get unique url to trigger rebuild)
 *
 * 2. Contentful > Settings > Web hooks(down below API keys) > (right side)
 * > Add Webhook > (paste the unique url)
 */

/**
 *
 * Keep in mind, when going to trigger build, have to set the .env.production
 * or it will failed.
 *
 * Not only in netlify, can specific the url in share-hosting by drag the whole
 * public folder to it
 *
 */

export const getTours = graphql`
    query {
      tours: allContentfulTour {
        totalCount
        edges {
          node {
            name
            price
            slug
            contentful_id
            country
            days
            images {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
`

export default Tours