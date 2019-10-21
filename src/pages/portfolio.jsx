import React from "react"
import { Card, CardDeck, Button } from "react-bootstrap"

import Layout from "../components/layout"

function displayProjects(titles, bodies, hidden) {
  var cards = []
  for (let index = 0; index < titles.length; index++) {
    let style = { display: hidden[index] }
    let card = (
      <div className="col-4">
        <Card key={titles[index]}>
          <Card.Header>
            <Card.Title>
              <a href={"/portfolio/" + titles[index]}>{titles[index]}</a>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>{bodies[index]}</Card.Text>
          </Card.Body>
          <Card.Footer style={style}>
            <Button href={"https://github.com/jamesj0717/" + titles[index]}>
              View Code
            </Button>
            <Button href={"https://" + titles[index] + ".jamesjohnson.io"}>
              View Site
            </Button>
          </Card.Footer>
        </Card>
      </div>
    )
    cards.push(card)
  }
  // console.log(cards);
  return cards
}

const portfolio = () => {
  var titles = ["OPCS", "Media-Site", "HomeLab", "CS490-Stockerino"]
  var bodies = [
    "OPCS is the culmination of a semesters long work on creating an online programming competition site. For my CS370 Software Engineering class, the instructor broke the class up into groups and then gave the groups a project. My group was given this programming competition.",
    "This is a very simple site, indeed. The main goal was for me to have a way of viewing Plex, Radarr, and Sonarr without having them at their own subdomains or having the ports exposed to the internet. I knew about Nginx being able to proxy requests, but I did not know the power of using Nginx within Docker. That is where everything got exciting.",
    "My HomeLab is where I run all of my side projects. I enjoy tinkering with a bunch of different technologies, so I run Docker on an Ubuntu machine, which allows me to quickly try out new things. As a matter of fact, this website is running Nginx within a Docker container.",
    "Stockerino is my CS490 class project. The class was all about Cross Platform Mobile Development with Dart and Flutter so the project was to develop an app. I decided to create a stock ticker app.",
  ]
  var hidden = ["", "", "none", ""]
  var cards = displayProjects(titles, bodies, hidden)
  return (
    <Layout>
      <div className="main">
        <h1>Portfolio</h1>

        <CardDeck>{cards.map(card => card)}</CardDeck>
      </div>
    </Layout>
  )
}

export default portfolio
