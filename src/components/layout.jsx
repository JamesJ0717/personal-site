import React from "react"
import { Link } from "gatsby"
import { Nav, Navbar, Container } from "react-bootstrap"

import "./layout.css"

const Header = () => {
  return (
    <div id="header" className="bg-secondary">
      <Container>
        <Navbar variant="dark" className="px-0 justify-content-between">
          <Navbar.Brand className="justify-content-start">
            <Link to="/" className={`h2 text-body`}>
              JJ
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-between align-middle">
            <Link className={`h5 text-body p-2`} to="/#portfolio">
              Portfolio
            </Link>
            <Link className={`h5 text-body p-2`} to="/#contact">
              Contact
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  )
}

const Footer = () => {
  return (
    <Container id="footer" className="py-4">
      <footer className="footer">
        © James Johnson {new Date().getFullYear()}
        <span> - </span>
        <Link to="/" className="text-body">
          Go Home
        </Link>
      </footer>
    </Container>
  )
}

const Layout = ({ children }) => {
  return (
    <div className="bg-light">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <Header />
      <Container id="body" className="d-flex justify-content-center">
        <main className="py-4">{children}</main>
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
