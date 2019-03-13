import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap'
import BgSection from './bgSection'

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
        <BgSection bgImageNum={5} />
      </>
    )} />
)
