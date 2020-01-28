import React from "react"
import Navbar from "./navbar"
import './layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout