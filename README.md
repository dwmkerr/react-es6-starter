# react-es6-starter

A simple starter template for a React ES6 web app

[![Build Status](https://travis-ci.org/dwmkerr/react-es6-starter.svg?branch=master)](https://travis-ci.org/dwmkerr/react-es6-starter)

## Running Heroku Locally

To keep the repository as clean as possible I've left out the `Procfile`
required to run with Heroku locally. However, if you need to do this, just
add a file in the root of the repository named `Procfile` with the contents:

```
web: ./node_modules/.bin/http-server
```

## What's Missing?

### Coverage

It's perfectly possible to get coverage working with this setup, follow the 
instructions on [this great post](https://medium.com/@gunnarlium/es6-code-coverage-with-babel-jspm-karma-jasmine-and-istanbul-2c1918c5bb23)
by Gunnar Lium to see how. However, as it uses packages which are not yet 
stable, I'm leaving this out for now. 

## Further Reading

Some useful material:

1. https://medium.com/@gunnarlium/es6-code-coverage-with-babel-jspm-karma-jasmine-and-istanbul-2c1918c5bb23
2. http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/
3. https://github.com/binarykitchen/gulp-jest-iojs/issues/1
4. http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/
