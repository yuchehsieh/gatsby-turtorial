import React from "react";
import {graphql} from 'gatsby';
import HeaderHooks from '../examples/header-hooks';
import HeaderStatic from "../examples/header-static"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const Examples = (props) => {
  console.log(props);
  return (
    <Layout>
      <SEO title="Examples"/>
      examples page
      <HeaderHooks/>
      <HeaderStatic />
      <hr />
      <h4>Page Query Result: </h4>
      <p>{props.data.site.siteMetadata.description}</p>

    </Layout>
  )
}

export const getData = graphql
  `
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
 `

export default Examples;