import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => {
  var barstyle = {
    margin: `0 auto`,
    marginBottom: "1.45rem",
    padding: `1rem`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
  }

  return (
    <Navbar expand="md" variant="dark" style={barstyle}>
      <Navbar.Brand style={{ fontSize: "20pt", color: "#eeeeee" }} href="/">
        James Johnson
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="/blog" style={{ color: "#eeeeee" }}>
            Blog
          </Nav.Link>
          <Nav.Link href="/portfolio" style={{ color: "#eeeeee" }}>
            Portfolio
          </Nav.Link>
          <Nav.Link href="/resume" style={{ color: "#eeeeee" }}>
            Resume
          </Nav.Link>
          <Nav.Link href="/contact" style={{ color: "#eeeeee" }}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
