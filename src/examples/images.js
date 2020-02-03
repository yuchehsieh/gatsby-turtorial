import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';

import img from '../images/image-3.jpeg';

const getImages = graphql`
  {
    fixed: file(relativePath: {eq: "image-1.jpeg"}) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image-2.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    example: file(relativePath: {eq: "image-2.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

/**
 * maxWidth argument is responsible for what kind of sizes
 * we are generating for Image.
 *
 * not for the actual max width of image,
 * only the width of parent container is responsible for the max width
 * with all the fluid image.
 **/

const Images = () => {

    const data = useStaticQuery(getImages);
    console.log(data);

    return (
      <Wrapper>
        <article>
          <h3>basic image</h3>
          <img src={img} className="basic"/>
        </article>
        <article>
          <h3>fixed image/blur</h3>
          <Image fixed={data.fixed.childImageSharp.fixed}/>
        </article>
        <article>
          <h3>fluid image/svg</h3>
          <Image fluid={data.fluid.childImageSharp.fluid}/>
          <div className="small">
            <Image fluid={data.example.childImageSharp.fluid}/>
          </div>
        </article>
      </Wrapper>
    )
}

const Wrapper = styled.section`
   text-align: center;
   text-transform: uppercase;
   width: 80vw;
   margin: 0 auto 10rem auto;
   .basic { 
    width: 100%;
   }
   .small {
    width: 200px;
   }
   article {
    border: 3px solid red;
    padding: 1rem 0;
   }
   @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
   }
`

export default Images