import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <embed
        src="https://docs.google.com/gview?url=https://resume-psi.now.sh/JJ_Resume.pdf"
        type="application/pdf"
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
