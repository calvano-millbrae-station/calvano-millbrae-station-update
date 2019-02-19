import React from 'react'

export default (props) => (
  <div id={props.isTopBg ? 'top' : ''} className={`bg-section bg-image${props.bgImageNum} ${props.isTopBg ? 'first-bg' : ''} ${props.isNavSticky ? 'nav-sticky' : ''}`}>
    <div className="bg-mask">
      {props.isTopBg &&
        <>
          {/* if we can't use the gateway image */}
          {/* <img src={require('../assets/images/train.png')} alt="" />
          <h1>Gateway</h1>
          <h2>at Millbrae Station</h2> */}\
          <img src={require('../assets/images/gateway-black.png')} alt="" />
        </>
      }
    </div>
  </div>
)
