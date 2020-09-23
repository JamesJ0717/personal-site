import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <embed
        src="https://docs.google.com/gview?url=https://resume-psi.now.sh/JJ_Resume.pdf&embedded=true"
        type="application/pdf"
        title="Resume"
        frameborder="0"
        style="width: 816px; height: 1056px;"
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
