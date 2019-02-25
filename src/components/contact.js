import React from 'react'
import {
  Container,
  Row,
  Col, } from 'reactstrap'

import FormContact from './formContact'

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
              <h3>Millbrae Station</h3>
              <FormContact />
            </article>
          </main>
        </Col>
      </Row>
    </Container>
  </>
)
