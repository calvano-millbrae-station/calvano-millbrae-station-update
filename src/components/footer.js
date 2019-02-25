import React from 'react'

export default (props) => (
    <footer className={props.isHome ? "" : "not-home-footer"}>
      <a href='https://www.calvano.com'><img className="logo" src={require('../assets/images/logo.png')} alt="" /></a>
      <div className="footer-right-col">
        <div className="contact-info">
          <span>900 Bush St, San Francisco, CA 94109</span>
          <a href='mailto: mark@calvano.com'>Mark@Calvano.com</a>
          <span>(415) 922-0449</span>
          <a href="https://www.calvano.com"><img className="home-icon" src={require('../assets/images/home.png')} alt="" /></a>
          {/* eslint-disable */}
          <a onClick={props.login}><img className="lock-icon" src={require('../assets/images/lock.png')} alt="" /></a>
          {/* eslint-enable */}
        </div>
      </div>
    </footer>
)
