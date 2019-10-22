import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>

    <p>
      Hello everyone. Welcome to my website! This site is going to be more than
      the traditional Software Developer's website. I do not want it to only be
      for my portfolio, but I want to be able to use this as a place to host my
      projects. Of course, my portfolio with all of my projects are available
      here as they should.{" "}
    </p>

    <h2>A little blurb about me</h2>

    <p>
      If you want to learn more about me, please check out the about me page,
      but just as a quick 'get to know me' sort of thing, this is me. I am a
      Software Developer. I do not know if I would call myself a front-end,
      back-end, full-stack, or some other restrictive title like those. I love
      to write code. Plain and simple. I enjoy designing the front-end of a
      webpage, although being color blind makes it a challenge! The feeling of
      accomplishment after linking the front-end to the back-end and
      successfully querying the database is unexplainable to a non-developer.
      And I know I want to do this forever.{" "}
    </p>
  </Layout>
)
