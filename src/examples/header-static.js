import React from "react"
import { graphql, StaticQuery } from "gatsby"

const getData = graphql
  `
      query SecondQuery{
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
 `

const HeaderStatic = () => {

  return (
    <StaticQuery query={getData} render={({site: {siteMetadata: {author, title, description}}}) => {
      return (
        <div>
          <hr />
          <h1>author: {author}</h1>
          <h1>title: {title}</h1>
          <p>{description}</p>
        </div>
      )
    }}
    />
  )

}

export default HeaderStatic