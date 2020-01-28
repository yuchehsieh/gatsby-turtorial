import React from "react"
import Navbar from "./navbar"
import './layout.css';
// import '../sass/layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout