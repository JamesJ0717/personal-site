---
title: HomeLab
date: 2019-10-28
parent: other
---

A HomeLab is a place for people to play around with new technologies or equipment. I heard about these when on Reddit. The community of HomeLabers has a subreddit, [/r/HomeLab][1], which is a great place to learn. HomeLabs can be as simple as an old computer or as in-depth as a full '42U Rack'.

## Mine

My HomeLab right now is very basic. I have a Raspberry Pi 3 and an old _"gaming"_ laptop. The Pi is running Ubuntu Server and the laptop is running `Proxmox`, which is an open source Virtualization Platform. Proxmox allows me to create `Virtual Machines` for running really anything. I used to run everything in Docker containers directly on my computer, but now, I can have a VM be a Docker host for running a stack like `Plex` and all of the accoutrements that go along with it. This method of separating things is a lot better than just running everything in containers.

### Proxmox

Proxmox is an awesome piece of software. It takes virtualization to a whole other level, while being open source! [proxmox.com][2] has a lot more information than I do, so if you are interested in reading more, check it out. In short, Proxmox is like using [`Virtual Box`][3] or [`VMWare`][4] or [`Parallels`][5], which are all very good virtualization platforms, but from the web. What I mean by that is instead of being in-front of the computer running the software, you can do all of the configuration remotely. When setting up Proxmox, you give it a web address to be accessed later. Once you go to that address, everything is done from there; the computer you installed Proxmox on no longer _does_ anything, there is no desktop, no pretty interface, just a command line and an address to go to make your VMs.

I like this since everything can be done remotely. I can go to the website and make a new VM just about anywhere I am. It's really that simple.

[1]:	https://www.reddit.com/r/homelab
[2]:	https://www.proxmox.com
[3]:	https://www.virtualbox.org
[4]:	https://www.vmware.com
[5]:	https://www.parallels.com