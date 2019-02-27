import React from "react"
import Waypoint from 'react-waypoint'
import PropTypes from "prop-types"
import Hero from './hero'
import Footer from "./footer"
// import { StaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
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
        <Hero {...this.props} />
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave} />
        {this.props.isHome &&
          <Nav sticky={this.state.stickyNav} />
        }
        {this.props.children}
        <Footer {...this.props} />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
