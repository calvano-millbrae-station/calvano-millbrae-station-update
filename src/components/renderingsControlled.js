import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  // Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption } from 'reactstrap'

import BgSection from './bgSection'

const items = [
  {
    src: require('../assets/images/millbrae1.png'),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: require('../assets/images/millbrae2.png'),
    altText: 'Slide 2',
    caption: 'Slide 2'
  }
]

export default class extends Component {
  state = { activeIndex: 0 }

  onExiting = () => this.animating = true

  onExited = () => this.animating = false

  next = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  // goToIndex = newIndex => e => {
  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    return (
      <>
        <Container className="renderings" id="renderings">
          <Row>
            <Col>
              <header>
                <h1>Renderings</h1>
              </header>
              <main>
                <article>
                  <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                  </Carousel>
                </article>
              </main>
            </Col>
          </Row>
        </Container>
        <BgSection bgImageNum={5} />
      </>
    )
  }
}
