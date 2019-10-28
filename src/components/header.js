import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <Navbar
    style={{
      margin: `0 auto`,
      marginBottom: "1.45rem",
      padding: `1rem`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
    expand="md"
    variant="dark"
    bg="primary"
    sticky="top"
  >
    <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
          href="/portfolio"
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
          href="/resume"
        >
          Resume
        </Nav.Link>
        <Nav.Link
          style={{
            textDecoration: "none",
            color: "white",
            margin: "0 10px",
          }}
          href="/contact"
        >
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
