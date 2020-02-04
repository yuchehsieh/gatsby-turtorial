import React from "react"
import Layout from "../components/layout"
import ToursComponent from "../components/tours/tours"
import { graphql } from "gatsby"

const Tours = ({ data }) => {
    return (
      <Layout>
        hello from tours page
        <ToursComponent tours={data.tours.edges}/>
      </Layout>
    )
}

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