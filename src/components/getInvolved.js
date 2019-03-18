import React from 'react'
import {
  Container,
  Row,
  Col } from 'reactstrap'
import Form from './form'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        bgImage: file(relativePath: { eq: "renderings/millbrae3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Container className="get-involved" id="get-involved">
          <Row>
            <Col>
              <header>
                <h1>Get Involved</h1>
              </header>
              <main>
                <article>
                  <Form isContact={false} />
                </article>
              </main>
            </Col>
          </Row>
        </Container>
        <BackgroundImage
          Tag="section"
          className="bg-section"
          classId="bg3"
          fluid={data.bgImage.childImageSharp.fluid} />
      </>
    )} />
)
