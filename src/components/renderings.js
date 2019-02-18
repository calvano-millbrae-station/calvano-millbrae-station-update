import React from 'react'
import {
  Container,
  Row,
  Col,
  UncontrolledCarousel } from 'reactstrap'
import BgSection from './bgSection'

const items = [
  {
    src: require('../assets/images/millbrae1.png'),
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: require('../assets/images/millbrae2.png'),
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: require('../assets/images/millbrae3.png'),
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

export default () => (
  <>
    <Container className="renderings" id="renderings">
      <Row>
        <Col>
          <header>
            <h1>Renderings</h1>
          </header>
          <article>
            <UncontrolledCarousel autoPlay={false} items={items} />
          </article>
        </Col>
      </Row>
    </Container>
    <BgSection bgImageNum={5} />
  </>
)
