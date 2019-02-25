import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "millbrae5.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.hero.childImageSharp.fluid
      return (
        // <div className={`hero ${props.isHome ? "" : "not-home-hero"}`}>
        //   <div className="content">
        //     <img src={require("../assets/images/millbrae-logo.png")} alt="" />
        //     <span>{props.isAdmin ? "Admin Page" : "Millbrae Station"}</span>
        //   </div>
        // </div>
        <BackgroundImage
          Tag="section"
          className={`hero ${props.isHome ? "" : "not-home-hero"}`}
          fluid={imageData}>
          <div className="content">
            <img src={require("../assets/images/millbrae-logo.png")} alt="" />
            <span>{props.isAdmin ? "Admin Page" : "Millbrae Station"}</span>
          </div>
        </BackgroundImage>
      )
    }} />
)
