import React, { Component } from "react"
import Layout from "../components/layout"

export default class Resume extends Component {
  style = {
    height: "100vh",
    width: "8.5in",
  }
  footer = { position: "fixed", bottom: "0px" }
  render() {
    return (
      <Layout>
        <iframe
          src="https://s3.amazonaws.com/jj-resume.pdf/JJ_Resume.pdf"
          style={this.style}
          frameborder="0"
          title="JJ_Resume.pdf"
        ></iframe>
      </Layout>
    )
  }
}
