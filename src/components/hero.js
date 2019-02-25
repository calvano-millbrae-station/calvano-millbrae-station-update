import React from 'react'

export default (props) => (
  <div className={`hero ${props.isHome ? "" : "not-home-hero"}`}>
    <div className="content">
      <img src={require("../assets/images/millbrae-logo.png")} alt="" />
      <span>{props.isAdmin ? "Admin Page" : "Millbrae Station"}</span>
    </div>
  </div>
)
