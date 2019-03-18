import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap'

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        sectionContent: allContentfulSectionContent(filter:{sectionTitle:{eq: "Plan"}}, , sort:{order: ASC, fields:[createdAt]}) {
         edges {
           node {
             id
            contentHeading
            contentParagraphs {
              contentParagraphs
            }
           }
         }
       }
       renderings: allContentfulAsset(filter:{file:{contentType: {eq:"image/jpeg"}}}) {
         edges {
           node {
             fluid(quality: 100, maxWidth: 2400) {
              src
            }
           }
         }
       }
       bgImage: file(relativePath: { eq: "renderings/millbrae4.jpg" }) {
         childImageSharp {
           fluid(maxWidth: 2400) {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
       }
      }
    `}
    render={data => {
      const renderingsArray = data.renderings.edges.map(({node}) => node.fluid.src)
      const items = [
        {
          src: renderingsArray[0],
          altText: 'Millbrae Station Render 1',
          caption: ''
        },
        {
          src: renderingsArray[1],
          altText: 'Millbrae Station Render 2',
          caption: ''
        },
        {
          src: renderingsArray[2],
          altText: 'Millbrae Station Render 3',
          caption: ''
        },
        {
          src: renderingsArray[3],
          altText: 'Millbrae Station Render 4',
          caption: ''
        },
        {
          src: renderingsArray[4],
          altText: 'Millbrae Station Render 5',
          caption: ''
        }
      ];
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
                      {data.sectionContent.edges.map(({node}) => (
                        <>
                          <h2 className="focus">{node.contentHeading}</h2>
                          <p>{node.contentParagraphs.contentParagraphs}</p>
                        </>
                      ))
                      }

                      <a href={require('../assets/downloadables/Plan-Final.pdf')} className="pdf-link"><p><strong>Millbrae Station Specific Plan PDF Download</strong></p></a>
                      {/* <p><strong>Millbrae Station Fact Sheet: </strong> <a href={require('../assets/downloadables/Fact-Sheet-Final.pdf')} className="pdf-link">Click here</a></p> */}

                      <h2 className="focus mt-5">Renderings</h2>
                    </article>
                  </main>
                </Col>
              </Row>
            </Container>
            <Container fluid className="carousel-container">
              <UncontrolledCarousel interval={false} autoPlay={false} items={items} />
            </Container>
          </div>
          <BackgroundImage
            Tag="section"
            className="bg-section"
            classId="bg4"
            fluid={data.bgImage.childImageSharp.fluid} />
        </>
      )
    }}
  />
)
