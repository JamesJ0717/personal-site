import React, { Component } from "react"
import "pdfjs-dist"
import Layout from "../components/layout"

export default class Resume extends Component {
  render() {
    return (
      <Layout>
        <embed
          src={
            "https://raw.githubusercontent.com/JamesJ0717/resume/560b01b0bdc3eff261acae23f2e12adf918e681a/JJ_Resume.pdf#toolbar=0"
          }
          title="Resume"
          style={{ height: "1300px", width: "100%" }}
        />
      </Layout>
    )
  }
}
