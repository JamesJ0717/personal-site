import React from "react"
import { Image, Row, Col } from "react-bootstrap"
import Me from "../images/melogo.png"

export default () => {
  let links = [
    {
      url: "mailto:me@jamesjohnson.io",
      label: "Email",
      display: "me@jamesjohnson.io",
    },
    {
      url: "https://www.twitter.com/jamesjohnsondev",
      label: "Twitter",
      display: "@jamesjohnsondev",
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
      url: "https://www.jamesjohnson.io/JJ_Resume.pdf",
      label: "Resume",
      display: "jamesjohnson.io/JJ_Resume.pdf",
    },
  ]
  return (
    <>
      <div id="contact">
        <h4>Contact</h4>
        <Row>
          <Col className="col-2">
            <Image src={Me} alt="Picture of me" className="w-100" />
          </Col>
          <Col className="">
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
