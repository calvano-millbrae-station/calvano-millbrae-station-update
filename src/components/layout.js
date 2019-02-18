import React from "react"
import PropTypes from "prop-types"
import BgSection from '../components/bgSection'
// import { StaticQuery, graphql } from "gatsby"

import Nav from "./nav"
// import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Nav />
    <BgSection bgImageNum={1} isTopBg />
    {children}
    <footer>
      I'm the footer.
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
