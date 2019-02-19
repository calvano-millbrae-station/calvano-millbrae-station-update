import React, { Component } from 'react'
// import { Link } from "gatsby"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import Scrollspy from 'react-scrollspy'
import Scroll from './scroll'

import logo from '../assets/images/logo.png'

export default (props) => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={[
        // 'top',
        'overview',
        'get-involved',
        'plan',
        'renderings',
        'news',
        'contact-us',
      ]}
      currentClassName="is-active"
      offset={250}
    >
      {/* eslint-disable */}
      <li>
        <Scroll type="id" element="overview" offset={-45}>
          <a href="#">
            <a href="#">Overview</a>
          </a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="get-involved" offset={-45}>
          <a href="#">Get Involved</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="plan" offset={-45}>
          <a href="#">Plan</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="renderings" offset={-45}>
          <a href="#">Renderings</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="news" offset={-45}>
          <a href="#">News</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="contact-us" offset={-45}>
          <a href="#">Contact Us</a>
        </Scroll>
      </li>
      {/* eslint-enable */}
    </Scrollspy>
  </nav>
)
