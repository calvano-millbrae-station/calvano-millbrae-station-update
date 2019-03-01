import React from 'react'

export default (props) => (
    <footer className={props.isHome ? "" : "not-home-footer"}>
      <div className="left-col-content">
        <div className="contact-info">
          <span>900 Bush Street <br />San Francisco, CA 94109</span>
          <span>(415) 922-0449</span>
        </div>
      </div>
      <a href='https://www.calvano.com'><img className="logo" src={require('../assets/images/logo.png')} alt="Calvano Development Logo" /></a>
      <div className="right-col-content">
        <div className="contact-info">
          <a href='mailto: mark@calvano.com'>Mark@Calvano.com</a>
          <div>
            <a href="https://www.calvano.com"><img className="home-icon" src={require('../assets/images/home.png')} alt="Home icon" /></a>
            {/* eslint-disable */}
            <a onClick={props.login}><img className="lock-icon" src={require('../assets/images/lock.png')} alt="Lock icon" /></a>
            {/* eslint-enable */}
          </div>
        </div>
      </div>
    </footer>
)
