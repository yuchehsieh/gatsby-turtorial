import React, { Component } from "react"
import { Link } from "gatsby"

class Blog extends Component {
  render() {
    return (
      <div>
        This is blog page
        <div>
          {/*<a href="/">Home Page</a>*/}
          <Link to="/">home page</Link>
        </div>
      </div>
    )
  }
}

export default Blog