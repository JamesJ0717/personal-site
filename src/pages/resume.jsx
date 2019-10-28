import React, { Component } from "react"
import Layout from "../components/layout"

// import JJResume from "../Resume/JJ_Resume"

export default class Resume extends Component {
  style = {
    height: "1300px",
    width: "100%",
  }
  render() {
    return (
      <Layout>
        <iframe
          typeof="application/pdf"
          title="JJ_Resume"
          style={this.style}
          src="https://s3.amazonaws.com/jj-resume.pdf/JJ_Resume.pdf#toolbar=0"
          id="resume"
        />
      </Layout>
    )
  }
}
