import React from "react"
import { Image, Row, Col } from "react-bootstrap"
import Me from "../../static/melogo.png"

export default () => {
  return (
    <div id="contact">
      <h4>Contact</h4>
      <Row>
        <Col>
          <Image src={Me} className="mh-100" />
        </Col>
        <Col className="col-10">
          <p>
            If you would like to contact me, you could send an email to{" "}
            <a href="me@jamesjohnson.io">me@jamesjohnson.io</a> or you can also
            reach out on Twitter,{" "}
            <a href="https://twitter.com/jameslovesalex">@jameslovesalex</a>.
          </p>
          <p>
            For a list of all of my repositories and what I am looking at on
            GitHub, <a href="https://github.com/jamesj0717/">JamesJ0717</a>.
          </p>
          <p>
            My LinkedIn is at{" "}
            <a href="https://www.linkedin.com/in/jamesjjjohnson/">
              www.linkedin.com/in/jamesjjjohnson
            </a>
            .
          </p>
          <p>
            If you are interested in checking out my resume, you can view it{" "}
            <a href="https://www.jamesjohnson.io/JJ_Resume.pdf">here</a>.
          </p>
        </Col>
      </Row>
    </div>
  )
}
