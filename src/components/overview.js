import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import BackgroundImage from 'gatsby-background-image'

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulReasonsToSupport(
          sort: { order: ASC, fields: [updatedAt] }
        ) {
          edges {
            node {
              id
              reasonTitle
              reasonDescription {
                reasonDescription
              }
            }
          }
        }
        sectionContent: allContentfulSectionContent(
          filter: { sectionTitle: { eq: "Overview" } }
          sort: { order: ASC, fields: [createdAt] }
        ) {
          edges {
            node {
              id
              contentHeading
              contentParagraphs {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
        contentfulAsset(title: { eq: "millbrae1" }) {
          fluid(quality: 25, maxWidth: 2400) {
            src
            sizes
            srcSet
          }
        }
      }
    `}
    render={data => (
      <>
        <Container className="overview" id="overview">
          <Row>
            <Col>
              <header>
                <h1>Overview</h1>
              </header>
              <main>
                <article>
                  {data.sectionContent !== null &&
                    data.sectionContent.edges.map(({ node }) => (
                      <>
                        {node.contentHeading !== null && (
                          <h2 className="focus">{node.contentHeading}</h2>
                        )}
                        <div
                          className="overview-paragraphs"
                          dangerouslySetInnerHTML={{
                            __html:
                              node.contentParagraphs.childMarkdownRemark.html,
                          }}
                        />
                      </>
                    ))}

                  <h3>Reasons to support Millbrae Station</h3>
                  <ul>
                    {data.allContentfulReasonsToSupport !== null &&
                      data.allContentfulReasonsToSupport.edges.map(
                        ({ node }, index) => {
                          const { id, reasonTitle } = node
                          const { reasonDescription } = node.reasonDescription
                          return (
                            <li key={`reason-${id}`}>
                              <strong key={id}>{reasonTitle}: </strong>
                              {reasonDescription}
                            </li>
                          )
                        }
                      )}
                  </ul>
                </article>
              </main>
            </Col>
          </Row>
        </Container>
        <BackgroundImage
          Tag="section"
          className="bg-section"
          classId="bg2"
          fluid={data.contentfulAsset.fluid}
        />
      </>
    )}
  />
)
