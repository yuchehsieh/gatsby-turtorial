import React, { Component } from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import { injectIntl } from 'gatsby-plugin-intl'

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
            {/*<AniLink fade to="/httpTest">{this.props.intl.formatMessage({ id: 'Http Test'})}</AniLink>*/}
            Hi
          </li>
          <li>
            <AniLink fade to="/hoda">Hoda</AniLink>
          </li>
          <li>
            <AniLink fade to="/hoda_router">Go to Hoda Router</AniLink>
          </li>
          <li>
            <AniLink fade to="/hoda_router/groups/ABC-12345">Go to Hoda Router with id 'ABC-12345'</AniLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;