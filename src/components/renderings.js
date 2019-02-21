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
    altText: 'Gateway at Millbrae Station Render 1',
    caption: ''
  },
  {
    src: require('../assets/images/millbrae2.png'),
    altText: 'Gateway at Millbrae Station Render 2',
    caption: ''
  },
  {
    src: require('../assets/images/millbrae3.png'),
    altText: 'Gateway at Millbrae Station Render 3',
    caption: ''
  },
  {
    src: require('../assets/images/millbrae4.png'),
    altText: 'Gateway at Millbrae Station Render 4',
    caption: ''
  },
  {
    src: require('../assets/images/millbrae5.png'),
    altText: 'Gateway at Millbrae Station Render 5',
    caption: ''
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
            <UncontrolledCarousel interval={false} autoPlay={false} items={items} />
          </article>
        </Col>
      </Row>
    </Container>
    <BgSection bgImageNum={4} />
  </>
)
