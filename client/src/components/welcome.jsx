import React from "react"

const Welcome = () => {
  return (
    <div>
      <h4>Hi Everybody</h4>
      <p>
        Welcome to my website. This is going to be like a blog site, but also
        like a portfolio, but also including <i>posts</i> about things I do or
        am working on that are fun.
      </p>
      <h5>Me</h5>
      <p>
        A little bit about me... I am a computer guy. I don't know how I would
        describe myself quickly and in a few words. I like working with
        computers; whether it be software engineering, sysadmining, security
        stuff, networking, or just playing around with a new technology, I
        always have fun. I am currently pursuing Bachelor of Science degrees in
        Computer Science and Network & Computer Security. After graduation, I
        still don't really know what I want to do. All I know is, I want to work
        with computers in some way,{" "}
        <i>one of the aforementioned ways would be ideal</i>.
      </p>

      <h5>Purpose</h5>
      <p>
        As I said, this is going to be used like a portfolio. However, I am
        using Gatsby, which is used in a lot of blogs. I{" "}
        <i>
          <b>really</b>
        </i>{" "}
        like how Gatsby has plugins for handling converting{" "}
        <code>Markdown</code> files into pretty <code>HTML</code>. Gatsby is
        built off of React, so I get all of the benefits of reactive components
        and responsiveness from React, while now being able to write all of my
        pages in Markdown and have them displayed nicely as HTML.
      </p>
    </div>
  )
}

export default Welcome
