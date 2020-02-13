import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"
import StyledHero from "../components/styledHero"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={"Home"} description={"this is home page's description"}/>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <h1 className="title">
          Hello, This is our home page
        </h1>
        <h1 className="title">
          Another heading
        </h1>
      </StyledHero>


      <div>
        {/*<a href="/blog/">blog page</a>*/}
        <Link to="/blog">blog page</Link>
      </div>
      <div>
        {/*<a href="/product/">product page</a>*/}
        <Link to="/product">product page</Link>
      </div>
      <Button>STYLED COMPONENT</Button>
    </Layout>
  )
};

export const getDefaultBcg = graphql`
  {
    defaultBcg: file(relativePath: {eq: "image-1.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
