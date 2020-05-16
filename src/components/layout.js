import React from "react"
import { Link } from "gatsby"

import "./layout.css"
// import CustomNavbar from "./CustomNavbar"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div className="night" style={{ height: "100" }}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          position: "relative",
          minHeight: "100%",
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
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            height: "2.5rem",
            color: "#eeeeee",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a style={{ color: "#eeeeee" }} href="https://www.gatsbyjs.org">
            Gatsby
          </a>
          <span> - </span>
          <Link style={{ color: "#eeeeee" }} to="/">
            Go Home
          </Link>
        </footer>
      </div>
    </div>
  )
}

export default Layout
