import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <embed
        src="https://s3.amazonaws.com/jj-resume.pdf/JJ_Resume.pdf#toolbar=0"
        title="Resume"
      />
      <p></p>
      <a
        href="https://www.notion.so/jamesjohnson/James-Johnson-83fad6a684c64851bbfcbb368fdef90e"
        style={{ alignContent: "normal" }}
      >
        Detailed Resume
      </a>
    </Layout>
  )
}
