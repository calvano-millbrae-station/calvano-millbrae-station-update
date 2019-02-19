import React from 'react'
import {
  Container,
  Row,
  Col, } from 'reactstrap'

import Form from './form'

export default () => (
  <>
    <Container className="contact-us" id="contact-us">
      <Row>
        <Col>
          <header>
            <h1>Contact Us</h1>
          </header>
          <main>
            <article>
              <Form isContact />
            </article>
          </main>
        </Col>
      </Row>
    </Container>
  </>
)
