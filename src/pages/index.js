import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>
      Hello, This is our home page
    </h1>
    <div>
      {/*<a href="/blog/">blog page</a>*/}
      <Link to="/blog">blog page</Link>
    </div>
    <div>
      {/*<a href="/product/">product page</a>*/}
      <Link to="/product">product page</Link>
    </div>
  </Layout>
);
