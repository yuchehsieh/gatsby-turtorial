import React from "react"
import SingleTour from "./singleTour"
import styles from "../../css/items.module.css"

const ToursComponent = ({ tours }) => {
  console.log(tours)
  return (
    <section className={styles.tours}>
      <h2>our tours</h2>
      <div className={styles.center}>
          {
              tours.map(({node}) => (
                <SingleTour key={node.id} tour={node}/>
              ))
          }
      </div>
    </section>
  )
}

export default ToursComponent