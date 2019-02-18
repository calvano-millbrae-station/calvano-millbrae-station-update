import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import BgSection from './bgSection'

export default () => (
  <>
    <Container className="overview" id="overview">
      <Row>
        <Col>
          <header>
            <h1>Overview</h1>
          </header>
          <main>
            <article>
              <h2>Connectivity is the source of innovation</h2>
              <p>We envision a new transit-oriented development that will not only improve but benefit the Millbrae community. Our project consists of an eight-story class A office building, a 160-rooms boutique hotel, more than 10,000 square feet (SF) of ground floor promenade retail space and 901 shared below-grade parking spaces. The project will not only revitalize the immediate area but facilitate a critical linkage between the station and Downtown Millbrae. Establishing workspaces next to transit centers avoids workforce relocation while reducing the number of cars trips. As a result, we will facilitate efficiency and accessibility while improving the local community. Thanks to the support of Millbrae residents and local community leaders, we are working hard to make this project a reality.</p>

              <h2>About our project</h2>
              <p>For decades, the City of Millbrae has considered the area directly surrounding Millbrae Station a critical juncture for the future of the city and region. With the introduction of the High-Speed Rail system, Millbrae Station will expand its role as a multi-modal transit operation center, connecting residents and visitors alike to regional job centers and economic powerhouses throughout the Peninsula and state. To that end, in 2017, the Millbrae City Council affirmed that making significant progress to enact the updated Millbrae Station Area Specific Plan (MSASP) was their number one priority for the year. Though the land within Transit Oriented Development Area of the MSASP makes up less than 1.0 percent of the total acreage of the City of Millbrae, its central location and extraordinary potential make it critical to develop responsibly.</p>

              <h2>Reasons to support Millbrae Station</h2>
              <h3>Retail Promenade</h3>
              <p>By creating a retail promenade, residents and commuters will experience an active people friendly paseo bridging the connection between the Downtown and the largest multimodal public transit artery in the Bay Area. The promenade aims to spark opportunities for locals and visitors to shop or mingle and share memories over coffee. The retail promenade will be a community anchoring amenity to the many residents and commuters.</p>

              <h3>Improved Pedestrian, Bike, and Transit Paths</h3>
              <p>The project will not only revitalize the immediate area, but facilitate a critical link between the station and Downtown Millbrae. From the inception, the project was contemplated from the prospective of improving transit connections and facilitation an improved experience for residents and commuters From Millbrae Station’s, commuters will have a clear and safe path through the retail promenade, across El Camino Real to Chadbourne.</p>

              <h3>Crossing at Chadbourne</h3>
              <p>Our research into the area has shed light on the need for a solution to the many tragic pedestrian accidents and fatalities along the El Camino/Millbrae Ave corridor. Our project not only responds to those requests but has incorporated them into the retail promenade, and plants the seed envisioned in the city’s Priority Development Area Specific Plan, (and also in San Mateo County’s, Grand Boulevard Initiative). This signalized, “protected crosswalk” at Chadbourn provides a much-desired and much-needed improvement for the Millbrae community.</p>

              <h3>Increased Revenue – Transit Occupancy Tax</h3>
              <p>The project will generate many positive benefits for the Millbrae community. One of the most significant benefits is that the high-density hotel is estimated to generate approximately $2,000,000 per year in income to city. In addition, the project anticipates a land exchange whereby the city will own the land beneath the hotel and the applicant will land lease it. When the term expires the city will continue to own the hotel land. This creates additional value because the city can monetize their land while retaining ownership.</p>

              <h3>Smart Growth</h3>
              <p>Transportation drives development, and the transportation system we build dictates the shape of real estate. For the past several decades federal Transportation investments have focused primarily on building roads, as the market wanted. However, today’s real estate market is different, with consistently strong demand for homes and offices in walkable urban places — which are in short supply. We believe that our project aligns with the smart growth principles by complying with 9 out of 10 of their commandments.</p>
            </article>
          </main>
        </Col>
      </Row>
    </Container>
    <BgSection bgImageNum={2} />
  </>
)
