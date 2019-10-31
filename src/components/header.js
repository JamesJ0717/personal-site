import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default () => {
  var linkstyle = {
    textDecoration: "none",
    color: "white",
    margin: "0 10px",
  }
  var barstyle = {
    margin: `0 auto`,
    marginBottom: "1.45rem",
    padding: `1rem`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }

  return (
    <Navbar
      style={barstyle}
      expand="md"
      variant="dark"
      bg="primary"
      sticky="top"
    >
      <Link style={linkstyle} to="/">
        <h3>James Johnson</h3>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link style={linkstyle} to="/otherStuff">
            Other Stuff
          </Link>
          <Link style={linkstyle} to="/portfolio">
            Portfolio
          </Link>
          <Link style={linkstyle} to="/resume">
            Resume
          </Link>
          <Link style={linkstyle} to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
