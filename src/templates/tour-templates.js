import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { FaMap, FaMoneyBillWave } from "react-icons/fa"
import styles from "../css/template.module.css"
import Layout from "../components/layout"

const TourTemplates = ({ data }) => {

  const { name, price, images, description: { description }, days, start, country, journey } = data.tour

  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => (
              <Image fluid={item.fluid} key={index} alt={name} className={styles.image}/>
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}/>
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon}/>
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <ul className={styles.journey}>
            {journey.map((item, index) => (
              <li key={index}>{item.day}</li>
            ))}
          </ul>
          <Link to="/tours">back to tours</Link>
        </div>
      </section>
    </Layout>
  )
}

/**
 *
 * the $slug is automatically passed through pageContext!
 *
 * query parameter using $
 * mark ! as @required
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