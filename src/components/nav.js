import React, { Component } from 'react'
// import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

import logo from '../assets/images/logo.png'

export default class extends Component {
  state = {
    isOpen: false
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar dark fixed="top" expand="md">
        <Scrollspy
          items={[
            'top',
            'overview',
            'get-involved',
            'register-for-updates',
            'plan',
            'renderings',
            'news',
            'contact-us'
            ]}
          currentClassName="is-active" offset={-300}>
          {/* eslint-disable */}
          <Scroll type="id" element="top">
            <a href="#"><img src={logo} alt="" /></a>
          </Scroll>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Scroll type="id" element="overview" offset={-110}>
                  <a href="#">Overview</a>
                </Scroll>
              </NavItem>
              <NavItem>
                <Scroll type="id" element="get-involved" offset={-110}>
                  <a href="#">Get Involved</a>
                </Scroll>
              </NavItem>
              {/* <NavItem>
                <Scroll type="id" element="register-for-updates" offset={-110}>
                  <a href="#">Register for Updates</a>
                </Scroll>
              </NavItem> */}
              <NavItem>
                <Scroll type="id" element="plan" offset={-110}>
                  <a href="#">Plan</a>
                </Scroll>
              </NavItem>
              <NavItem>
                <Scroll type="id" element="renderings" offset={-110}>
                  <a href="#">Renderings</a>
                </Scroll>
              </NavItem>
              <NavItem>
                <Scroll type="id" element="news" offset={-110}>
                  <a href="#">News</a>
                </Scroll>
              </NavItem>
              <NavItem>
                <Scroll type="id" element="contact-us" offset={-110}>
                  <a href="#">Contact Us</a>
                </Scroll>
              </NavItem>
              {/* eslint-enable */}
            </Nav>
          </Collapse>
        </Scrollspy>
      </Navbar>
    )
  }
}
