import React, { Component } from "react"
import { Col } from "react-bootstrap"
import Layout from "../components/layout"

export default class Resume extends Component {
  style = {
    height: "100vh",
    width: "100%",
  }
  render() {
    return (
      <Layout>
        <Col md="auto">
          <iframe
            typeof="application/pdf"
            style={this.style}
            title="JJ_Resume"
            src="https://s3.amazonaws.com/jj-resume.pdf/JJ_Resume.pdf#toolbar=0"
          ></iframe>
        </Col>
      </Layout>
    )
  }
}
