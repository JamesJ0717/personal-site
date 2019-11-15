import React, { Component } from "react"
import Layout from "../components/layout"

export default class Resume extends Component {
  render() {
    return (
      <Layout>
        <embed
          src={"https://s3.amazonaws.com/jj-resume.pdf/JJ_Resume.pdf#toolbar=0"}
          title="Resume"
          style={{ height: "1300px", width: "100%" }}
        />
      </Layout>
    )
  }
}
