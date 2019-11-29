import React from "react"
import PropTypes from "prop-types"

import Menu from "./menu"
import "./global-css.css"

const Layout = ({ children }) => {

  return (
    <>
      <Menu />
      <main>
        <div style={{ marginTop: `0%`, marginLeft: `4%`, marginRight: `4%` }}>
          {children}
        </div>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
