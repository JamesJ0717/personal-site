import React from "react"
import { Navbar, NavDropdown, Nav } from "react-bootstrap"

export default () => {
  var linkstyle = {
    textDecoration: "none",
    color: "black",
    margin: "0 10px",
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
      <Navbar.Brand href="/">James Johnson</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <NavDropdown style={linkstyle} title="Other Stuff">
            <NavDropdown.Item href="/otherStuff">Other Stuff</NavDropdown.Item>
            <NavDropdown.Item href="/otherStuff/Fall2019CNYHackathon">
              Fall 2019 CNY Hackathon
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
