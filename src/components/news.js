import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import BackgroundImage from 'gatsby-background-image'

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulNews(
          sort: { order: DESC, fields: [date]},
        ) {
          edges {
            node {
              id
              title
              date
              source
              sourceUrl
              summary {
                summary
              }
            }
          }
        }
        bgImage: file(relativePath: { eq: "renderings/millbrae5.jpg" }) {
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
        <Container className="news" id="news">
          <Row>
            <Col>
              <main>
                <header>
                  <h1>News and Updates</h1>
                </header>
              </main>
            </Col>
          </Row>
          <Row>
              {data.allContentfulNews.edges.map(({ node }, index) => {
                const { id, title, source, sourceUrl } = node
                const { summary } = node.summary
                return (
                  <Col key={`col-${id}`} md={{ size: 8, offset: 2 }} className="card-wrapper">
                    <article key={`article-${id}`}>
                    <Card key={`card-${id}`} body>
                      <CardTitle key={`title-${id}`}>{title}</CardTitle>
                      <CardText key={`text-${id}`}>{summary}</CardText>
                      <a key={`a-${id}`} href={sourceUrl}>
                        <Button key={`button-${id}`}>Go to {source} article</Button>
                      </a>
                    </Card>
                  </article>
                  </Col>
                )
              })}
          </Row>
        </Container>
        <BackgroundImage
          Tag="section"
          className="bg-section"
          classId="bg5"
          fluid={data.bgImage.childImageSharp.fluid} />
      </>
    )} />
)
