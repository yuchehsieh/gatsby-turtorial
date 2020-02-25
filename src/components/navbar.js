import React, { Component } from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import styles from './navbar.module.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <h2>Company</h2>
        <ul>
          <li>
            <AniLink fade to="/">Home</AniLink>
          </li>
          <li>
            <AniLink fade to="/blog/">Blog</AniLink>
          </li>
          <li>
            <AniLink fade to="/product">Product</AniLink>
          </li>
          <li>
            <AniLink fade to="/examples">Examples</AniLink>
          </li>
          <li>
            <AniLink fade to="/images">Images</AniLink>
          </li>
          <li>
            <AniLink fade to="/tours">Tours</AniLink>
          </li>
          <li>
            <AniLink fade to="/httpTest">Http Test</AniLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar