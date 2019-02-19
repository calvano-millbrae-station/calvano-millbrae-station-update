import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import BgSection from './bgSection'

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date]},
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                dateText
                source
                sourceUrl
              }
              excerpt
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
              {data.allMarkdownRemark.edges.map(({ node }, index) => {
                const { frontmatter, excerpt } = node
                return (
                  <Col md={{ size: 8, offset: 2 }} className="card-wrapper">
                    <article>
                    <Card body>
                      <CardTitle>{frontmatter.title}</CardTitle>
                      <CardText>{excerpt}</CardText>
                      <a href={frontmatter.sourceUrl}>
                        <Button>Go to {frontmatter.source} article</Button>
                      </a>
                    </Card>
                  </article>
                  </Col>
                )
              })}
          </Row>
        </Container>
        <BgSection bgImageNum={1} />
      </>
    )} />
)
