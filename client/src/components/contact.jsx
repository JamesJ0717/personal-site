import React from "react"
import { Row, Col } from "react-bootstrap"
import Image from "./image"

export default () => {
  let links = [
    {
      url: "mailto:me@jamesjohnson.io",
      label: "Email",
      display: "me@jamesjohnson.io",
    },
    {
      url: "https://www.twitter.com/jamesj_dev",
      label: "Twitter",
      display: "@jamesj_dev",
    },
    {
      url: "https://www.github.com/jamesj0717",
      label: "GitHub",
      display: "github.com/jamesj0717",
    },
    {
      url: "https://www.linkedin.com/in/jamesjjjohnson",
      label: "LinkedIn",
      display: "linkedin.com/in/jamesjjjohnson",
    },
    {
      url: "/JJ_Resume.pdf",
      label: "Resume",
      display: "JJ_Resume.pdf",
    },
  ]
  return (
    <>
      <div id="contact">
        <h4>Contact</h4>
        <Row className="">
          <Col sm={6} md={4} lg={2}>
            <Image></Image>
          </Col>
          <Col sm={6} md={8} lg={10} className="">
            <ul style={{ listStyle: "none" }} className="text-left">
              {links.map((link) => (
                <li>
                  {link.label}: <a href={link.url}>{link.display}</a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </>
  )
}
