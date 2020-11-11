import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { Nav, Navbar, Button } from "react-bootstrap"

import "./layout.css"

const Header = () => {
  return (
    <Navbar
      style={{
        margin: `0 auto`,
      }}
      className={`h-auto pb-4 bg-light`}
    >
      <div
        className={`d-flex justify-content-between align-middle`}
        style={{
          width: 960,
          paddingLeft: "1.0875rem",
          paddingRight: "1.0875rem",
          paddingBottom: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Navbar.Brand className="justify-content-start">
          <Link to="/" className={`h2 text-dark`}>
            JJ
          </Link>
        </Navbar.Brand>
        <Nav className="justify-content-between align-middle">
          <Link className={`text-dark p-2`} to="/#portfolio">
            Portfolio
          </Link>
          <Link className={`text-dark p-2`} to="/#contact">
            Contact
          </Link>
        </Nav>
      </div>
    </Navbar>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <Header />
      <div className={`bg-light`}>
        <div
          className={`content text-"dark"`}
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            minHeight: "100vh",
          }}
        >
          <main style={{ paddingBottom: "2.5rem" }}>{children}</main>
          <footer
            className="footer"
            style={{
              width: "100%",
            }}
          >
            © James Johnson {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <span> - </span>
            <Link to="/">Go Home</Link>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
