import React from "react"
import Layout from "../components/layout"
import Images from "../examples/images"
import SEO from "../components/SEO"

const ImagesPage = () => {
  return (
    <Layout>
      <SEO title="Images"/>
      this is image page
      <Images/>
    </Layout>
  )
}

export default ImagesPage