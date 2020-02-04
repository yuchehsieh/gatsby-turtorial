import React from "react";
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { FaMoneyBillWave, FaMap }  from 'react-icons/fa';
import styles from '../css/template.module.css';
import Layout from "../components/layout"

const TourTemplates = (props) => {

  console.log(props);

  return (
    <Layout>
      hello from tour template!
      <Image fluid={props.data.tour.images[0].fluid}/>
    </Layout>
  )
}

/**
 *
 * the $slug is automatically passed through pageContext!
 *
 */

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: {eq: $slug}) {
      name
      journey {
        day
        info
      }
      price
      description {
        description
      }
      country
      slug
      days
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      start(formatString: "dddd MMMMM Do, YYYY")
    }
  }
`

export default TourTemplates