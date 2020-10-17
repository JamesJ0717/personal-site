import React from "react"
import { Navbar, Nav } from "react-bootstrap"

export default () => {
  var barstyle = {
    margin: `0 auto`,
    marginBottom: "1.45rem",
    backgroundColor: "#333",
  }

  return (
    <Navbar variant="dark" style={barstyle}>
      <div
        className="d-flex justify-content-between"
        style={{
          width: 960,
          paddingLeft: "1.0875rem",
          paddingRight: "1.0875rem",
          paddingBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Navbar.Brand
          className="justify-content-start"
          style={{ fontSize: "20pt", color: "#eeeeee" }}
          href="/"
        >
          JJ
        </Navbar.Brand>
      </div>
    </Navbar>
  )
}
