var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      //  We need to polyfill as PhantomJS doesn't support 'bind'.
      '../node_modules/babel-core/browser-polyfill.js',
      '../src/**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      '../src/**/*.spec.js': ['webpack']
    },
    reporters: ['progress'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,      
            loader: 'babel-loader',
            include: path.resolve(__dirname, '../src')
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true,
    }
  });
};
