var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  //  Defines the entrypoint of our application.
  entry: path.resolve(__dirname, '../src/app.js'),

  //  Bundle to a ./build/public/bundle.js file.
  output: {
    path: path.resolve(__dirname, '../build/public'),
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
  },

  //  Configure the plugins. We copy the index.html
  //  file to the build folder.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: 'body' // Inject webpack scripts into the body.
    })
  ]
};