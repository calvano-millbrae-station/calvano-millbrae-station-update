import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import BgSection from './BgSection'

export default () => (
  <>
    <Container className="news" id="news">
      <Row>
        <Col>
          <main>
            <header>
              <h1>News and Updates</h1>
            </header>
            <article>

            </article>
          </main>
        </Col>
      </Row>
    </Container>
    <BgSection bgImageNum={1} />
  </>
)
