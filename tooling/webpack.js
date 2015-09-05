var path = require('path');

module.exports = {

  //  Defines the entrypoint of our application.
  entry: path.resolve(__dirname, '../src/app.js'),

  //  Where we bundle to.
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js'
  },

  //  Other stuff - in our case babel for anything that is *.js or *.jsx.
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