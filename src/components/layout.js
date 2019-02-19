import React from "react"
import Waypoint from 'react-waypoint'
import PropTypes from "prop-types"
import BgSection from '../components/bgSection'
// import { StaticQuery, graphql } from "gatsby"

import Nav from "./nav"
// import "./layout.css"

class Layout extends React.Component {
  state = {
    stickyNav: false
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }
  render() {
    return (
      <>
        <BgSection isNavSticky={this.state.stickyNav} bgImageNum={1} isTopBg />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave} />
        <Nav sticky={this.state.stickyNav} />
        {this.props.children}
        <footer>
          I'm the footer.
        </footer>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
