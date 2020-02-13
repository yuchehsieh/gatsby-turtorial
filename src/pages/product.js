import React, { Component } from "react"
import { Link} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/SEO"

class Product extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Product"/>
        <h1>This is Product page</h1>
        <div>
          {/*<a href="/">Home Page</a>*/}
          <Link to="/">home page</Link>
        </div>
      </Layout>
    )
  }
}

export default Product