---
title: Media Subdomain
date: "2019-01-20"
repo: "Media-Site"
site: "media-site"
parent: portfolio

---

This is a very simple site, indeed. The main goal was for me to have a way of viewing Plex, Radarr, and Sonarr without having them at their own subdomains or having the ports exposed to the internet. I knew about Nginx being able to proxy requests, but I did not know the power of using Nginx within Docker. That is where everything got exciting.

## Docker

If you don't already know what Docker is, I'd highly check it out. [https://docker.com][1]. Now, Docker containers can be on their own network just like virtual machines, that's one of the things I love about using them. I can spin up a bunch of containers and have them all talking to each other without having to configure anything other than what network to use.

I have a docker-compose.yaml file for all of the different additions to Plex, as well as Plex. I was able to view these additions either by going to the computers IP address if I was local or I needed to have separate subdomains for every "app." Both of these were annoying and cumbersome, so I explored other ways to be able to add new movies and shows. This is where reverse proxying come into play.

## Reverse Proxy

What's a reverse proxy? In layman's terms, a reverse proxy sends your request as though IT had made it. It's like a rudimentary VPN used for appearing in a different location. I'm my case I wanted my server to think all of the requests were coming from itself. Nginx is a web server with a built in proxy. This means it can serve web content and proxy requests at the same time. Without it I could not have done this as easily as I did.

	...
	location /plex {
	    return https://plex.mydomain;
	}
	location /radarr {
	    proxy_pass http://Radarr:7878;
	}
	...

What this does is whenever a request comes to Nginx, if the url ends with /plex, it will return the string `https://...` But the reverse proxying happens with /radarr; here, the server passes on the request to the Radarr host, a locally running Docker container, and acts as though it made the request. To radarr, it thinks my server is hitting it with requests and will gladly accept and return its response.

## Why? How? What did I learn

Initially this was just a fun project for me to work on when I had some free time, but it developed into a way to really dive into Nginx and reverse proxying. Everything was done using

- Docker
- Nginx
- HTML
- CSS

The Nginx configuration files can be found at [https://github.com/jamesj0717/Media-Site][2]. From this, I learned a lot more about Nginx and reverse proxying as a whole. As well as learning about that, I learned more HTML and CSS stuff regarding `<iframe>` and styling to make sites look good on every platform.

[1]:	https://docker.com
[2]:	https://github.com/jamesj0717/Media-Site