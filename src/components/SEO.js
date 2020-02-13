import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {

  const { site } = useStaticQuery(getSiteMetadata);
  const { siteDesc, siteTitle, siteUrl, image, twitterUsername }  = site.siteMetadata;

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={description|| siteDesc}/>
      <meta name="image" content={image}/>
    </Helmet>
  )
}

const getSiteMetadata = graphql`
  query querySiteMetadata{
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`

export default SEO