import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import BackgroundImage from 'gatsby-background-image'
import favicon from '../assets/images/favicon.ico'

export default props => (
  <StaticQuery
    query={graphql`
      query {
        contentfulAsset(title: { eq: "millbrae5" }) {
          fluid(quality: 100, maxWidth: 2400) {
            src
            sizes
            srcSet
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          {props.isHome ? (
            <>
              <Helmet
                link={[
                  { rel: 'shortcut icon', type: 'image/ico', href: favicon },
                ]}
              >
                <meta charSet="utf-8" />
                <title>Millbrae Station | Calvano Development</title>
                <meta
                  name="description"
                  content="Learn how the Millbrae Station project will revitalize the city through the development of an office building, a boutique hotel, and a retail space."
                />
              </Helmet>
              <BackgroundImage
                Tag="section"
                className={`hero ${props.isHome ? '' : 'not-home-hero'}`}
                fluid={data.contentfulAsset.fluid}
              >
                <div className="content">
                  <img
                    src={require('../assets/images/site-logo.png')}
                    alt="Millbrae Station Logo"
                  />
                  <span>
                    {props.isAdmin ? 'Admin Page' : 'Millbrae Station'}
                  </span>
                </div>
              </BackgroundImage>
            </>
          ) : (
            <div className={`hero ${props.isHome ? '' : 'not-home-hero'}`}>
              <div className="content">
                <img src={require('../assets/images/site-logo.png')} alt="" />
                <span>{props.isAdmin ? 'Admin Page' : 'Millbrae Station'}</span>
              </div>
            </div>
          )}
        </>
      )
    }}
  />
)
