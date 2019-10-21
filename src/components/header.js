import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "rebeccapurple",
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          {siteTitle}
        </Link>
      </h3>
      <ul style={{ listStyle: "none", margin: 0, display: "flex" }}>
        {/* <Link
          style={{ textDecoration: "none", color: "white", margin: "0 10px" }}
          to="/portfolio"
        >
          Portfolio
        </Link> */}
        <Link
          style={{ textDecoration: "none", color: "white", margin: "0 10px" }}
          to="/resume"
        >
          Resume
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white", margin: "0 10px" }}
          to="/contact"
        >
          Contact
        </Link>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
