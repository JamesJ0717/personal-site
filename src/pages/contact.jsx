import React from "react"
import Layout from "../components/layout"
import { Image, Row, Col } from "react-bootstrap"
import Me from "../images/melogo.png"

export default () => {
  return (
    <Layout>
      <Row>
        <Col>
          <Image src={Me} />
        </Col>
        <Col className="col-10">
          <p>
            If you would like to contact me, please send an email to{" "}
            <a href="me@jamesjohnson.io">me@jamesjohnson.io</a>.
          </p>
          <p>
            You can also reach out on Twitter. I am{" "}
            <a href="https://twitter.com/jameslovesalex">@JamesLovesAlex</a>.
          </p>
          <p>
            For a list of all of my repositories and what I am looking at on
            GitHub, <a href="https://github.com/jamesj0717/">JamesJ0717</a>.
          </p>
          <p>
            For any job oppurtunities or to checkout my LinkedIn, go to{" "}
            <a href="https://www.linkedin.com/in/jamesjjjohnson/">
              www.linkedin.com/in/jamesjjjohnson
            </a>
            .
          </p>
        </Col>
      </Row>
    </Layout>
  )
}
