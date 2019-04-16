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
              {/* <BackgroundImage
                Tag="section"
                className={`hero ${props.isHome ? '' : 'not-home-hero'}`}
                fluid={data.contentfulAsset.fluid}
              > */}
              <section
                className={`hero ${props.isHome ? '' : 'not-home-hero'}`}
              >
                <div className="content">
                  <img
                    src={require('../assets/images/header-logo.png')}
                    alt="Calvano Logo"
                    className="header-logo"
                  />
                  <img
                    src={require('../assets/images/site-logo-update.png')}
                    alt="Millbrae Station Logo"
                    className="site-logo"
                  />
                  <img
                    src={require('../assets/images/header-logo.png')}
                    alt="Calvano Logo"
                    className="header-logo"
                  />
                  {/* {props.isAdmin && <span>Admin Page</span>} */}
                </div>
              </section>
              {/* </BackgroundImage> */}
            </>
          ) : (
            <div className={`hero ${props.isHome ? '' : 'not-home-hero'}`}>
              <div className="content">
                <img
                  src={require('../assets/images/header-logo.png')}
                  alt="Calvano Logo"
                />
                <img
                  src={require('../assets/images/site-logo-update.png')}
                  alt="Millbrae Station Logo"
                />
                <img
                  src={require('../assets/images/header-logo.png')}
                  alt="Calvano Logo"
                />
                {/* {props.isAdmin && <span>Admin Page</span>} */}
                {/* <span>{props.isAdmin ? "Admin Page" : "Millbrae Station"}</span> */}
              </div>
            </div>
          )}
        </>
      )
    }}
  />
)
