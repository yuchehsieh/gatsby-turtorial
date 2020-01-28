import React, { Component } from "react"
import { Link} from 'gatsby';

class Product extends Component {
  render() {
    return (
      <div>
        This is Product page
        <div>
          {/*<a href="/">Home Page</a>*/}
          <Link to="/">home page</Link>
        </div>
      </div>
    )
  }
}

export default Product