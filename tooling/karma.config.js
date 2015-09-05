var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: '../tooling/tests.webpack.js', watched: false },
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      '../tooling/tests.webpack.js': ['webpack'],
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,      
            loader: 'babel-loader',
            include: path.resolve(__dirname, '../src')
          }
        ],
      },
      watch: true,
    },
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      require("karma-webpack"),
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ]
  });
};