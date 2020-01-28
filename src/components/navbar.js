import React, { Component } from "react"
import { Link } from 'gatsby';

class Navbar extends Component {
  render() {
    return (
      <nav>
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