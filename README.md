# Background jobs with Redis & Node.js

<p align="center">
  <img src="https://raw.githubusercontent.com/OptimalBits/bull/master/support/logo%402x.png" width="500"/>
</p>

[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)](https://www.npmjs.com/)
[![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=flat)](LICENSE.md)


# :page_with_curl: About 

When we need to reduce loading time of an application we can do some that take longer to finish working in the 
background, in isolation from our application. In this application made with node.js, i used Bull library for these
jobs. We save the queue info on Redis, a database super strong that allows you to scale fantastically.

# :wrench: Technologies used

<ul>
  <a href="https://nodejs.org/en//"><li>Node.js</li></a>
  <a href="https://expressjs.com"><li>Express</li></a>
  <a href="https://redis.io/"><li>Redis</li></a>
  <a href="https://github.com/OptimalBits/bull"><li>Bull</li></a>
  <a href="https://github.com/vcapretz/bull-board"><li>Bull Board</li></a>
  <a href="https://www.npmjs.com/package/nodemon"><li>Nodemon</li></a>
  <a href="https://www.docker.com/"><li>Docker</li></a>
</ul>

# :hammer: How to run

In this project, i used [redis](https://redis.io/) in a [docker](https://www.docker.com/) container.
To install docker just follow the steps [here](https://docs.docker.com/get-docker/).
After this, run:

```
$ docker run --name mail-redis -p 6379:6379 redis:alpine
```

Now, clone this repo, install all dependencies and run the server:

```
$ git clone https://github.com/IlgssonBraga/bg-jobs-bull-redis.git
$ cd bg-jobs-bull-redis
[bg-jobs-bull-redis]$ npm install
[bg-jobs-bull-redis]$ npm start
```
Now, enjoy!!! :rocket::rocket:

# :memo: License 

This project is under MIT license. Look [License](LICENSE.md) for more details!

---

Made by [Ilgsson Braga](https://github.com/IlgssonBraga) with :heart:
