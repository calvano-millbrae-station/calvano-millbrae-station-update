import React from 'react'
import { Container, Row, Col, UncontrolledCarousel } from 'reactstrap'

import BgSection from './bgSection'

const items = [
  {
    src: require('../assets/images/renderings/millbrae1.webp'),
    altText: 'Millbrae Station Render 1',
    caption: ''
  },
  {
    src: require('../assets/images/renderings/millbrae2.webp'),
    altText: 'Millbrae Station Render 2',
    caption: ''
  },
  {
    src: require('../assets/images/renderings/millbrae3.webp'),
    altText: 'Millbrae Station Render 3',
    caption: ''
  },
  {
    src: require('../assets/images/renderings/millbrae4.webp'),
    altText: 'Millbrae Station Render 4',
    caption: ''
  },
  {
    src: require('../assets/images/renderings/millbrae5.webp'),
    altText: 'Millbrae Station Render 5',
    caption: ''
  }
];

export default () => (
  <>
    <Container className="plan mb-0 pb-0" id="plan">
      <Row>
        <Col>
          <header>
            <h1>Plan and Renderings</h1>
          </header>
          <main>
            <article>
              <h2 className="focus">About our project</h2>
              <p>For decades, the City of Millbrae has considered the area directly surrounding Millbrae Station a critical juncture for the future of the city and region. With the introduction of the High-Speed Rail system, Millbrae Station will expand its role as a multi-modal transit operation center, connecting residents and visitors alike to regional job centers and economic powerhouses throughout the Peninsula and state. To that end, in 2017, the Millbrae City Council affirmed that making significant progress to enact the updated Millbrae Station Area Specific Plan (MSASP) was their number one priority for the year. Though the land within Transit Oriented Development Area of the MSASP makes up less than 1.0 percent of the total acreage of the City of Millbrae, its central location and extraordinary potential make it critical to develop responsibly.</p>

              <a href={require('../assets/downloadables/Plan-Final.pdf')} className="pdf-link"><p><strong>Millbrae Station Specific Plan PDF Download</strong></p></a>
              {/* <p><strong>Millbrae Station Fact Sheet: </strong> <a href={require('../assets/downloadables/Fact-Sheet-Final.pdf')} className="pdf-link">Click here</a></p> */}

              <h2 className="focus mt-5">Renderings</h2>
            </article>
          </main>
        </Col>
      </Row>
    </Container>
    <Container fluid className="carousel-container">
      <UncontrolledCarousel interval={false} autoPlay={false} items={items} />
    </Container>
    <BgSection bgImageNum={4} />
  </>
)
