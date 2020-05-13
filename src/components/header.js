import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => {
  var linkstyle = {
    textDecoration: "none",
    color: "black",
  }

  var barstyle = {
    margin: `0 auto`,
    marginBottom: "1.45rem",
    padding: `1rem`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#11CCCC",
  }

  return (
    <Navbar expand="md" variant="light" style={barstyle}>
      <Navbar.Brand style={{ fontSize: "20pt" }} href="/">
        James Johnson
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="/blog" style={linkstyle}>
            Blog
          </Nav.Link>
          <Nav.Link href="/portfolio" style={linkstyle}>
            Portfolio
          </Nav.Link>
          <Nav.Link href="/resume" style={linkstyle}>
            Resume
          </Nav.Link>
          <Nav.Link href="/contact" style={linkstyle}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
