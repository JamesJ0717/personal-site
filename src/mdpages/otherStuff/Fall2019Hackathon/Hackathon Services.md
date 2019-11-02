---
title: Hackathon Services Fall 2019
date: "2019-11-01"
parent: fall2019hackathon
---

## Router

The router is the heart of the network - it handles all traffic 
into and out of the internal network.

### Scoring

The router is scored on it's external interface.

#### Ping

- Green: Router is responding to pings
- Yellow: ???
- Red: Router is _not_ responding to pings

---- 

## DNS

Team DNS Server.

### Scoring

The DNS server is an internal service that is scored from outside the router.

_Note that `<T>` represents the team's number_

```yaml
www.team<T>.com:     172.18.13.<T> # Public Website
shell.team<T>.com:   172.18.14.<T>  # External SSH server
ftp.team<T>.com:     172.18.14.<T>  # FTP server
web.team<T>.net:     192.168.<T>.5 # Internal IP to webserver
db1.team<T>.net:     192.168.<T>.7 # MySQL server
ns1.team<T>.net:     192.168.<T>.10 # DNS Server
gateway.team<T>.net: 192.168.<T>.1 # Router
```

#### Forward lookups

- Green: Domain name resolved correctly
- Yellow: DNS Server was queried, but the domain name did not resolve correctly
- Red: Could not connect to DNS server

#### Reverse lookups

- Green: IP resolved correctly
- Yellow: DNS Server was queried, but the IP did not resolve correctly
- Red: Could not connect to DNS server

---- 

## WWW

### Description

Web server containing a customizable PHP web application.

### Scoring

The Web server is an internal service that is scored from outside the router.

#### Web Server

- Green: Webpage is served
- Yellow: Port is open, no webpage served
- Red: Port is closed

#### Web Content

Green: Page is served with no errors (Full functionality)
Yellow: Page is served with some errors (Limited functionality, site is still up)
Red: Completely incorrect content / no content

---- 

## SQL

Linux MySQL server that supports the Web Application.

MySQL Data is preconfigured for the web application, and can be restored via the `sccommunity.sql` file. The `heyworthr` SQL user represents a backup user, and must be able to authenticate with the MySQL server.

Additional SQL credentials for this server:

- MySQL root login: `abc123`
- MySQL scoring user: `heyworthr:CNYHacksF18`

**Scoring Account is out of scope for Red Team**

### Scoring

The SQL server is an internal service that is scored from the internal team network.

#### MySQL

- Green: MySQL user is able to connect and authenticate
- Yellow: MySQL is running, but user is unable to authenticate
- Red: MySql is not running, or the port is closed

---- 

## SSH / FTP

### Description

The shell server is an externally-faced SSH and FTP server allowing access to the internal network.

### Scoring

#### SSH

Green: Angela Moss is able to log in via SSH key
Yellow: SSH is up, Angela Moss is unable to login
Red: SSH is down (Port closed, invalid response from SSH)

#### FTP Service

Green: Elliot Alderson is able to log in via FTP
Yellow: FTP is up, Elliot Alderson is unable to login or retrieve file
Red: FTP is down (Port closed, invalid response from FTP)

#### FTP Content

Green: Elliot Alderson is able to retrieve file with _proper_ contents
Yellow: Elliot Alderson is able to retrieve file, but contents are wrong
Red: FTP is down, or Elliot Alderson is unable to retrieve file 

### Legitimate Users

Giddeon Goddard
Ben Rappaport
Angela Moss
Elliot Alderson

---- 

## Backup

This server is within scope for attack, but we haven't done anything specifically to exploit this server. Consider this a clean machine for backing up files.

### Scoring

None.