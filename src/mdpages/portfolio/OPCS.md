---
title: OPCS
date: "2018-10-20"
repo: "OPCS"
site: "opcs"
parent: portfolio

---

OPCS is the culmination of a semesters long work on creating an online programming competition site. For my CS370 Software Engineering class, the instructor broke the class up into groups and then gave the groups a project. My group was given this programming competition.

This was my first time coding as a team and it was a great learning experience, I just wish more of my classes were like this. Luckily my team were hard workers and no one slacked off when we needed to get stuff done. The first time we met to discuss what we planned on doing, we all agreed that we would need a front end written in HTML with some CSS and a backed written in Node.js. "Why Node.js?" I suggested Node because it is quick, performance is good, it is cross platform, and there are so many third party packages to choose from. So we began working on the basics: getting some HTML to look good with very basic functionality. Our first hurdle of this new team dynamic came from one of my teammates wanting to use PHP to upload a file where I wanted to use JavaScript. We wound up going with the JavaScript solution in the end.

## Sandboxing

One of the biggest issues with allowing people to upload arbitrary code is you have no idea what it does. Yes you could scrape it and try to make out what it does, but what if it's not so obvious. That's when our professor had mentioned we look into sandboxing the code. The idea is that you build a box around the code to run it in where nothing it does can touch the actual system. He told us to look into Linux containers and **`chroot`** , but I remember reading about this new technology called Docker. If you haven't heard of Docker by now, I'd highly recommend checking it out. So we decided to use Docker to sandbox the code that would be uploaded. Luckily there is an npm package for interacting with Docker. It is called Dockerode and it can be found at [https://www.npmjs.com/package/dockerode][1]. This package allowed our back end to interact with Docker installed on the system.

## Reactiveness

About half way through the class, we realized the front end would have to have some reactiveness to it. That way when someone would upload a file, it could tell them the score and add it to the list of scores on the leaderboard. I had learned a little bit of Vue.js the previous summer, so I suggested we use it. So I went off and rebuilt the front end to use Vue components to have it be more reactive.

While doing this, I was interested in making the site look good too. I began looking into modals and reactivity within modals and found another npm package for just this. This one is called vue-sweetalert2 and can be found at [https://www.npmjs.com/package/vue-sweetalert2][2]. The modals that this package allows us to use are so much nicer than just having generic modals or just a form on the page. Using Vue allowed us to go from static web pages to a full single page reactive site, while also including a way to stop people from viewing pages they're not supposed to.

## What we used

- Docker
- Vue.js
- Node.js/npm
- HTML
- CSS
- Nginx

[1]:	https://www.npmjs.com/package/dockerode
[2]:	https://www.npmjs.com/package/vue-sweetalert2