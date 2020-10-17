import React from "react"
import { Link } from "gatsby"

import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <Header />
      <div
        className="content"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
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
  )
}

export default Layout
