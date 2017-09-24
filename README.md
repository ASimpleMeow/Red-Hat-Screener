# Users API

This is a screener project for Red Hat, as per their suggestion and due to my complete lack of knowledge on RESTful API's, I cloned their template and worked upon that.

Their template can be found here : [Github](https://github.com/feedhenry/users-api)

---

## About

Prior to this I had no knowledge about RESTful API's, the Express framework and MongoDB. With only very limited experience and understanding about Nodejs and Javascript. 

However I am very proud to stay that I came out with a much better understanding about what RESTful API's are and what API's are in general. As of yet I haven't fully completed the requirements, but I feel that I managed to overcome a large hurdle and the rest of this project should be much easier.

This has given me a huge boost in confidence. I believe that if I ever encouter this situation of having little to no understanding of some technology, I won't feel as lost or helpless.

---

## Pre-requisites

- Git
- Node.js
- npm
- MongoDB 3.2.x
- Postman (for testing)

## Getting Started
    
    Run 'mongod' command in a seperate shell
    git clone <this repository>
    npm install
    npm run-script seed
    npm start
    url : http://localhost:8000

## Running Tests

I have not as of yet added my own test, so only tests present are those part of Red Hat's template.

    npm test
    
## API Documentation

See [API.md](API.md) for details.


## Progress

For the first number of day since recieving the screener, I spend the majority of my time familiarising myself with RESTful API's and the new technologies, only after making my own simple sample API's with the help of online documentaions and tutorials I started working on this screener.


I have implemented the POST and DELETE HTTP requests as of yet.


__Bugs/Problems encountered:__ POST request for creating new users had empty resource.body


__Solution:__ Use Body-Parser json in the post request to parse into a json format.