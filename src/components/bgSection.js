import React from 'react'

export default (props) => (
  <div id={props.isTopBg ? 'top' : ''} className={`bg-section bg-image${props.bgImageNum} ${props.isTopBg ? 'first-bg' : ''}`}>
    <div className="bg-mask" />
  </div>
)
