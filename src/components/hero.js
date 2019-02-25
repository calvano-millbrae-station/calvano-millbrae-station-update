import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import BackgroundImage from 'gatsby-background-image'
import favicon from '../assets/images/favicon.ico'

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "renderings/millbrae5.webp" }) {
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
        <>
        <Helmet
          link={[
            { rel: 'shortcut icon', type: 'image/ico', href: favicon}
          ]}>
            <meta charSet="utf-8" />
            <title>Millbrae Station | Calvano Development</title>
            <meta name="description" content="Learn how the Millbrae Station project will revitalize the city through the development of an office building, a boutique hotel, and a retail space." />
          </Helmet>
        <BackgroundImage
          Tag="section"
          className={`hero ${props.isHome ? "" : "not-home-hero"}`}
          fluid={imageData}>
          <div className="content">
            <img src={require("../assets/images/site-logo.webp")} alt="Millbrae Station Logo" />
            <span>{props.isAdmin ? "Admin Page" : "Millbrae Station"}</span>
          </div>
        </BackgroundImage>
        </>
      )
    }} />
)
