import React from 'react'
import {
  Container,
  Row,
  Col } from 'reactstrap'
import Form from './form'
import BgSection from './bgSection'

export default () => (
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
    <BgSection bgImageNum={3} />
  </>
)
