import React from "react"
import Layout from "../components/layout"
import { Image, Row, Col } from "react-bootstrap"
import Me from "../images/melogo.png"

export default () => {
  return (
    <div id="contact">
      <h3>Contact</h3>
      <Row>
        <Col>
          <Image src={Me} className="mh-100" />
        </Col>
        <Col className="col-10">
          <p>
            If you would like to contact me, you could send an email to{" "}
            <a href="me@jamesjohnson.io">me@jamesjohnson.io</a> or you can also
            reach out on Twitter. I am{" "}
            <a href="https://twitter.com/jameslovesalex">@JamesLovesAlex</a>.
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
        </Col>
      </Row>
    </div>
  )
}
