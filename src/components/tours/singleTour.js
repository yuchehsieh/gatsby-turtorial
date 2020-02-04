import React from "react"
import { FaMap } from 'react-icons/fa'
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const SingleTour = ({tour}) => {
  const { name, price, country, days, slug, images } = tour;
  const mainImage = images[0].fluid;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt={name}/>
        <Link className={styles.link} to={`/tours/${slug}`}>details</Link>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon}/>
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>price from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

/**
 * PropTypes.string,
 * PropTypes.number,
 * PropTypes.object,
 * PropTypes.array
 *
 * isRequired,
 *
 * PropTypes.arrayOf()
 */

SingleTour.protoTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  })
}

export default SingleTour