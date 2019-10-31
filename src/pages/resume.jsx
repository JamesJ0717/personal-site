import React, { Component } from "react"
import "pdfjs-dist"
import Layout from "../components/layout"

export default class Resume extends Component {
  render() {
    return (
      <Layout>
        <embed
          src={"/JJ_Resume.pdf#toolbar=0"}
          alt="Resume"
          style={{ height: "1300px", width: "100%" }}
        />
      </Layout>
    )
  }
}
