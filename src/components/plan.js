import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap'

export default props => (
  <StaticQuery
    query={graphql`
      query {
        sectionContent: allContentfulSectionContent(
          filter: { sectionTitle: { eq: "Plan" } }
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
        renderings: allContentfulAsset(sort: { order: ASC, fields: [title] }) {
          edges {
            node {
              fluid(quality: 25, maxWidth: 2400) {
                src
                sizes
                srcSet
              }
            }
          }
        }
      }
    `}
    render={data => {
      const items = data.renderings.edges.map(({ node }, index) => {
        return {
          src: node.fluid.src,
          altText: `Millbrae Station Render ${index + 1}`,
          caption: '',
        }
      })
      console.log('items: ', items)
      return (
        <>
          <div id="plan">
            <Container className="plan mb-0 pb-0">
              <Row>
                <Col>
                  <header>
                    <h1>Plan and Renderings</h1>
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
                                  node.contentParagraphs.childMarkdownRemark
                                    .html,
                              }}
                            />
                          </>
                        ))}

                      {/* <a
                        href={require('../assets/downloadables/Plan-Final.pdf')}
                        className="pdf-link"
                      >
                        <p>
                          <strong>
                            Millbrae Station Specific Plan PDF Download
                          </strong>
                        </p>
                      </a> */}
                      {/* <p><strong>Millbrae Station Fact Sheet: </strong> <a href={require('../assets/downloadables/Fact-Sheet-Final.pdf')} className="pdf-link">Click here</a></p> */}

                      <h2 className="focus mt-5">Renderings</h2>
                    </article>
                  </main>
                </Col>
              </Row>
            </Container>
            <Container fluid className="carousel-container">
              <UncontrolledCarousel
                interval={false}
                autoPlay={false}
                items={items}
              />
            </Container>
          </div>
          <BackgroundImage
            Tag="section"
            className="bg-section"
            classId="bg4"
            fluid={data.renderings.edges[2].node.fluid}
          />
        </>
      )
    }}
  />
)
