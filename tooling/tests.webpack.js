// ES5 shims for Function.prototype.bind, Object.prototype.keys, etc. 
require('core-js/es5');

//  Require anything that's named *.spec.js
var context = require.context("../src", true, /\.spec\.js$/);
context.keys().forEach(context);