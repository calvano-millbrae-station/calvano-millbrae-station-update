import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"

export default (props) => (
  <Layout>
    <Container className="thanks">
      <Row>
        <Col>
          {/* <h2>Thank you for your {props.isContact ? "message!" : "support!"}</h2> */}
          <h2>Thanks so much!</h2>
          <p><Link to="/">Click here</Link> to return to the Millbrae Station website.</p>
        </Col>
      </Row>
    </Container>
  </Layout>
)
