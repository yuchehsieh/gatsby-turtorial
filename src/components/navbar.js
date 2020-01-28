import React, { Component } from "react"
import { Link } from 'gatsby';
// import styles from './navbar.module.scss';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h2>Company</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar