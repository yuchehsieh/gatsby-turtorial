import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {

  const { site: { siteMetadata: { author, title } } } = useStaticQuery(graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }`,
  )

  return (
    <div>
      {/*<h1>author: {data.site.siteMetadata.author}</h1>*/}
      <h1>author: {author}</h1>
      <h1>title: {title}</h1>
    </div>
  )
}

export default Header