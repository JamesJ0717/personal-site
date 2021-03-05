import React from "react"
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
    <div id="contact">
      <div className="text-xl">Contact</div>
      <div className="px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Image></Image>
        </div>
        <div className="lg:col-span-9">
          <ul style={{ listStyle: "none" }} className="text-left space-y-2">
            {links.map((link) => (
              <li>
                {link.label}: <a href={link.url}>{link.display}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
