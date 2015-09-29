# react-es6-starter

A simple starter template for a React ES6 web app, companion to [Getting Started with React & ES6](http://www.dwmkerr.com/getting-started-with-react/).

[![Build Status](https://travis-ci.org/dwmkerr/react-es6-starter.svg?branch=master)](https://travis-ci.org/dwmkerr/react-es6-starter) [![Coverage Status](https://coveralls.io/repos/dwmkerr/react-es6-starter/badge.svg?branch=master&service=github)](https://coveralls.io/github/dwmkerr/react-es6-starter?branch=master)

This project and article demonstrates:

1. How to get started with ES6 code using a combination of Webpack and Babel
2. How to handle ESX transpilation
3. A simple method to support unit tests for your application
4. Code Coverage for ES6

Check the code out, `npm install` and then `npm start`!

```bash
git clone https://github.com/dwmkerr/react-es6-starter.git
cd react-es6-starter
npm install
npm start
```

You can run the tests with:

```bash
npm test
```

## Notes

**Heroku**

The repo will deploy to Heroku as-is with no modifitications.
To keep the repository as clean as possible I've left out the `Procfile`
required to run with Heroku locally. However, if you need to do this, just
add a file in the root of the repository named `Procfile` with the contents:

```
web: ./node_modules/.bin/http-server
```

## Further Reading

Some useful material:

*Testing*
1. [How to easily test React components with Karma and Webpack](http://qiita.com/kimagure/items/f2d8d53504e922fe3c5c)
2. [How to implement testing and code coverage on React with Karma, Babel and Webpack](https://medium.com/@scbarrus/how-to-get-test-coverage-on-react-with-karma-babel-and-webpack-c9273d805063)

*General*
1. https://medium.com/@gunnarlium/es6-code-coverage-with-babel-jspm-karma-jasmine-and-istanbul-2c1918c5bb23
2. http://kentor.me/posts/testing-react-and-flux-applications-with-karma-and-webpack/
3. https://github.com/binarykitchen/gulp-jest-iojs/issues/1
4. http://www.hammerlab.org/2015/02/14/testing-react-web-apps-with-mocha/

## Potential Improvements

[ ] Document setting up `test-debug`.
[ ] Support ES6 and sourcemaps in the debug code.
[ ] Build everything to `build` rather than having a `build` and `public` folder.
[ ] Use the Webpack dev server, support live reloading and hot reloading.
[ ] Show some component state in the React code and some component testing.
[ ] Open the browser after `test-debug` starts.
[ ] Show how a `build` command might differ from a `start` command (may be out of scope).
[ ] Use global mutable state for react, leading into the next in the series (React + Redux).
