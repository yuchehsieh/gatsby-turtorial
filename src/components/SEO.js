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
       * twitter card setup!! SEE:
       * https://www.gatsbyjs.org/docs/add-seo-component/#seo-component
       **/}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:image:width" content="400" />
      <meta name="twitter:image:height" content="300" />
      {/**
       * facebook card setup!! SEE:
       * https://www.gatsbyjs.org/docs/add-seo-component/#seo-component
       **/}
       <meta property="og:url" content={siteUrl}/>
       <meta property="og:type" content="website"/>
       <meta property="og:title" content={siteTitle}/>
       <meta property="og:description" content={siteDesc}/>
       <meta property="og:image" content={`${siteUrl}${image}`}/>
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