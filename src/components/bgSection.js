import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default (props) => (
  <BackgroundImage
    Tag="section"
    className="bg-section"
    classId="bg"
    fluid={props.imageData} />
)
