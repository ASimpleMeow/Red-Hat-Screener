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

I have built upon Red Hat's template for the tests and added my own for POST, PUT and DELETE. As of 17:00 25-09-2017 all 5 tests pass successfully. I have additionally tested this in Postman to make certain that the API works.

    npm test
    
## API Documentation

See [API.md](API.md) for details.


## Progress

For the first number of day since recieving the screener, I spend the majority of my time familiarising myself with RESTful API's and the new technologies, only after making my own simple sample API's with the help of online documentaions and tutorials I started working on this screener.

---
(24-09-2017)I have implemented the POST and DELETE HTTP requests as of yet.

__Bugs/Problems encountered:__ POST request for creating new users had empty resource.body

__Solution:__ Use Body-Parser json in the post request to parse into a json format.

---
(25-09-2017)I have implemented the PUT HTTP request to update user information

__Bugs/Problems encountered:__ None.

---
(25-09-2017) I have implemented testing for POST, PUT and DELETE, and although I encountered some minor errors at first, it was quickly resolved. I used [this link](http://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/) for references and help while writing the tests.

---
(27-09-2017) I have implemented the navigation in the website, as well as rendering of the API.md

__Bugs/Problems encountered:__ Using the `<a>` (hyperlink) tag's href to navigate

__Solution__: Render the page in app.js, direct where the ejs file is for it to render and use the localhost:8000 link for href.