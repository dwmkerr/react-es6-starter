var path = require('path');

module.exports = {

  //  Defines the entrypoint of our application.
  entry: path.resolve(__dirname, '../src/app.js'),

  //  Bundle to a ./public/bundle.js file.
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },

  //  Use babel for anything that is *.js or *.jsx.
  module: {
    loaders: [
      {
        test: /\.jsx?$/,      
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../src')
      }
    ]
  }
};