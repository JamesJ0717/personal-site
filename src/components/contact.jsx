import React from "react"
import { Row, Col } from "react-bootstrap"
import small from "../images/Melogo128x128.png"
import medium from "../images/Melogo256x256.png"
import large from "../images/Melogo512x512.png"

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
      display: "jamesjohnson.io/JJ_Resume.pdf",
    },
  ]
  return (
    <>
      <div id="contact">
        <h4>Contact</h4>
        <Row>
          <Col className="col-2">
            <img
              src={small}
              srcSet={`${small} 320w, ${medium} 768w, ${large} 1280w`}
              sizes={"100%"}
              alt="Me"
            />
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
