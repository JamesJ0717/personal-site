import React from "react"
import { Link } from "gatsby"

import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        className="content"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          position: "relative",
        }}
      >
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <main style={{ paddingBottom: "2.5rem" }}>{children}</main>
        <footer
          className="footer"
          style={{
            width: "100%",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <span> - </span>
          <Link to="/">Go Home</Link>
        </footer>
      </div>
    </div>
  )
}

export default Layout
