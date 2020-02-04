import React from "react"
import SingleTour from "./singleTour"

const ToursComponent = ({ tours }) => {
    console.log(tours);
    return (
      <div>
        this is tours component
        <SingleTour/>
      </div>
    )
}

export default ToursComponent