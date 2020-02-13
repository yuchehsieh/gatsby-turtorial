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

      {/**
       *
       * twitter card setup!! SEE:
       * https://www.gatsbyjs.org/docs/add-seo-component/#seo-component
       *
       **/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
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