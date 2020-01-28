import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from '../components/blog.module.css';

class Blog extends Component {
  render() {
    return (
      <Layout>
        <h1 className={styles.title}>This is blog page</h1>
        <div>
          {/*<a href="/">Home Page</a>*/}
          <Link to="/">home page</Link>
        </div>
      </Layout>
    )
  }
}

export default Blog